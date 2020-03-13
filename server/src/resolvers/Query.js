const { getUserId } = require('../utils')

const Query = {
  feed(parent, args, context) {
    const id = getUserId(context)
    const where = {
      published: true,
      author: {
        id
      }
    }
    return context.prisma.stories({ where })
  },
  drafts(parent, args, context) {
    const id = getUserId(context)
    const where = {
      published: false,
      author: {
        id
      }
    }
    return context.prisma.stories({ where })
  },
  users(parent, args, context) {
    return context.prisma.users()
  },
  story(parent, { id }, context) {
    return context.prisma.story({ id })
  },
  me(parent, args, context) {
    const id = getUserId(context)
    return context.prisma.user({ id })
  },
  async filteredStories(parent, args, context) {
    const id = getUserId(context)
    const hashtags = await context.prisma.user({ id }).hashtags()

    return context.prisma.stories({
      where: {
        author: {
          id
        },

        hashtags_some: {
          name_in: hashtags.map(tag => tag.name)
        }
      }
    })
  }
}
module.exports = { Query }
