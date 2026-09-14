import { ChatInputCommandInteraction, SlashCommandBuilder, version } from 'discord.js';
import { commandType } from '../../types/command';

export const botInfoCommand: commandType = {
  data: new SlashCommandBuilder().setName('botinfo').setDescription('Shows information about Milo'),

  async execute(interaction: ChatInputCommandInteraction) {
    const client = interaction.client;
    const user = client.user;

    const botInfo = [
      `**${user?.username ?? 'Milo'}**🐈`,
      '',
      '🤖Chill discord bot',
      '',
      '🛠️ **Built with:** TypeScript, Node.js, discord.js',
      '👤 **Created by:** Kurta',
      `🆔 **Bot ID:** \`${user?.id ?? 'Unknown'}\``,
      `📚 **discord.js:** v${version}`,
      '🟢 **Status:** Online',
    ].join('\n');

    await interaction.reply(botInfo);
  },
};
