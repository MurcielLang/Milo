import {ChatInputCommandInteraction, SlashCommandBuilder} from "discord.js";

export const pingCommand = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!');

    export async function pingCommandHandler(interaction: ChatInputCommandInteraction) {
        await interaction.reply('Pong!');
    }