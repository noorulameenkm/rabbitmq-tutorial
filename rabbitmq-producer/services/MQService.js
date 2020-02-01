import amqp from 'amqplib/callback_api';

const CONN_URL = "YOUR_AMQP_CONN_URL";

let ch;

amqp.connect(CONN_URL, (error, conn) => {
    conn.createChannel((err, channel) => {
        ch = channel;
    })
})

export const publishToQueue = async(queueName, data) => {
    ch.sendToQueue(queueName, new Buffer(data));
}

process.on('exit', code => {
    ch.close();
    console.log("Closing rabbitmq channel");
});