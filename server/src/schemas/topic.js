const topic = `
  type Topic {
    id: ID!
    author_id: ID!
    tab: String
    content: String
    title: String
    reply_count: Int
    visit_count: Int
    create_at: String
    author: Author
    replies: [Reply]
  }

  input TopicsInput {
    page: Int
    tab: String
    limit: Int
    mdrender: String
  }
`;

exports.topic = topic;