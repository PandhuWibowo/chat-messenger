import UserModel from '../model/user-model'

const getUsers = () => {
  try {
    const data = UserModel.getUsers()
    console.log(data)
    // if (data.status !== 200) return { status: data.status, message: data.message}
    return { status: 200, message: 'Users successfully fetched', data: data || [] }
  } catch (error) {
    console.error(error)
    return Promise.reject(error)
  }
}

const getUser = async userId => {

}

export default {
  getUsers,
  getUser
}