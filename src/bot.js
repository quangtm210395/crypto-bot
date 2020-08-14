
const {
  Telegraf, Markup, log,
} = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN || '', {

});
bot.use(log());

bot.start((ctx) => {
  ctx.reply(`hi ${ctx.from.username}`);
});

bot.command('kb', (ctx) => {
  ctx.reply('key board', Markup.keyboard([
    ['1', '2'],
    ['3', '4'],
  ]).oneTime().resize().extra());
});

bot.launch().catch(console.error);


module.exports = bot;
