const Discord = require("discord.js");

module.exports = {
  name: "liberar",
  //o bot fala sua msg!

  run: async(client, message, args) => {

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(`:x: | ${message.author} Você não possui a permissão **GERENCIAR MENSAGENS** para enviar a mensagem de liberar id!`);


   let embed = new Discord.MessageEmbed()
.setAuthor({name: `${message.guild.name}  | Auto Liberação`, iconURL: "https://media.discordapp.net/attachments/829328558676639744/963072584444948500/9659-angrywut.png"})   
   .setDescription("・Para realizar sua liberação envie: **ID | Nome Sobrenome**\n・A Liberação é automática, caso ocorra algum problema abra um **TICKET**\n・  Para obter seu ID você deve conectar no servidor usando a sala de conexões!")
   .setColor("#00FF64")

message.delete()
message.channel.send({embeds: [embed]})

  }
}