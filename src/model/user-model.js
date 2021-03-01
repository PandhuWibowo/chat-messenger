const  db = require('../database/connection')

module.exports = class User {
  constructor(user) {
    this.name = user.name
    this.phone_number = user.phone_number
  }

  // Get All Users
  static getUsers () {
    return db.execute(`SELECT * FROM users`)
  }

  // Find one user
  static getUser (userId) {
    return db.execute('SELECT * FROM users WHERE id = ?', [userId])
  }

  // Create new user
  static createUser (payload) {
    return db.execute('INSERT INTO users (id, name, phone_number) VALUES (?, ?, ?)',
    [
      payload.id,
      payload.name,
      payload.phone_number
    ])
  }
}