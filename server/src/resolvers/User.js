const { getUserId } = require('../utils')

const User = {
  stories(parent, args, context) {
    const id = getUserId(context)
    const where = {
      published: true,
      author: {
        id
      }
    }
    return context.prisma.stories({ where, orderBy: 'createdAt_DESC' })
  },

  drafts(parent, args, context) {
    const id = getUserId(context)
    const where = {
      published: false,
      author: {
        id
      }
    }
    return context.prisma.stories({ where, orderBy: 'createdAt_DESC' })
  },

  favoriteStories: ({ id }, args, context) =>
    context.prisma.user({ id }).favoriteStories({ orderBy: 'createdAt_DESC' }),

  hashtags: ({ id }, args, context) => context.prisma.user({ id }).hashtags()
}
module.exports = {
  User
}
