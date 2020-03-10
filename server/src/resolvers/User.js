const User = {
  favoriteStories: ({ id }, args, context) =>
    context.prisma.user({ id }).favoriteStories()
}

module.exports = {
  User
}
