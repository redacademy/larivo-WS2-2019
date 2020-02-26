const { Query } = require('./Query')
const { auth } = require('./Mutation/auth')
const { story } = require('./Mutation/story')
const { Subscription } = require('./Subscription')
const { Story } = require('./Story')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...story
  },
  Subscription,
  Story
}
