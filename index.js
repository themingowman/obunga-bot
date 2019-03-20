const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTU3NTkwMDQwODA1NjM4MTQ0.D3LtQw.SLdiWJeFuog1FnipTjdNBam8liQ';

bot.on('ready', () =>{
    console.log('This bot is online, fuckass!');
})

bot.on('message', msg=>{
    if(msg.content.includes ("Obunga")){
        msg.reply('I am watching you!');
    }
})

bot.on('message', msg=>{
    if(msg.content.includes ('trump')){
        msg.reply('m̷̛̫̐́͋̔͐̆̐y̷̢̤̟̖͖̝͓̙̜̯͂̆̉̇̎̏̾͒̓̌͂͘ ̷̨̧̞͓̤͈̟̱̮͙̥̬̈́͑́͝g̴̨̧̡͎̬̬̥͙̩̈́͘r̵͎̭͓̯̬̄͑̄͌̉̉̑͆͝ę̸͇͓͖̜̫̠͍̰̗͙̤̬̓̀̐̓͒̀́̈̑̄͊̃̀͠ą̴̞̜̫͑̈́̓͠t̵̘̣̫͉̮̰̦̤̯̯͉̰̜̙̑͑̋̕͠ẻ̸̡̮͍̞̙̘̪̙͇̭͌̿ͅs̵̛̜͉͓̆̈̃͊͆̍͐͛̀̓̓̌͝t̶̢̧̨̺̝̠͙͎̻͔̬̫̩̰̗͂͝͝ ̸͓̘̙̥̖̩̮̭̪̤̱̐̊͗͌̑͌̀̏́̂͊̚̚͜ē̸̱̼̙͚̗̠̗̜͐̃̂̑̄̄́̚͝͝ñ̵̡͔̤̩͎̟͉͚͎̺̉͜ͅę̵̰̣̺̝̰̮̻̠̣̈̐͒̍̅̾͐̑̋́͋̈́m̶̛̮̞͔̦̏͑̀̈́̍͂̐̒̈́͘y̵̡̩̦͔͓͕̅̿̊͗̕ͅ');
    }
})

bot.on('message', msg=>{
    if(msg.content.includes ("Trump")){
        msg.reply('m̷̛̫̐́͋̔͐̆̐y̷̢̤̟̖͖̝͓̙̜̯͂̆̉̇̎̏̾͒̓̌͂͘ ̷̨̧̞͓̤͈̟̱̮͙̥̬̈́͑́͝g̴̨̧̡͎̬̬̥͙̩̈́͘r̵͎̭͓̯̬̄͑̄͌̉̉̑͆͝ę̸͇͓͖̜̫̠͍̰̗͙̤̬̓̀̐̓͒̀́̈̑̄͊̃̀͠ą̴̞̜̫͑̈́̓͠t̵̘̣̫͉̮̰̦̤̯̯͉̰̜̙̑͑̋̕͠ẻ̸̡̮͍̞̙̘̪̙͇̭͌̿ͅs̵̛̜͉͓̆̈̃͊͆̍͐͛̀̓̓̌͝t̶̢̧̨̺̝̠͙͎̻͔̬̫̩̰̗͂͝͝ ̸͓̘̙̥̖̩̮̭̪̤̱̐̊͗͌̑͌̀̏́̂͊̚̚͜ē̸̱̼̙͚̗̠̗̜͐̃̂̑̄̄́̚͝͝ñ̵̡͔̤̩͎̟͉͚͎̺̉͜ͅę̵̰̣̺̝̰̮̻̠̣̈̐͒̍̅̾͐̑̋́͋̈́m̶̛̮̞͔̦̏͑̀̈́̍͂̐̒̈́͘y̵̡̩̦͔͓͕̅̿̊͗̕ͅ');
    }
})

bot.on('message', msg=>{
    if(msg.content === "%bruh moment"){
        msg.reply('https://i.imgur.com/b6Y2zyc.png');
    }
})

bot.on('message', msg=>{
    if(msg.content.includes ("obunga")){
        msg.reply('I am watching you!');
    }
})

bot.on('message', msg=>{
    if(msg.content === ("%bruh")){
        msg.reply('https://i.imgur.com/ya3Eu6q.png');
    }
})

bot.on('message', msg=>{
    if(msg.content.includes ("%y tho")){
        msg.reply('https://i.imgur.com/wwlm6hn.png');
    }
})

bot.on('message', msg=>{
    if(msg.content.includes ("%smile")){
        msg.reply('https://i.imgur.com/s39Ol8s.png');
    }
})

bot.on('message', msg=>{
    if(msg.content.includes ("%ok")){
        msg.reply('https://i.imgur.com/md4eYeS.png');
    }
})

bot.on('message', msg=>{
    if(msg.content === ("%help")){
        msg.reply('To get a list of reaction image commands, type "% images"');
    }
})

bot.on('message', msg=>{
    if(msg.content === ("%images")){
        msg.reply('bruh, bruh moment, y tho, ok');
    }
})

client.login(process.env.NTU3NTkwMDQwODA1NjM4MTQ0.D3LtQw.SLdiWJeFuog1FnipTjdNBam8liQ);
