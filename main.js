const { Client, Intents, MessageEmbed } = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity('Answering some questions');
});

client.on('interaction', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});
client.on('message', message => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'gpt') {
      if (!args.length) {
        return message.reply('Please enter a question(The bot system has a bug with spaces so when you want to space you need to put "-")');
      }
  
      const subcommand = args.shift().toLowerCase();
  
      if (subcommand === 'What-is-life' || subcommand === 'what-is-life') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(5)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(5)}?"`)
            .setDescription(`The concept of "life" can be approached from different perspectives, and there is no single, definitive answer that captures all its complexities. However, in general, life can be described as a characteristic property that distinguishes organisms from non-living things, and encompasses various processes such as metabolism, growth, reproduction, adaptation, and response to stimuli.
    
            From a biological standpoint, life is typically defined as the state of being able to maintain homeostasis, use energy to perform vital functions, respond to stimuli, adapt to changing environments, and reproduce. Life is also characterized by the presence of complex organic molecules, such as proteins, nucleic acids, and lipids, which interact in intricate ways to create and sustain living structures and processes.
            
            However, the meaning and significance of life may also depend on cultural, philosophical, and personal beliefs, as well as individual experiences and goals. For some, life may be seen as a journey of self-discovery and personal growth, while for others it may be a quest for meaning and purpose, or a chance to create and contribute to society. Ultimately, the nature and meaning of life are subjective and multifaceted, and may continue to elude our full understanding and appreciation.`)
            .setColor('#0099ff');
      
          message.channel.send({ embed: embed});
            }, 23000);
          });
      } else if (subcommand === 'Hey') {
        message.reply('Hey!, How are you?');
      } else if (subcommand === 'Goodbye') {
        message.reply('Bye!, Have nice day');
      } else if (subcommand === 'i-have-a-question') {
        message.reply('Just ask.');
      } else if (subcommand === 'What-is-Giggity' || subcommand === 'what-is-giggity' || subcommand === 'giggity') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(5)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(5)}?"`)
            .setDescription(`"Giggity" is a slang term that originated from the TV show "Family Guy" and is commonly\n associated with the character Glenn Quagmire. It is often used as an expression of\n excitement, enthusiasm, or sexual innuendo, typically in a humorous or exaggerated manner.\n The exact meaning of "giggity" can vary depending on the context and intent of the speaker,\n but it is generally understood as a playful and sometimes risqué exclamation.`)
            .setColor('#0099ff');
      
          message.channel.send({ embed: embed});
            }, 15000);
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
      
          message.channel.send({ embed: embed});
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
      
          message.channel.send({ embed: embed});
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
      
          message.channel.send({ embed: embed});
            }, 15000);
          });
      } else if (subcommand === 'U2MS' || subcommand === "u2ms" || subcommand === "code-a-unity2d-movement-script" || subcommand === 'Unity2d-Movement-Script' || subcommand === 'unity2d-movement-script') {
        message.channel.send(`<@${message.author.id}> Ask: ${message.content.slice(4)}, The answer will be sending.`)
        .then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('The answer is ready, Thank you for your patience.');
                const embed = new MessageEmbed()
            .setTitle(`Answer of ${message.author.username}'s question "${message.content.slice(4)}?"`)
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
      
          message.channel.send({ embed: embed});
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
      
          message.channel.send({ embed: embed});
            }, 15000);
          });
      } else {
        message.reply(`As an AI language model, I do not generate "${subcommand}" in the traditional sense.\n However, if there is an issue with my functioning, I may provide feedback or prompts to help\n resolve the problem. For example, if I do not understand a question or input, I may ask\n for clarification or suggest alternative phrasing. Similarly, if I encounter a technical issue, I may\n provide information or instructions to address the problem.`);
      }
    }
  });

client.login(token);
