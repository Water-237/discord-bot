const { Client, GatewayIntentBits, SnowflakeUtil } = require('discord.js');

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

client.login('TOKEN');
