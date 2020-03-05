const User = {
  hashtags: ({ id }, args, context) => context.prisma.user({ id }).hashtags(),

  favoriteStories: ({ id }, args, context) =>
    context.prisma.user({ id }).favoriteStories()
}

module.exports = {
  User
}
