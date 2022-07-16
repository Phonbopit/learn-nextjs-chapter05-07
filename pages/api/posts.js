const posts = [
  {
    id: 1,
    title: 'Post #1',
    content: 'lorem ipsum 1',
  },
  {
    id: 2,
    title: 'Post #2',
    content: 'lorem ipsum 2',
  },
]

export default function handler(req, res) {
  res.status(200).json(posts)
}
