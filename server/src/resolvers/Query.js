const { getUserId } = require('../utils')

const Query = {
  guestFeed(parent, args, context) {
    const where = {
      published: true
    }
    return context.prisma.stories({
      where,
      orderBy: 'createdAt_DESC'
    })
  },

  async userFeed(parent, args, context) {
    const userId = getUserId(context)
    const where = {
      published: true,
      author: {
        id_not_in: userId
      }
    }

    return context.prisma.stories({
      where,
      orderBy: 'createdAt_DESC'
    })
  },

  users(parent, args, context) {
    return context.prisma.users()
  },

  story(parent, { id }, context) {
    return context.prisma.story({ id })
  },

  user(parent, { id }, context) {
    return context.prisma.user({ id })
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
        AND: [
          {
            hashtags_some: {
              name_in: hashtags.map(tag => tag.name)
            }
          },
          {}
        ]
      }
    })
  },

  searchedUsers(parent, { query }, context) {
    const userId = getUserId(context)
    return context.prisma.users({
      where: {
        id_not_in: userId,
        userName_contains: query
      }
    })
  },

  searchedStories(parent, { query }, context) {
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
  },

  recommendedHashtags: (parent, args, context) =>
    context.prisma.hashtags({ orderBy: 'createdAt_DESC', first: 12 })
}
module.exports = { Query }
