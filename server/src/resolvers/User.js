const User = {
  stories: ({ id }, args, context) => context.prisma.user({ id }).stories(),

  favoriteStories: ({ id }, args, context) =>
    context.prisma.user({ id }).favoriteStories(),

  hashtags: ({ id }, args, context) => context.prisma.user({ id }).hashtags()
}
module.exports = {
  User
}
