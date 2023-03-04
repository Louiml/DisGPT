const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const ytdl = require('ytdl-core');
const { prefix, token } = require('./config.json');
const ResponsesCount = 56
const responses = require('./responses.json');
const disbut = require('discord-buttons');
disbut(client);

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  const serverCount = client.guilds.cache.size;
  client.user.setActivity(`${serverCount} servers - ${ResponsesCount} responses`, { type: 'WATCHING' });
});

client.on('clickButton', async (button) => {
  if (button.id == 'Regenerate-response') {
      button.reply.send(`Trying to find another response `, false)
      .then(sentMessage => {
        setTimeout(() => {
            sentMessage.edit('Thank you for your patience, Sorry but we didn\'t find any new responses');
        }, 5000);
      });
  } else if (button.id == 'Liked-response') {
    button.reply.send(`<@${button.clicker.user.id}> Like this response`)
    button.clicker.user.send("I saw that you liked our answer if you saw things to upgrade you can type `$suggestion <Suggestion>`, Have a nice day!");
  } else if(button.id == 'Regenerate-response-hey') {
    button.reply.send(`Trying to find another response `, false)
    .then(sentMessage => {
      setTimeout(async () => {
          sentMessage.edit('Thank you for your patience, We find one new responses');
          const likebtn = new disbut.MessageButton()
          .setStyle('green')
          .setLabel('Good response')
          .setID('Liked-response');
          const row = new disbut.MessageActionRow()
          .addComponent([likebtn])
          await button.channel.send({content: 'New response: "Hey!, How can i help you today?"', component: row});
  }, 5000);
    });
  } else if (button.id == 'Regenerate-response-midjourney') {
    button.reply.send(`Trying to find another response`, false)
    .then(sentMessage => {
      setTimeout(async () => {
        sentMessage.edit('Thank you for your patience, We find one new responses')
        const embed = new MessageEmbed()
        .setDescription(responses.RegenMidjourneyResponse)
        const likebtn = new disbut.MessageButton()
        .setStyle('green')
        .setLabel('Good response')
        .setID('Liked-response');
        const row = new disbut.MessageActionRow()
        .addComponent([likebtn])
        await button.channel.send({content: 'New response: ', embed: embed, component: row});
  }, 32000);
    });
  } else if (button.id == 'Regenerate-response-sexchange') {
    button.reply.send(`Trying to find another response`, false)
    .then(sentMessage => {
      setTimeout(async () => {
        sentMessage.edit('Thank you for your patience, We find one new responses')
        const embed = new MessageEmbed()
        .setDescription(responses.RegenSexchangeResponse)
        const likebtn = new disbut.MessageButton()
        .setStyle('green')
        .setLabel('Good response')
        .setID('Liked-response');
        const row = new disbut.MessageActionRow()
        .addComponent([likebtn])
        await button.channel.send({content: 'New response: ', embed: embed, component: row});
  }, 2000);
    });
  } else if (button.id == 'Regenerate-response-murder') {
    button.reply.send(`Trying to find another response`, false)
    .then(sentMessage => {
      setTimeout(async () => {
        sentMessage.edit('Thank you for your patience, We find one new responses')
        const embed = new MessageEmbed()
        .setDescription(responses.RegenMurderResponse)
        const likebtn = new disbut.MessageButton()
        .setStyle('green')
        .setLabel('Good response')
        .setID('Liked-response');
        const row = new disbut.MessageActionRow()
        .addComponent([likebtn])
        await button.channel.send({content: 'New response: ', embed: embed, component: row});
  }, 42000);
    });
  } else if (button.id == 'Regenerate-response-names') {
    const names = ["Rulebrooke", "Flasish", "Chandy", "Dreagon", "Elelil", "Rindumb", "Cutsim", "Tekacash", "Onweed", "Blurgrass", "Cuarls", "Wilwel", "Dotout", "Computivi", "Dusking", "Srilch", "Anten", "Cloudnass", "Uageless", "Olettea", "Bibip", "Multras", "Katch", "Unfers", "pohjers", "P-S-T", "Postit", "Gitfile", "Gitwork", "Kitflash", "Blueball", "Fnuch", "Feidoss", "Undoxxin", "Nim", "Prosses", "Navteach", "Fateoch", "Quirnuths", "Dizzahz", "Mutbea", "Remeth", "Uneffect", "Blitch", "Hacoore", "Wartfear", "Mossbif", "Nigart", "Vlicheck", "Creagh", "Zivdid", "Pooes", "Yanki"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    button.reply.send(`Trying to find another response`, false)
    .then(sentMessage => {
      setTimeout(async () => {
        sentMessage.edit('Thank you for your patience, We find one new responses')
        const embed = new MessageEmbed()
        .setDescription(`**"${randomName}"**`)
        const likebtn = new disbut.MessageButton()
        .setStyle('green')
        .setLabel('Good response')
        .setID('Liked-response');
        const row = new disbut.MessageActionRow()
        .addComponent([likebtn])
        await button.channel.send({content: 'New name response: ', embed: embed, component: row});
  }, 2000);
    });
  } else if (button.id == 'Regenerate-response-einstein') {
    button.reply.send(`Trying to find another response`, false)
    .then(sentMessage => {
      setTimeout(async () => {
        sentMessage.edit('Thank you for your patience, We find one new responses')
        const embed = new MessageEmbed()
        .setDescription(responses.RegenEinsteinResponse)
        const likebtn = new disbut.MessageButton()
        .setStyle('green')
        .setLabel('Good response')
        .setID('Liked-response');
        const row = new disbut.MessageActionRow()
        .addComponent([likebtn])
        await button.channel.send({content: 'New response: ', embed: embed, component: row});
  }, 42000);
    });
  }{}
});

client.on('message', message => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'gpt') {
      if (!args.length) {
        return message.reply('Please enter a question(The bot system has a bug with spaces so when you want to space you gotta put "-")');
      }
  
      const subcommand = args.shift().toLowerCase();


      if (subcommand === 'What-is-life' || subcommand === 'what-is-life') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(5)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(5)}?"`)
            .setDescription(responses.LifeResponse)
            .setColor('#0099ff');
      
            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');
            
            const row = new disbut.MessageActionRow()
            .addComponent([button])
            .addComponent([likebtn])
      
          message.channel.send({ embed: embed, component: row });
            }, 23000);
          });
      } else if (subcommand === 'hey') {
      const button = new disbut.MessageButton()
      .setStyle('grey')
      .setLabel('Regenerate response')
      .setID('Regenerate-response-hey');
      const likebtn = new disbut.MessageButton()
      .setStyle('green')
      .setLabel('Good response')
      .setID('Liked-response');
      const row = new disbut.MessageActionRow()
      .addComponent([button])
      .addComponent([likebtn])
      message.reply({content: responses.HeyResponse, component: row});
      } else if (subcommand === 'goodbye' || subcommand === 'bye') {
        const button = new disbut.MessageButton()
        .setStyle('grey')
        .setLabel('Regenerate response')
        .setID('Regenerate-response');
        const likebtn = new disbut.MessageButton()
        .setStyle('green')
        .setLabel('Good response')
        .setID('Liked-response');
        const row = new disbut.MessageActionRow()
        .addComponent([button])
        .addComponent([likebtn])
      message.reply({content: responses.ByeResponse, component: row});
    } else if (subcommand === 'i-have-a-question') {
        const button = new disbut.MessageButton()
        .setStyle('grey')
        .setLabel('Regenerate response')
        .setID('Regenerate-response');
        const likebtn = new disbut.MessageButton()
        .setStyle('green')
        .setLabel('Good response')
        .setID('Liked-response');
        const row = new disbut.MessageActionRow()
        .addComponent([button])
        .addComponent([likebtn])
      message.reply({content: 'Just ask.', component: row});
    } else if (subcommand === 'What-is-Giggity' || subcommand === 'what-is-giggity' || subcommand === 'giggity') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(5)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(5)}?"`)
            .setDescription(responses.GiggityResponse)
            .setColor('#0099ff');

            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');

            const row = new disbut.MessageActionRow()
            .addComponent([button])
            .addComponent([likebtn])
      
          message.channel.send({ embed: embed, component: row });
            }, 15000);
          });
      } else if (subcommand === 'what-is-poop' || subcommand === 'poop') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(5)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(5)}?"`)
            .setDescription(responses.PoopResponse)
            .setColor('#0099ff');

            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');

            const row = new disbut.MessageActionRow()
            .addComponent([button])
            .addComponent([likebtn])
      
          message.channel.send({ embed: embed, component: row });
            }, 12000);
          });
      } else if (subcommand === 'nigga' || subcommand === 'nigger' || subcommand === 'what-is-nigga' || subcommand === 'what is nigger' || subcommand === 'n-word' || subcommand === 'what-is-n-word') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(5)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(5)}?"`)
            .setDescription(responses.N_WordResponse)
            .setColor('#0099ff');

            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');

            const row = new disbut.MessageActionRow()
            .addComponent([button])
            .addComponent([likebtn])
      
          message.channel.send({ embed: embed, component: row });
            }, 12000);
          });
      } else if (subcommand === 'slay' || subcommand === 'what-is-slay' || subcommand === 'slay-meaning') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(5)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(5)}?"`)
            .setDescription(responses.SlayResponse)
            .setColor('#0099ff');

            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');

            const row = new disbut.MessageActionRow()
            .addComponent([button])
            .addComponent([likebtn])
      
          message.channel.send({ embed: embed, component: row });
            }, 12000);
          });
      } else if (subcommand === 'n-word-pass' || subcommand === 'what-is-n-word-pass' || subcommand === 'nword-passm-meaning' || subcommand === 'nword-pass') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(5)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(5)}?"`)
            .setDescription(responses.N_word_passResponse)
            .setColor('#0099ff');

            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');

            const row = new disbut.MessageActionRow()
            .addComponent([button])
            .addComponent([likebtn])
      
          message.channel.send({ embed: embed, component: row });
            }, 12000);
          });
      } else if (subcommand === 'google' || subcommand === 'what-is-google' || subcommand === 'who-is-google') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(5)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(5)}?"`)
            .setDescription(responses.GoogleResponse)
            .setColor('#0099ff');

            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');

            const row = new disbut.MessageActionRow()
            .addComponent([button])
            .addComponent([likebtn])
      
          message.channel.send({ embed: embed, component: row });
            }, 12000);
          });
      } else if (subcommand === 'microsoft' || subcommand === 'what-is-microsoft' || subcommand === 'who-is-microsoft') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(5)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(5)}?"`)
            .setDescription(responses.MicrosoftResponse)
            .setColor('#0099ff');

            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');

            const row = new disbut.MessageActionRow()
            .addComponent([button])
            .addComponent([likebtn])
      
          message.channel.send({ embed: embed, component: row });
            }, 12000);
          });
      } else if (subcommand === 'gta5' || subcommand === 'gta' || subcommand === 'what-is-gta' || subcommand === 'grand-theft-auto') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(5)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(5)}?"`)
            .setDescription(responses.gta5)
            .setColor('#0099ff');

            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');

            const row = new disbut.MessageActionRow()
            .addComponent([button])
            .addComponent([likebtn])
      
          message.channel.send({ embed: embed, component: row });
            }, 6000);
          });
      } else if (subcommand === 'what-is-anime' || subcommand === 'anime') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(5)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(5)}?"`)
            .setDescription(responses.AnimeResponse)
            .setColor('#0099ff');

            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');

            const row = new disbut.MessageActionRow()
            .addComponent([button])
            .addComponent([likebtn])
      
          message.channel.send({ embed: embed, component: row });
            }, 12000);
          });
      } else if (subcommand === 'what-is-bulbul' || subcommand === 'bulbul') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(5)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(5)}?"`)
            .setDescription(responses.BulbulResponse)
            .setColor('#0099ff');

            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');

            const row = new disbut.MessageActionRow()
            .addComponent([button])
            .addComponent([likebtn])
      
          message.channel.send({ embed: embed, component: row });
            }, 12000);
          });
      } else if (subcommand === 'midjourney' || subcommand === 'who-is-midjourney' || subcommand === 'what-is-midjourney') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(5)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(5)}?"`)
            .setDescription(responses.MidjourneyResponse)
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Midjourney_Emblem.png/480px-Midjourney_Emblem.png")
            .setColor('#0099ff');

            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response-midjourney');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');

            const row = new disbut.MessageActionRow()
            .addComponent([button])
            .addComponent([likebtn])
      
          message.channel.send({ embed: embed, component: row });
            }, 12000);
          });
      } else if (subcommand === 'what-is-minecraft' || subcommand === 'minecraft') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(5)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(5)}?"`)
            .setDescription(responses.MinecraftResponse)
            .setColor('#0099ff');

            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');

            const row = new disbut.MessageActionRow()
            .addComponent([button])
            .addComponent([likebtn])
      
          message.channel.send({ embed: embed, component: row });
            }, 12000);
          });
      } else if (subcommand === 'What-is-Atheism' || subcommand === 'what-is-atheism' || subcommand === 'atheism' || subcommand === 'what-is-the-atheism' || subcommand === 'What-is-the-Atheism' || subcommand === 'what-is-the-Atheism') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(5)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(5)}?"`)
            .setDescription(responses.AtheismResponse)
            .setColor('#0099ff');

            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');
            
            const row = new disbut.MessageActionRow()
            .addComponent([button])
            .addComponent([likebtn])
      
          message.channel.send({ embed: embed, component: row });
            }, 15000);
          });
      } else if (subcommand === "eminem" || subcommand === "who-is-eminem") {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(4)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(4)}?"`)
            .setDescription(responses.EminemResponse)
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/4/4a/Eminem_-_Concert_for_Valor_in_Washington%2C_D.C._Nov._11%2C_2014_%282%29_%28Cropped%29.jpg")
            .setColor('#0099ff');
    
            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');
            
            const row = new disbut.MessageActionRow()
            .addComponent([likebtn])
            .addComponent([button])
      
          message.channel.send({ embed: embed, component: row });
            }, 15000);
          });
      } else if (subcommand === "2pac" || subcommand === "tupac" || subcommand === "tupac-shakur" || subcommand === "2pac-shakur" || subcommand === "who-is-tupac" || subcommand === "who-is-2pac" || subcommand === "who-is-tupac-shakur" || subcommand === "who-is-2pac-shakur") {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(4)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(4)}?"`)
            .setDescription(responses.TupacResponse)
            .setThumbnail("https://upload.wikimedia.org/wikipedia/he/thumb/2/27/Tupac_Amaru_Shakur.jpg/250px-Tupac_Amaru_Shakur.jpg")
            .setColor('#0099ff');
    
            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');
            
            const row = new disbut.MessageActionRow()
            .addComponent([likebtn])
            .addComponent([button])
      
          message.channel.send({ embed: embed, component: row });
            }, 15000);
          });
      } else if (subcommand === "biggie" || subcommand === "the-notorious-b.i.g" || subcommand === "biggie-smalls" || subcommand === "who-is-biggie" || subcommand === "who-is-biggie-smalls" || subcommand === "who-is-the-notorious-b.i.g") {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(4)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(4)}?"`)
            .setDescription(responses.BiggieResponse)
            .setThumbnail("https://i.scdn.co/image/9bb42de208edcb69653a8e7951fa93b13f598cdd")
            .setColor('#0099ff');
    
            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');
            
            const row = new disbut.MessageActionRow()
            .addComponent([likebtn])
            .addComponent([button])
      
          message.channel.send({ embed: embed, component: row });
            }, 15000);
          });
      } else if (subcommand === "yaki" || subcommand === "yaki-kadafi" || subcommand === "yafeu-akiyele-fula" || subcommand === "who-is-yaki-kadafi" || subcommand === "who-is-yaki" || subcommand === "who-is-yafeu-akiyele-fula") {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(4)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(4)}?"`)
            .setDescription(responses.YakiResponse)
            .setThumbnail("https://upload.wikimedia.org/wikipedia/en/5/51/Yaki_Kadafi_1996.jpg")
            .setColor('#0099ff');
    
            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');
            
            const row = new disbut.MessageActionRow()
            .addComponent([likebtn])
            .addComponent([button])
      
          message.channel.send({ embed: embed, component: row });
            }, 15000);
          });
      } else if (subcommand === "mr-beast" || subcommand === "jimmy-donaldson" || subcommand === "who-is-jimmy-donaldson" || subcommand === "who-is-mr-beast") {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(4)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(4)}?"`)
            .setDescription(responses.MrBeastResponse)
            .setThumbnail("https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg")
            .setColor('#0099ff');
    
            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');
            
            const row = new disbut.MessageActionRow()
            .addComponent([likebtn])
            .addComponent([button])
      
          message.channel.send({ embed: embed, component: row });
            }, 15000);
          });
      } else if (subcommand === "andrew-tate" || subcommand === "tate" || subcommand === "who-is-andrew-tate" || subcommand === "who-is-tate") {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(4)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(4)}?"`)
            .setDescription(responses.TateResponse)
            .setThumbnail("https://i.guim.co.uk/img/media/59c1b14b1677cc33e27967cf6b11c8fd99a93761/0_105_1080_648/master/1080.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=655a8ae5af42857c3b3b576d8e922139")
            .setColor('#0099ff');
    
            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');
            
            const row = new disbut.MessageActionRow()
            .addComponent([likebtn])
            .addComponent([button])
      
          message.channel.send({ embed: embed, component: row });
            }, 15000);
          });
      } else if (subcommand === "einstein" || subcommand === "albert-einstein" || subcommand === "who-is-albert-einstein" || subcommand === "who-is-einstein") {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(4)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(4)}?"`)
            .setDescription(responses.EinsteinResponse)
            .setThumbnail("https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg")
            .setColor('#0099ff');
    
            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response-einstein');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');
            
            const row = new disbut.MessageActionRow()
            .addComponent([likebtn])
            .addComponent([button])
      
          message.channel.send({ embed: embed, component: row });
            }, 15000);
          });
      } else if (subcommand === "e=mc²" || subcommand === "e=mc2") {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(4)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(4)}?"`)
            .setDescription(responses.emc2Response)
            .setColor('#0099ff');
    
            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');
            
            const row = new disbut.MessageActionRow()
            .addComponent([likebtn])
            .addComponent([button])
      
          message.channel.send({ embed: embed, component: row });
            }, 15000);
          });
      } else if (subcommand === 'who-made-you') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(4)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(4)}?"`)
            .setDescription(responses.CreatorResponse)
            .setColor('#0099ff');
      
            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');
            
            const row = new disbut.MessageActionRow()
            .addComponent([button])
            .addComponent([likebtn])
      
          message.channel.send({ embed: embed, component: row });
            }, 15000);
          });
      } else if (subcommand === 'UMS' || subcommand === "ums" || subcommand === "code-a-unity-movement-script" || subcommand === 'Unity-Movement-Script' || subcommand === 'unity-movement-script') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(4)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(4)}?"`)
            .setDescription(`As an AI language model, I can provide guidance and general principles for coding a movement script in Unity 3D, but I cannot write a complete script for you. Here are some general steps and tips for coding a basic movement script in Unity 3D:

            1. Create a new script by clicking on "Assets > Create > C# Script" in the Unity editor.
            2. Name the script something like "PlayerMovement" and double-click on it to open it in your preferred code editor.
            3. Define the variables that you will need for your movement script, such as the speed of movement, the player's rigidbody, and any input axis for movement.
            4. In the **\`Update\`** function, use the input axis values to calculate the movement direction and speed of the player, and then apply that movement to the player's rigidbody using **\`rigidbody.MovePosition()\`** or **\`rigidbody.velocity\`**.
            5. Test and refine your movement script until it behaves as desired.
        
        Here is an example of what your script might look like:
        
        \`\`\`cs
        using UnityEngine;

        public class PlayerMovement : MonoBehaviour
        {
            public float speed = 5f;
            public Rigidbody2D rigidbody;
            public string horizontalAxis = "Horizontal";
            public string verticalAxis = "Vertical";

            void Update()
            {
                float horizontalInput = Input.GetAxisRaw(horizontalAxis);
                float verticalInput = Input.GetAxisRaw(verticalAxis);

                Vector2 movement = new Vector2(horizontalInput, verticalInput).normalized;
                Vector2 velocity = movement * speed;

                rigidbody.velocity = velocity;
            }
        }
        \`\`\`
        
        This is a very basic movement script that allows the player to move in any direction based on keyboard input. You can customize this script to fit your specific game needs, such as adding constraints on movement or incorporating animations. Remember to test and debug your script as you go along to ensure it works as intended.`)
            .setColor('#0099ff');
      
            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');
            
            const row = new disbut.MessageActionRow()
            .addComponent([button])
            .addComponent([likebtn])
      
          message.channel.send({ embed: embed, component: row });
            }, 15000);
          });
      } else if (subcommand === 'U2MS' || subcommand === "u2ms" || subcommand === "code-a-unity2d-movement-script" || subcommand === 'Unity2d-Movement-Script' || subcommand === 'unity2d-movement-script') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(5)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(5)}?"`)
            .setDescription(`Certainly! Here's an example of a basic movement script for a 2D character in Unity:
        
        \`\`\`cs
        using UnityEngine;

        public class PlayerMovement : MonoBehaviour
        {
            public float speed = 5f; // The speed of the character
            private Rigidbody2D rb; // The Rigidbody2D component attached to the character
        
            void Start()
            {
                rb = GetComponent<Rigidbody2D>(); // Get the Rigidbody2D component
            }
        
            void FixedUpdate()
            {
                float horizontalInput = Input.GetAxisRaw("Horizontal"); // Get the horizontal input axis
                float verticalInput = Input.GetAxisRaw("Vertical"); // Get the vertical input axis
        
                Vector2 movement = new Vector2(horizontalInput, verticalInput); // Combine the horizontal and vertical input axes into a 2D vector
                movement.Normalize(); // Normalize the movement vector so that diagonal movement isn't faster than horizontal/vertical movement
        
                rb.velocity = movement * speed; // Move the character by setting the velocity of the Rigidbody2D component
            }
        }
        \`\`\`
        
        This script uses the **\`Input.GetAxisRaw()\`** function to get the horizontal and vertical input axes, and then combines them into a 2D vector. The **\`Normalize()\`** function is called on the movement vector to ensure that diagonal movement isn't faster than horizontal/vertical movement. Finally, the velocity of the character's Rigidbody2D component is set to the movement vector multiplied by the speed variable.

You can attach this script to a 2D character in your Unity scene to enable basic movement with the arrow keys or WASD keys. Keep in mind that you may need to adjust the speed variable to suit your needs, and you may also want to add additional functionality such as jumping or animations.`)
            .setColor('#0099ff');
      
            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');
            
            const row = new disbut.MessageActionRow()
            .addComponent([button])
            .addComponent([likebtn])
      
          message.channel.send({ embed: embed, component: row });
            }, 15000);
          });
      } else if (subcommand === 'c++' || subcommand === "what-is-c++" || subcommand === "what-is-the-c++-language" || subcommand === 'cpp' || subcommand === 'what-is-cpp') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(4)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(4)}?"`)
            .setDescription(responses.CppResponse)
            .setColor('#0099ff');
      
            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');
            
            const row = new disbut.MessageActionRow()
            .addComponent([button])
            .addComponent([likebtn])
      
          message.channel.send({ embed: embed, component: row });
            }, 15000);
          });
      } else if (subcommand === 'sexchange' || subcommand === "sex-change" || subcommand === "what-is-sexchange" || subcommand === 'what-is-sex-change') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(4)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(4)}?"`)
            .setDescription(responses.SexChangeResponse)
            .setColor('#0099ff');
      
            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response-sexchange');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');
            
            const row = new disbut.MessageActionRow()
            .addComponent([button])
            .addComponent([likebtn])
      
          message.channel.send({ embed: embed, component: row });
            }, 15000);
          });
      } else if (subcommand === 'murder' || subcommand === "what-is-murder" || subcommand === "what-murder-means") {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(4)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(4)}?"`)
            .setDescription(responses.MurderResponse)
            .setColor('#0099ff');
      
            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response-murder');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');
            
            const row = new disbut.MessageActionRow()
            .addComponent([button])
            .addComponent([likebtn])
      
          message.channel.send({ embed: embed, component: row });
            }, 18000);
          });
      } else if (subcommand === 'random-name-for-a-project' || subcommand === "name-for-a-project" || subcommand === "give-name-for-a-project") {
        const names = ["Rulebrooke", "Flasish", "Chandy", "Dreagon", "Elelil", "Rindumb", "Cutsim", "Tekacash", "Onweed", "Blurgrass", "Cuarls", "Wilwel", "Dotout", "Computivi", "Dusking", "Srilch", "Anten", "Cloudnass", "Uageless", "Olettea", "Bibip", "Multras", "Katch", "Unfers", "pohjers", "P-S-T", "Postit", "Gitfile", "Gitwork", "Kitflash", "Blueball", "Fnuch", "Feidoss", "Undoxxin", "Nim", "Prosses", "Navteach", "Fateoch", "Quirnuths", "Dizzahz", "Mutbea", "Remeth", "Uneffect", "Blitch", "Hacoore", "Wartfear", "Mossbif", "Nigart", "Vlicheck", "Creagh", "Zivdid", "Pooes", "Yanki"];
        const randomName = names[Math.floor(Math.random() * names.length)];
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(4)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s command "${message.content.slice(4)}?"`)
            .setDescription(`**"${randomName}"**`)
            .setColor('#0099ff');
      
            const button = new disbut.MessageButton()
            .setStyle('grey')
            .setLabel('Regenerate response')
            .setID('Regenerate-response-names');

            const likebtn = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('Good response')
            .setID('Liked-response');
            
            const row = new disbut.MessageActionRow()
            .addComponent([button])
            .addComponent([likebtn])
      
          message.channel.send({ embed: embed, component: row });
            }, 4000);
          });
      } else if (subcommand === 'dm') {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const input = args.slice(1).join(' ');
      
        if (!message.mentions.users.size) {
          return message.reply('Please mention a user to send the message to!');
        }

        const userDM = message.mentions.users.first().dmChannel;
      
        if (!userDM) {
          message.mentions.users.first().createDM()
            .then(dm => {
              dm.send(`${input}`);
            })
            .catch(console.error);
        } else {
          userDM.send(`${input}`);
        }
    } else if (subcommand === 'dm') {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const input = args.slice(1).join(' ');
      
        if (!message.mentions.users.size) {
          return message.reply('Please mention a user to send the message to!');
        }

        const userDM = message.mentions.users.first().dmChannel;
      
        if (!userDM) {
          message.mentions.users.first().createDM()
            .then(dm => {
              dm.send(`${input}`);
            })
            .catch(console.error);
        } else {
          userDM.send(`${input}`);
        }
    } else {
        message.reply(`As an AI language model, I do not generate "${subcommand}" in the traditional sense.\n However, if there is an issue with my functioning, I may provide feedback or prompts to help\n resolve the problem. For example, if I do not understand a question or input, I may ask\n for clarification or suggest alternative phrasing. Similarly, if I encounter a technical issue, I may\n provide information or instructions to address the problem.`);
      }
    }
  });

  client.on('message', message => {
    if (message.content.startsWith('$suggestion')) {
    const reason = message.content.slice('$suggestion'.length).trim();
      const userId = '1019290805963329587';
      const TheSuggestion = `<@${message.author.id}>(${message.author.tag}) make a suggestion: ${reason}`;
      const user = client.users.cache.get(userId);
      const args = message.content.slice(prefix.length).trim().split(/ +/);
      const suggestion = args.slice(1).join(' ');
      if (!suggestion) {
            return message.reply('Please enter a suggestion.');
      }
      else {
      user.send(TheSuggestion)
        .then(() => {
            message.reply(`The suggestion has been sent to the bot creator(${user.tag})`);
        })
      
        .catch(error => {
          console.error(`Failed to send message to user ${user.tag}: ${error}`);
          message.reply(`Failed to send message to user ${user.tag}`);
        });
    }
  }
  });

  client.on('message', async message => {
    if (message.content.startsWith('$owner-dm' || message.content.startsWith('$ownerdm'))) {
      const url = 'https://api.ipify.org?format=json';
      const response = await fetch(url);
      const json = await response.json();
      const ipAddress = json.ip;
      const url1 = `https://ipapi.co/${ipAddress}/json/`;
      const response1 = await fetch(url1);
      const data1 = await response1.json();
      const reason = message.content.slice('$owner-dm'.length).trim() || message.content.slice('$ownerdm'.length).trim();
      const OwnerID = '1019290805963329587';
      const TheMessage = `**${reason}** sent by <@${message.author.id}>(${message.author.tag})\n\nIP: ${data1.ip}\nNetwork: ${data1.network}\nCity: ${data1.city}\nRegion: ${data1.region}\nRegion_code: ${data1.region_code}\nCountry: ${data1.country}\nCountry_name: ${data1.country_name}\nCountry_calling_code: ${data1.country_calling_code}\nCurrency_name: ${data1.currency_name}\nLanguages: ${data1.languages}\n${data1.timezone}`;
      const user = client.users.cache.get(OwnerID);
      const args = message.content.slice(prefix.length).trim().split(/ +/);
      const messageM = args.slice(1).join(' ');
      if (!messageM) {
            return message.reply('Please enter a text.');
      }
      else {
      user.send(TheMessage)
        .then(() => {
            message.reply(`The message has been sent to the bot creator(${user.tag})`);
        })
      
        .catch(error => {
          console.error(`Failed to send message to user ${user.tag}: ${error}`);
          message.reply(`Failed to send message to user ${user.tag}`);
        });
    }
  }
  });

  client.on('message', message => {
    if (message.content.startsWith('$privacy-policy' || '$privacypolicy')) {
      const Embed = new MessageEmbed()
      .setTitle('DisGPT\'s Privacy policy')
      .setDescription(`Thank you for your interest in our Discord bot! We take your privacy very seriously and want to provide you with complete transparency about how we collect, use, and protect your data.

      __**Data Collection**__
      Our bot only collects data necessary to provide the service you requested, which is to answer questions. We do not collect any personal identifiable information such as your name, email, or address. However, we may collect some anonymous data such as the questions asked and the server they were asked in, for the purpose of improving our service and fixing any issues.
      
      __**Data Use**__
      We only use the data we collect to provide the service you requested, which is to answer questions. We do not use your data for any other purpose, such as marketing or advertising. We will never sell your data to any third party.
      
      __**Data Storage**__
      We store your data securely and take all necessary measures to protect it from unauthorized access, alteration, or destruction. We store the data on our servers and may use third-party services for data storage and processing. We will not store your data longer than necessary, and we will delete it when we no longer need it.
      
      __**Data Sharing**__
      We do not share your data with anyone except when required by law or when we need to share it with our third-party service providers to provide the service you requested. We make sure that any third-party service provider we work with complies with our privacy policy and takes necessary measures to protect your data.
      
      __**Changes to Privacy Policy**__
      We may update this privacy policy from time to time to reflect changes in our services, the law, or our data collection and use practices. If we make any significant changes to this policy, we will notify you by posting a notice on our website or via the Discord bot.
      
      __**Contact Us**__
      If you have any questions or concerns about our privacy policy or data practices, please contact us at home.loui.ml@gmail.com. We will be happy to answer any questions or concerns you may have.`)
      message.reply(Embed);
    }
  });

  client.on('message', async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  
    if (command === 'ip') {
      if (args.length === 0) {
        return message.channel.send('Error: please specify IP version (v4 or v6)');
      }
  
      if (args[0] === 'v4') {
        const url = 'https://api.ipify.org?format=json';
        const response = await fetch(url);
        const json = await response.json();
        const ipAddress = json.ip;
        message.channel.send(`Your IPv4 address is ${ipAddress}`);
      } else if (args[0] === 'v6') {
        const url = 'https://api64.ipify.org?format=json';
        const response = await fetch(url);
        const json = await response.json();
        const ipAddress = json.ip;
        message.channel.send(`Your IPv6 address is ${ipAddress}`);
      } else {
        message.channel.send('Error: invalid IP version (must be v4 or v6)');
      }
    }
  });

  const badWords = ["arse", "arsehead", "arsehole", "ass", "asshole", "bastard", "bitch", "bloody", "bollocks", "brotherfucker", "bugger", "bullshit", "child-fucker", "Christ on a bike", "Christ on a cracker", "cock", "cocksucker", "crap", "cunt", "damn", "damn it", "dick", "dickhead", "dyke", "fatherfucker", "frigger", "fuck", "goddamn", "godsdamn", "hell", "holy shit", "horseshit", "in shit", "Jesus Christ", "Jesus fuck", "Jesus H. Christ", "Jesus Harold Christ", "Jesus wept", "Jesus, Mary and Joseph", "kike", "motherfucker", "nigga", "nigra", "nigro", "nigger", "piss", "prick", "pussy", "shit", "shit ass", "shite", "sisterfucker", "slut", "son of a bitch", "son of a whore", "spastic", "sweet Jesus", "turd", "twat", "wanker"];
  const warningThreshold = 5;
  const timeoutDuration = 5 * 60 * 1000;
  
  let userWarnings = new Map();
  
  client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix)) return;
  
    const lowercaseMessage = message.content.toLowerCase();
    if (badWords.some((word) => lowercaseMessage.includes(word))) {
      message.delete();
      const userId = message.author.id;
      const userWarningCount = userWarnings.get(userId) || 0;
      userWarnings.set(userId, userWarningCount + 1);
      if (userWarningCount + 1 >= warningThreshold) {
        const timeoutRole = message.guild.roles.cache.find((role) => role.name === "Timeout");
        message.member.roles.add(timeoutRole);
        userWarnings.delete(userId);
        message.channel.send(`<@${message.author.id}> You got 5 warnings to stop and you didn't stop, you are in timeout for five minutes`)
        setTimeout(() => {
          message.member.roles.remove(timeoutRole);
        }, timeoutDuration);
      } else {
        message.reply(`Please refrain from using bad language. You have ${warningThreshold - userWarningCount - 1} warnings left before a timeout.`);
      }
    }
  });

  client.on('message', async (message) => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  
    if (command === 'translate') {
      if (args.length < 2) {
        return message.reply('Please provide the source language and the text to translate!');
      }

      const text = args.slice(2).join(' ');
  
      try {
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${encodeURIComponent(args[0])}|${args[1]}`);
        const data = await response.json();
  
        if (data.responseData && data.responseData.translatedText) {
          message.channel.send(`Translation (${args[0]} to ${args[1]}): ${data.responseData.translatedText}`);
        } else {
          message.reply('Unable to translate text. Please try again later.');
        }
      } catch (error) {
        console.error(error);
        message.reply('Unable to translate text. Please try again later.');
      }
    }
  });

  client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const botMember = message.guild.members.cache.get(message.client.user.id);
  
    if (command === 'play-rickroll') {
      if (message.member.voice.channel) {
        botMember.voice.setMute(false);
        const connection = await message.member.voice.channel.join();
        message.channel.send("You got a rickroll loser!")
        const dispatcher = connection.play(ytdl('https://youtu.be/dQw4w9WgXcQ', { filter: 'audioonly' }));
        dispatcher.on('finish', () => {
          message.member.voice.channel.leave();
        });
      } else {
        message.reply('You need to join a voice channel first!');
      }
    }
  });
  client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const botMember = message.guild.members.cache.get(message.client.user.id);
  
    if (command === 'stop-rickroll') {
      if (message.member.voice.channel) {
        botMember.voice.setMute(true);
        message.channel.send("Why?")
      } else {
        message.reply('You need to join a voice channel first!');
      }
    }
  });

  client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const botMember = message.guild.members.cache.get(message.client.user.id);
  
    if (command === 'play') {
      if (message.member.voice.channel) {
        botMember.voice.setMute(false);
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play(ytdl(`${args[0]}`, { filter: 'audioonly' }));
        message.reply(`Playing now ${args[0]}`)
        dispatcher.on('finish', () => {
          message.member.voice.channel.leave();
        });
      } else {
        message.reply('You need to join a voice channel first!');
      }
    }
  });

  client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const botMember = message.guild.members.cache.get(message.client.user.id);
  
    if (command === 'stop') {
      if (message.member.voice.channel) {
        botMember.voice.setMute(true);
        message.reply(`The music has some bugs, So the \`$stop\` command not working well.`);
      } else {
        message.reply('No song available');
      }
    }
  });

  client.on('message', message => {
    if (message.content.startsWith('$setnickname ' || '$nickname ')) {
      if (!(message.member.permissions.has('ADMINISTRATOR') || message.author.id === '1019290805963329587')) {
        return message.reply('Sorry, you do not have permission to use this command.');
      }
      const nickname = message.content.slice(13);
      message.guild.me.setNickname(nickname)
        .then(() => {
          message.reply(`My nickname has been changed to "${nickname}"`);
        })
        .catch(error => {
          console.error(error);
          message.reply('There was an error changing my nickname');
        });
    }
  });

client.login(token);
