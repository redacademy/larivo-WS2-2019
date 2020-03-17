const { getUserId } = require('../../utils')

const story = {
  async createStory(parent, { title, content, hashtags }, context) {
    const userId = getUserId(context)
    const { existinghashtags, newhashtags } = hashtags.reduce(
      (hashtagsummary, hashtag) => {
        const existingEntry =
          hashtags && hashtags.find(({ name }) => name === hashtag)
        if (existingEntry) {
          return {
            ...hashtagsummary,
            existinghashtags: [
              ...hashtagsummary.existinghashtags,
              existingEntry.id
            ]
          }
        } else {
          return {
            ...hashtagsummary,
            newhashtags: [...hashtagsummary.newhashtags, hashtag]
          }
        }
      },
      { existinghashtags: [], newhashtags: [] }
    )
    return context.prisma.createStory({
      title,
      content,
      hashtags: {
        create: newhashtags.map(name => ({ name })),
        connect: existinghashtags.map(id => ({ id }))
      },
      published: true,
      author: { connect: { id: userId } }
    })
  },

  async createDraft(parent, { title, content, hashtags }, context) {
    const userId = getUserId(context)
    const { existinghashtags, newhashtags } = hashtags.reduce(
      (hashtagsummary, hashtag) => {
        const existingEntry =
          hashtags && hashtags.find(({ name }) => name === hashtag)
        if (existingEntry) {
          return {
            ...hashtagsummary,
            existinghashtags: [
              ...hashtagsummary.existinghashtags,
              existingEntry.id
            ]
          }
        } else {
          return {
            ...hashtagsummary,
            newhashtags: [...hashtagsummary.newhashtags, hashtag]
          }
        }
      },
      { existinghashtags: [], newhashtags: [] }
    )
    return context.prisma.createStory({
      title,
      content,
      hashtags: {
        create: newhashtags.map(name => ({ name })),
        connect: existinghashtags.map(id => ({ id }))
      },
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
  },

  async like(parent, { id }, context) {
    const userId = getUserId(context)

    return context.prisma.updateStory({
      where: { id },
      data: {
        likes: {
          connect: [{ id: userId }]
        }
      }
    })
  },

  async favoriteStory(parent, { id }, context) {
    const userId = getUserId(context)

    return context.prisma.updateUser({
      where: { id: userId },
      data: {
        favoriteStories: {
          connect: { id }
        }
      }
    })
  }
}

module.exports = { story }
