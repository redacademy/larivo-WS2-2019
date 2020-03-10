const Story = {
  // author: ({ id }, args, context) => {
  //   return context.prisma.story({ id }).author()
  // }
  hashtags: ({ id }, args, context) => context.prisma.story({ id }).hashtags()
}

module.exports = {
  Story
}
