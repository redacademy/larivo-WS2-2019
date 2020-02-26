const Story = {
  author: ({ id }, args, context) => {
    return context.prisma.story({ id }).author()
  }
}

module.exports = {
  Story
}
