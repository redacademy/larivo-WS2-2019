const { getUserId } = require('../../utils')

const story = {
  async createStory(parent, { title, content, hashtags }, context) {
    const userId = getUserId(context)
    return context.prisma.createStory({
      title,
      content,
      hashtags,
      published: true,
      author: { connect: { id: userId } }
    })
  },

  async createDraft(parent, { title, content, hashtags }, context) {
    const userId = getUserId(context)
    return context.prisma.createStory({
      title,
      content,
      hashtags,
      published: false,
      author: { connect: { id: userId } }
    })
  },

  async publish(parent, { id }, context) {
    const userId = getUserId(context)
    const storyExists = await context.prisma.$exists.story({
      id,
      author: { id: userId }
    })
    if (!storyExists) {
      throw new Error(`Post not found or you're not the author`)
    }

    return context.prisma.updateStory({
      where: { id },
      data: { published: true }
    })
  }
}

module.exports = { story }
