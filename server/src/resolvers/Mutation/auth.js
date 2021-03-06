const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { getUserId } = require('../../utils')

const auth = {
  async signup(parent, args, context) {
    const password = await bcrypt.hash(args.password, 10)
    const hashtags = await context.prisma.hashtags()
    const { existinghashtags, newhashtags } = args.hashtags.reduce(
      (hashtagsummary, hashtag) => {
        const existingEntry =
          hashtags && hashtags.find(({ name }) => name === hashtag)
        if (existingEntry) {
          return {
            ...hashtagsummary,
            existinghashtags: [
              ...hashtagsummary.existinghashtags,
              existingEntry.id
            ]
          }
        } else {
          return {
            ...hashtagsummary,
            newhashtags: [...hashtagsummary.newhashtags, hashtag]
          }
        }
      },
      { existinghashtags: [], newhashtags: [] }
    )
    const user = await context.prisma.createUser({
      ...args,
      password,
      hashtags: {
        create: newhashtags.map(name => ({ name })),
        connect: existinghashtags.map(id => ({ id }))
      }
    })

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user
    }
  },

  async login(parent, { email, password }, context) {
    const user = await context.prisma.user({ email })
    if (!user) {
      throw new Error(`No user found for email: ${email}`)
    }
    const passwordValid = await bcrypt.compare(password, user.password)
    if (!passwordValid) {
      throw new Error('Invalid password')
    }
    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user
    }
  },

  async updateBio(parent, { bio }, context) {
    const userId = getUserId(context)

    return context.prisma.updateUser({
      where: { id: userId },
      data: { bio }
    })
  },

  async updateUserName(parent, { userName }, context) {
    const userId = getUserId(context)

    return context.prisma.updateUser({
      where: { id: userId },
      data: { userName }
    })
  },

  async updateEmail(parent, { email }, context) {
    const userId = getUserId(context)

    return context.prisma.updateUser({
      where: { id: userId },
      data: { email }
    })
  },

  async deleteUser(parent, { email }, context) {
    return context.prisma.deleteUser({ email })
  },

  async followUser(parent, { id }, context) {
    const userId = getUserId(context)

    await context.prisma.updateUser({
      where: { id: userId },
      data: {
        following: {
          connect: { id }
        }
      }
    })
    return context.prisma.updateUser({
      where: { id },
      data: {
        followers: {
          connect: { id: userId }
        }
      }
    })
  },

  async unFollowUser(parent, { id }, context) {
    const userId = getUserId(context)

    await context.prisma.updateUser({
      where: { id: userId },
      data: {
        following: {
          disconnect: { id }
        }
      }
    })
    return context.prisma.updateUser({
      where: { id },
      data: {
        followers: {
          disconnect: { id: userId }
        }
      }
    })
  }
}

module.exports = { auth }
