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

  static showMessage = (fromId, toId) => {
    return db.execute('SELECT * FROM messages JOIN users as a ON a.id = messages.to_id JOIN users as b ON b.id = messages.from_id WHERE from_id = ? OR to_id = ? AND from_id = ? OR to_id = ?', [fromId, fromId, toId, toId])
  }

  static showMessageById = (messageId) => {
    return db.execute('SELECT message_id FROM messages WHERE message_id = ?', [messageId])
  }

  static replyMessage = async (payload) => {
    // console.log(payload)
    await db.execute('INSERT INTO messages (message_id, from_id, to_id, content) values (?,?,?,?)', [
      uuidv4(),
      payload.from_id,
      payload.to_id,
      payload.content
    ])

    const [messageId] = await db.execute('SELECT message_id FROM messages WHERE from_id = ? OR to_id = ? AND from_id = ? OR to_id = ? ORDER BY timestamp_sent DESC LIMIT 1', [
      payload.from_id,
      payload.from_id,
      payload.to_id,
      payload.to_id
    ])
    let [lastInsert] = messageId
    lastInsert = JSON.parse(JSON.stringify(lastInsert))

    return db.execute('INSERT INTO message_replies (reply_id, from_id, to_id, message_reply_id, message_id) VALUES (?, ?, ?, ?, ?)',
    [
      uuidv4(),
      payload.from_id,
      payload.to_id,
      payload.message_reply_id,
      lastInsert.message_id
    ])
  }
}

export default Message