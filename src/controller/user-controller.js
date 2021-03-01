import User from '../model/user-model'
import { v4 as uuidv4 } from 'uuid';
class UserController {
  static getUsers = async (req, res) => {
    try {
      const [allUsers] = await User.getUsers()
      if (allUsers.length === 0) return res.status(200).send({
        status: 200,
        message: 'No Users found',
        data: []
      })
      return res.status(200).send({
        status: 200,
        message: 'Users successfully fetched',
        data: allUsers
      })
    } catch (error) {
      console.error(error)
      if (error.status) return res.status(error.status).send({
        status: error.status,
        message: error.message
      })
      else return res.status(500).send({
        status: 500,
        message: 'Internal Server Error'
      })
    }
  }

  static getUser = async (req, res) => {
    try {
      const [user] = await User.getUser(req.params.user_id)
      if (user.length === 0) return res.status(200).send({
        status: 200,
        message: 'No User found',
        data: {}
      })

      const [findOneUser] = user
      return res.status(200).send({
        status: 200,
        message: 'User successfully fetched',
        data: findOneUser
      })
    } catch (error) {
      console.error(error)
      if (error.status) return res.status(error.status).send({
        status: error.status,
        message: error.message
      })
      else return res.status(500).send({
        status: 500,
        message: 'Internal Server Error'
      })
    }
  }

  static createUser = async (req, res) => {
    try {
      const payload = {...req.body, id: uuidv4()}
      const results = await User.createUser(payload)
      if (results[0].affectedRows > 0) return res.status(201).send({status: 201, message: 'User successfully created'})
    } catch (error) {
      console.error(error)
      if (error.status) return res.status(error.status).send({
        status: error.status,
        message: error.message
      })
      else return res.status(500).send({
        status: 500,
        message: 'Internal Server Error'
      })
    }
  }
}

export default UserController