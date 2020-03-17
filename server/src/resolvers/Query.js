const { getUserId } = require('../utils')

const Query = {
  guestFeed(parent, args, context) {
    const where = {
      published: true
    }
    return context.prisma.stories({
      where,
      orderBy: 'createdAt_DESC',
      first: 25
    })
  },

  async userFeed(parent, args, context) {
    const id = getUserId(context)
    const stories = await context.prisma.user({ id }).stories()
    const where = {
      published: true,
      id_not_in: stories.map(story => story.id)
    }
    return context.prisma.stories({
      where,
      orderBy: 'createdAt_DESC',
      first: 25
    })
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
