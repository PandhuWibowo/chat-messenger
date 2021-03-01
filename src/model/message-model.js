const  db = require('../database/connection')
import { v4 as uuidv4 } from 'uuid';
class Message {
  static sendMessage = async (payload) => {
    return db.execute('INSERT INTO messages (message_id, from_id, to_id, content) values (?,?,?,?)', [
      uuidv4(),
      payload.from_id,
      payload.to_id,
      payload.content
    ])
  }

  static showReceiver = (fromId) => {
    return db.execute('SELECT DISTINCT from_id, to_id FROM messages JOIN users as a ON a.id = messages.to_id JOIN users as b ON b.id = messages.from_id WHERE from_id = ? OR to_id = ?', [fromId, fromId])
  }
}

export default Message