const wsClient = require('./src/ws');
const startExpress = require('./src/express');
const bot = require('./src/bot');

(async () => {
  wsClient.on('close', () => {
    console.log('closed');
  });
  await bot.launch();
  await startExpress(wsClient, bot);
})();
