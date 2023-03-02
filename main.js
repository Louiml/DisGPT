const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { prefix, token } = require('./config.json');
const responses = require('./responses.json');
const disbut = require('discord-buttons');
disbut(client);
const cooldowns = new Map();

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity('Answering some questions');
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
        .setDescription(responses.SexchangeResponse)
        const likebtn = new disbut.MessageButton()
        .setStyle('green')
        .setLabel('Good response')
        .setID('Liked-response');
        const row = new disbut.MessageActionRow()
        .addComponent([likebtn])
        await button.channel.send({content: 'New response: ', embed: embed, component: row});
  }, 32000);
    });
  }{}
});

client.on('message', message => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    const userId = message.author.id;
    const now = Date.now();
    
    if (cooldowns.has(userId)) {
      const cooldownEnd = cooldowns.get(userId);
      const timeLeft = (cooldownEnd - now) / 1000;
      if (timeLeft > 0) {
        message.reply(`You are on cooldown. Please wait ${timeLeft.toFixed(1)} seconds.`);
      }
    }
    
    const cooldownEnd = now + 1 * 60 * 1000;
    cooldowns.set(userId, cooldownEnd);
    
    setTimeout(() => cooldowns.delete(userId), 1 * 60 * 1000);

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
      } else if (subcommand === 'midjourney' || subcommand === 'who-is-midjourney' || subcommand === 'what-is-midjourney') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(5)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(5)}?"`)
            .setDescription(responses.MidjourneyResponse)
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
            .setDescription(`Atheism is a philosophical or ideological stance that is characterized by the lack of belief in the existence of any deities or gods. An atheist is a person who does not hold a belief in the existence of a higher power or supernatural entity. This lack of belief in gods may be based on various reasons such as a lack of evidence, logical contradictions in religious beliefs, or the perception that the concept of a deity is incompatible with scientific or empirical evidence.

            Atheism is not a unified or monolithic movement and can take various forms. For instance, some atheists may be motivated by rational, empirical, or scientific considerations, while others may reject religion based on moral, ethical, or cultural grounds. Additionally, some atheists may actively promote their views and engage in debates or discussions about religion, while others may simply hold their beliefs privately.
            
            It is important to note that atheism is not synonymous with immorality or lack of ethical values. Many atheists embrace secular morality, humanism, and ethics that prioritize reason, compassion, and social justice. Atheism is also not necessarily opposed to spirituality or awe-inspiring experiences that do not rely on supernatural or religious beliefs.`)
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
            .setDescription(`Eminem, also known as Marshall Bruce Mathers III, is an American rapper, songwriter, record producer, and actor. He was born on October 17, 1972, in St. Joseph, Missouri, and raised in Detroit, Michigan.

            Eminem is one of the most successful and influential rappers of all time, with over 150 million records sold worldwide. He first gained mainstream attention with his second studio album, "The Slim Shady LP," which was released in 1999 and went on to win a Grammy Award for Best Rap Album.
            
            Eminem is known for his lyrical ability and his use of controversial and provocative subject matter in his music. He has often been criticized for his use of offensive language and for his portrayal of violence and drug use in his songs.
            
            Despite this controversy, Eminem has remained popular and influential throughout his career, with many of his albums and singles reaching the top of the charts. He has also acted in several movies, including "8 Mile," which is loosely based on his life and career.
            
            Eminem has won numerous awards throughout his career, including 15 Grammy Awards and an Academy Award for Best Original Song for "Lose Yourself," which was featured in the movie "8 Mile." He is widely regarded as one of the greatest rappers of all time, and his impact on the genre has been significant.`)
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
      } else if (subcommand === 'Who-made-you' || subcommand === 'WHO-MADE-YOU' || subcommand === 'who-made-you') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(4)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(4)}?"`)
            .setDescription(`The one who are made me is Louiml, Louiml is a company that helps people and made some game applications and AIs, If you have any suggestions you talk with us in [Twitter](https://twitter.com/@louiml), also you can talk with us using a command in our bot, type "$owner-dm <message>" and we will get your message in our DM or you can just send to us a mail with our email (home.louiml@gmail.com), However, if you like our bot you can send a feedback at our site (https://feedback.louiml.net), And our project it's open-source so you can send a pull request (https://github.com/funmmer/DisGPT).`)
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
            .setDescription(`C++ is a high-level, general-purpose programming language that was developed in the early 1980s as an extension of the C programming language. C++ is an object-oriented language, which means that it allows developers to define their own data types, called classes, and provides support for encapsulation, inheritance, and polymorphism.

            C++ is a compiled language, which means that programs written in C++ are converted into machine code that can be executed directly by a computer's CPU. C++ is also a cross-platform language, which means that programs written in C++ can be compiled and executed on different platforms, including Windows, Mac, and Linux.
            
            C++ is used in a wide range of applications, including system software, such as operating systems and device drivers, as well as application software, such as video games and web browsers. It is also commonly used in high-performance computing and scientific applications, where the ability to write efficient and optimized code is important.
            
            C++ is known for its power, flexibility, and efficiency, and is a popular choice for programmers who need low-level control over their code, but also want the benefits of high-level programming constructs, such as object-oriented programming. C++ has a large and active community of developers, and there are many libraries, frameworks, and tools available to help with C++ development.`)
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

client.login(token);

