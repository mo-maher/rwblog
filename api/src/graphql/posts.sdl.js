export const schema = gql`
  type Post {
    id: Int!
    title: String
    content: String
    author: String!
    category: String!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: Int!): Post @skipAuth
  }

  input CreatePostInput {
    title: String
    content: String
    author: String!
    category: String!
  }

  input UpdatePostInput {
    title: String
    content: String
    author: String
    category: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
