const { Client, GatewayIntentBits } = require('discord.js');

const http = require('http');
const svr = http.createServer(handler);
svr.listen(8081);
function handler (req, res) {
  console.log('url:', req.url)
  console.log('method:', req.method)
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end('<h1>Hello, World!</h1>\n')
};


const BOT_TOKEN = process.env.BOT_TOKEN;

const client = new Client(
    { intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent
      ]

  }
  );

  client.on('ready', () => {
    console.log('起動成功');
  });


  client.on('messageCreate', message => {
    if (message.content === 'ボーダー') {
      try {
        message.channel.send('テスト送信');
      } catch (error) {
        console.log(error.message);
      }
    }
  });

client.login(`${BOT_TOKEN}`);
