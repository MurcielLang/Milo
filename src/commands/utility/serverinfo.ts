import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { commandType } from '../../types/command';

export const serverInfoCommand: commandType = {
  data: new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('Shows information about this server'),

  async execute(interaction: ChatInputCommandInteraction) {
    const guild = interaction.guild;

    if (!guild) {
      await interaction.reply('This command can only be used on a server');
      return;
    }

    const owner = await guild.fetchOwner();

    const serverinfo = [
      `**${guild.name}**`,
      '',
      `🆔 ID: \`${guild.id}\``,
      `👑 Owner: ${owner.user.tag}`,
      `👥 Members: ${guild.memberCount}`,
      `📅 Created: <t:${Math.floor(guild.createdTimestamp / 1000)}:D>`,
    ].join('\n');

    await interaction.reply(serverinfo);
  },
};
