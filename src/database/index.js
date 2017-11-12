var contentful = require('contentful')
var client = contentful.createClient({
  space: 'lcexepslu397',
  accessToken: 'c44517e368b43891776490a25672f3838f93351f766134befcdba687d2b18cc4'
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
  getEntriesByDrug: function (contentType, drugTitle, limit, skip) {
    return client.getEntries({
      content_type: contentType,
      'fields.drug.sys.contentType.sys.id': 'drug',
      'fields.drug.fields.name[match]': drugTitle,
      limit,
      skip,
    }).then(response => response.items
        .map(item => item.fields))
      .catch(console.error)
  },
  getEntryById: function (entryId) {
    // Here we use getEntries, instead of getEntry to get linked assets (images etc) resolved inside response.
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
  },
  getUpcomingEvents: function(limit, skip) {
    return client.getEntries({
      content_type: 'event',
      order: 'fields.start',
      'fields.start[gte]': new Date(),
      limit,
      skip,
    })
    .then((response) => response.items
      .map(item => item.fields))
    .catch(console.error)
  },
  getPreviousEvents: function(limit, skip) {
    return client.getEntries({
      content_type: 'event',
      order: 'fields.start',
      'fields.start[lte]': new Date(),
      limit,
      skip,
    })
    .then((response) => response.items
      .map(item => item.fields))
    .catch(console.error)
  }
}
