import { ChatInputCommandInteraction, PermissionFlagsBits, SlashCommandBuilder } from 'discord.js';
import { commandType } from '../../types/command';

export const unbanCommand: commandType = {
  data: new SlashCommandBuilder()
    .setName('unban')
    .setDescription('Unbans a user from the server.')
    .addStringOption((option) =>
      option.setName('user_id').setDescription('The ID of the user to unban.').setRequired(true),
    ) as SlashCommandBuilder,

  async execute(interaction: ChatInputCommandInteraction) {
    if (!interaction.guild) {
      await interaction.reply('This command can only be used in a server.');
      return;
    }

    if (!interaction.memberPermissions?.has(PermissionFlagsBits.BanMembers)) {
      await interaction.reply("❌ You don't have permission to unban members.");
      return;
    }

    const userId = interaction.options.getString('user_id', true);

    try {
      const user = await interaction.client.users.fetch(userId);

      await interaction.guild.members.unban(userId);

      await interaction.reply(`🔓 **${user.tag}** has been unbanned.`);
    } catch {
      await interaction.reply('❌ That user is not banned or the ID is invalid.');
    }
  },
};
