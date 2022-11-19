export const QUERY = gql`
  query ArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      content
      author
      category
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ article }) => {
  return (
    <article key={article.id}>
      <header>
        <h2>{article.title}</h2>
      </header>
      <p>{article.content}</p>
      <div>
        Posted at: {article.createdAt} | author: {article.author} | category:
        {article.category}
      </div>
    </article>
  )
}
