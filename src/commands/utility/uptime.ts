import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { commandType } from '../../types/command';

export const uptimeCommand: commandType = {
  data: new SlashCommandBuilder()
    .setName('uptime')
    .setDescription('Shows how long Milo has been online.'),

  async execute(interaction: ChatInputCommandInteraction) {
    const uptime = interaction.client.uptime;

    const seconds = Math.floor(uptime / 1000);
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const parts = [];

    if (days > 0) parts.push(`${days}d`);
    if (hours > 0) parts.push(`${hours}h`);
    if (minutes > 0) parts.push(`${minutes}m`);
    if (remainingSeconds > 0 || parts.length === 0) {
      parts.push(`${remainingSeconds}s`);
    }

    await interaction.reply(`⏱️ **Uptime:** ${parts.join(' ')}`);
  },
};
