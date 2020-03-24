const User = {
  stories: ({ id }, args, context) => {
    const where = {
      published: true,
      author: {
        id
      }
    }
    return context.prisma.stories({ where, orderBy: 'createdAt_DESC' })
  },

  drafts: ({ id }, args, context) => {
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

  hashtags: ({ id }, args, context) => context.prisma.user({ id }).hashtags(),
  following: ({ id }, args, context) => context.prisma.user({ id }).following(),
  followers: ({ id }, args, context) => context.prisma.user({ id }).followers()
}
module.exports = {
  User
}
