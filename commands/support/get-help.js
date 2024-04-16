const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('get-help')
        .setDescription('Alert a Member of the Support Team.'),
    async execute(interaction) {
        await interaction.reply({
            content: `<@&1228395302709629120> \n ${interaction.user} needs help. Please do your best and assist them.`
        })
    }
}