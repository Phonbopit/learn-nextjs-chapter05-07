const Post = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const url = `https://jsonplaceholder.typicode.com/posts`
  const res = await fetch(url)
  const posts = await res.json()

  const paths = posts.map((post) => {
    return {
      params: { id: String(post.id) },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const id = params.id

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await res.json()

  return {
    props: {
      post,
    },
  }
}

export default Post
