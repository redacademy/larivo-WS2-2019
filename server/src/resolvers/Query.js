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

  filteredStories: async (parent, args, context) => {
    const userId = getUserId(context)
    const hashtags = await context.prisma.user({ id: userId }).hashtags()
    return context.prisma.stories({
      where: {
        hashtags_some: {
          name_in: hashtags.map(tag => tag.name)
        }
      }
    })
  },

  searchedUsers(parent, { query }, context) {
    return context.prisma.users({
      where: {
        userName_contains: query
      }
    })
  },

  searchedStories(parent, { query }, context) {
    console.log(query)
    return context.prisma.stories({
      where: {
        AND: [
          {
            OR: [
              {
                title_contains: query
              },
              {
                content_contains: query
              }
            ]
          }
        ]
      }
    })
  }
}
module.exports = { Query }
