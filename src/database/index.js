var contentful = require('contentful')
var client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'haxffs0abx3c',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'd8ed91ef55f55c89c58a175d4da46cc08b96f605446ddf0cba3c231553921558'
})

export default {
  getEntries: function (contentType, limit, skip) {
    return client.getEntries({
      content_type: contentType,
      limit,
      skip,
    }).then(response => response.items
        .map(item => item.fields))
  },
  getEntryById: function (entryId) {
    // Use getEntries to get linked assets (images etc) resolved inside response. getEntry only gives you a reference ID.
    return client.getEntries({'sys.id': entryId})
      .then(response => response.items[0].fields)
  },
  getEntryBySlug: function (contentType, slug) {
    return client.getEntries({
      content_type: contentType,
      'fields.slug': slug
    })
    .then(response => response.items
      .map(item => item.fields)[0])
    .catch(console.error)
  }
}
