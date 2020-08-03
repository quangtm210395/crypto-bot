const express = require('express');

/**
 *
 * @param {import('ws')} client ws client
 * @param {import('telegraf').Telegraf} bot telegraf bot
 */
async function start(client, bot) {
  const app = express();

  app.use((req, res, next) => {
    const { headers } = req;
    if (!headers['user-agent']) {
      return res.json({
        message: 'user-agent header is require',
      });
    }
    return next();
  });

  app.get('/', (req, res) => {
    console.log(req.params);
    res.send('hello');
  });

  app.get('/subscribe', async (req, res) => {
    const { streamName } = req.query;
    client.send(JSON.stringify({
      method: 'SUBSCRIBE',
      params: [
        streamName,
      ],
      id: 1,
    }), (err) => {
      if (err) { console.error('send subscribe error: ', err); }
      console.log('subscribe success');
      res.send('success');
    });
  });

  app.get('/unsubscribe', async (req, res) => {
    const { streamName } = req.query;
    client.send(JSON.stringify({
      method: 'UNSUBSCRIBE',
      params: [
        streamName,
      ],
      id: 1,
    }), (err) => {
      if (err) { console.error('send unsubscribe error: ', err); }
      console.log('unsubscribe success');
      res.send('success');
    });
  });

  app.get('/send', async (req, res) => {
    bot.telegram.sendMessage('@hikariq_channel', 'send test');
    return res.sendStatus(200);
  });

  app.listen(3000, () => {
    console.log('application running at 3000');
  });
}

module.exports = start;
