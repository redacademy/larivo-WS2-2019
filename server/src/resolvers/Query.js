const { getUserId } = require('../utils')

const Query = {
  feed(parent, args, context) {
    return context.prisma.story({ where: { published: true } })
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
  users(parent, args, context) {
    return context.prisma.users()
  },
  story(parent, { id }, context) {
    return context.prisma.story({ id })
  },
  me(parent, args, context) {
    const id = getUserId(context)
    return context.prisma.user({ id })
  }
}

module.exports = { Query }
