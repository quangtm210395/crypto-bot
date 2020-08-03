const WebSocket = require('ws');

const client = new WebSocket('wss://stream.binance.com:9443/ws');

client.on('open', () => {
  console.log(
    'stream opened',
  );
});

client.on('message', (data) => {
  console.log(data);
  const { e, result, id } = JSON.parse(data);
  if (!e && !result) {
    console.log('subscribe/unsub success id: ', id);
  }
});

module.exports = client;
