var amqp = require('amqplib/callback_api');


const CONN_URL = "YOUR_AMQP_CONN_URL";


amqp.connect(CONN_URL, (error, conn) => {
  conn.createChannel((err, channel) => {
    channel.consume('user-messages', message => {
      console.log('..........');
      setTimeout(() => {
        console.log("Message: ", message.content.toString());
        channel.ack(message);
      }, 4000);
    },{ noAck: false })
  })
})
