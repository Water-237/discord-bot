const { Client, GatewayIntentBits } = require('discord.js');

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
  client.login("--BOT TOKEN--");

