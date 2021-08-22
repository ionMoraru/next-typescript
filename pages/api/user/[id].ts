import { NextApiHandler } from "next";
import users from '../../../users.json'

const user: NextApiHandler = (req, res) => {
  const { id } = req.query
  const userData = users.find(user => String(user.id) === String(id))

  if (userData) {
    res.status(200).json(userData)
  } else {
    res.status(404).end()
  }
}

export default user