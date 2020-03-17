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

  favoriteStories: ({ id }, args, context) =>
    context.prisma.user({ id }).favoriteStories(),

  hashtags: ({ id }, args, context) => context.prisma.user({ id }).hashtags()
}
module.exports = {
  User
}
