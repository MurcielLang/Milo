import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { commandType } from '../../types/command';

export const pingCommand: commandType = {
  data: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),

  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.reply('Pong!');
  },
};
