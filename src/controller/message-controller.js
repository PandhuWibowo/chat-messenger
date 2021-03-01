import Message from '../model/message-model'
import User from '../model/user-model'

class MessageController {
  static sendMessage = async (req, res) => {
    try {
      const payload = {...req.params, ...req.body}
      const results = await Message.sendMessage(payload)
      return res.status(201).send({
        status: 201,
        message: 'Message successfully stored'
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

  static showReceiver = async (req, res) => {
    try {
      const [allReceiver] = await Message.showReceiver(req.params.from_id)
      if (allReceiver.length === 0) return res.status(200).send({
        status: 200,
        message: 'No Receivers found',
        data: []
      })
      const arrReceivers = []
      allReceiver.forEach(receiver => {
        if (req.params.from_id !== receiver.to_id) arrReceivers.push(receiver.to_id)
        if (req.params.from_id !== receiver.from_id) arrReceivers.push(receiver.from_id)
      });

      const dataReceivers = []
      for (const receiverId of arrReceivers) {
        const [receiver] = await User.getUser(receiverId)
        const [oneIndex] = receiver
        dataReceivers.push(oneIndex)
      }

      return res.status(200).send({
        status: 200,
        message: 'Receivers successfully fetched',
        data: {
          from_id: req.params.from_id,
          data_receiver: dataReceivers
        }
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

  static showMessage = async (req, res) => {
    try {
      const [allMessages] = await Message.showMessage(req.params.from_id, req.params.to_id)
      if (allMessages.length === 0) return res.status(200).send({
        status: 200,
        message: 'No Receivers found',
        data: []
      })

      const arrMessageSpecifyOnly = []
      const params = [req.params.from_id, req.params.to_id]
      for (const message of allMessages) {
        if (!params.includes(message.from_id) || !params.includes(message.to_id)) continue
        arrMessageSpecifyOnly.push(message)
      }
      arrMessageSpecifyOnly.sort((a, b) => b.timestamp_sent - a.timestamp_sent)
      return res.status(200).send({
        status: 200,
        message: 'Messages successfully fetched',
        data: arrMessageSpecifyOnly
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

  static replyMessage = async (req, res) => {
    try {
      const [isMessageExist] = await Message.showMessageById(req.params.message_reply_id)

      if (isMessageExist.length === 0) return res.status(200).send({
        status: 404,
        message: 'No Message found',
        data: {}
      })
      const payload = {...req.params, ...req.body}
      const results = await Message.replyMessage(payload)
      if (results[0].affectedRows > 0) return res.status(201).send({status: 201, message: 'Reply message successfully stored'})
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

export default MessageController