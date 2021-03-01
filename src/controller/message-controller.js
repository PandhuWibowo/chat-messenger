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
        data: dataReceivers
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
}

export default MessageController