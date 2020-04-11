
const discord = require("discord.js");
module.exports = {
    run: async(client, message, args) => {
        if (message.deleteTable) {
            message.delete(); 
        }
    
        // Member doesn't have permission
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send("You can't delete messages...") // .then(m => m.delete(5000));
        }
    
        // Check if args[0] is a number
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.channel.send("Yeah... That's not a number? I also can't delete 0 messages by the way.") 
    
        }
    
        // Maybe the bot can't delete messages
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send("Sorry... I can't delete messages.") // .then(m => m.delete(5000));
        }
    
        let deleteAmount;
    
        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }
    
        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` messages.`))
            .catch(err => message.channel.send(`Something went wrong... ${err}`));
    },   
    aliases: ['clearscript'],
    description: 'Clears messages'
}
