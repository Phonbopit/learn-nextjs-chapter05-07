import { useRouter } from 'next/router'

const Blog = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Blog ID : {id}</p>
}

export default Blog
