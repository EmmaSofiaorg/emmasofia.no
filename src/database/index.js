var contentful = require("contentful");
var client = contentful.createClient({
  space: "sd4n79x4e0jc",
  accessToken:
    "e4b5926b0601c58dc7c6acd8a7e27442d564117ff58cf7d6f0cb0bce0cec7c97"
});

export default {
  getEntries: function(contentType, limit, skip) {
    return client
      .getEntries({
        content_type: contentType,
        limit,
        skip
      })
      .then(response => response.items.map(item => item.fields));
  },
  getEntriesByDrug: function(contentType, drugTitle, limit, skip) {
    return client
      .getEntries({
        content_type: contentType,
        "fields.drug.sys.contentType.sys.id": "drug",
        "fields.drug.fields.name[match]": drugTitle,
        limit,
        skip
      })
      .then(response => response.items.map(item => item.fields))
      .catch(console.error);
  },
  getEntryById: function(entryId) {
    // Here we use getEntries, instead of getEntry to get linked assets (images etc) resolved inside response.
    return client
      .getEntries({ "sys.id": entryId })
      .then(response => response.items[0].fields);
  },
  getEntryBySlug: function(contentType, slug) {
    return client
      .getEntries({
        content_type: contentType,
        "fields.slug": slug
      })
      .then(response => response.items.map(item => item.fields)[0])
      .catch(console.error);
  },
  getUpcomingEvents: function(limit, skip) {
    return client
      .getEntries({
        content_type: "event",
        order: "fields.start",
        "fields.start[gte]": new Date(),
        limit,
        skip
      })
      .then(response => response.items.map(item => item.fields))
      .catch(console.error);
  },
  getFAQS: function(limit, skip) {
    return client
      .getEntries({
        content_type: "faq",
        order: "fields.start",
        "fields.start[gte]": new Date(),
        limit,
        skip
      })
      .then(response => response.items.map(item => item.fields))
      .catch(console.error);
  },
  getPreviousEvents: function(limit, skip) {
    return client
      .getEntries({
        content_type: "event",
        order: "fields.start",
        "fields.start[lte]": new Date(),
        limit,
        skip
      })
      .then(response => response.items.map(item => item.fields))
      .catch(console.error);
  },
  getMediaByDate: function(limit, skip) {
    return client
      .getEntries({
        content_type: "mediaClip",
        order: "-fields.publishedDate",
        limit,
        skip
      })
      .then(response => response.items.map(item => item.fields))
      .catch(console.error);
  },
  getMediaByTags: function(tags, limit, skip) {
    return client
      .getEntries({
        content_type: "mediaClip",
        order: "-fields.publishedDate",
        "fields.drugTags[all]": tags,
        limit,
        skip
      })
      .then(response => response.items.map(item => item.fields))
      .catch(console.error);
  }
};
