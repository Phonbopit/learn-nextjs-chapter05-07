export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  const { title } = req.body

  switch (method) {
    case 'GET':
      res.status(200).json({ id, title: `Post #${id}` })
      break
    case 'PUT':
      res.status(200).json({ id, title: title || `Post #${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
