import { ChatInputCommandInteraction, PermissionFlagsBits, SlashCommandBuilder } from 'discord.js';
import { commandType } from '../../types/command';

export const banCommand: commandType = {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Ban a user from the server')
    .addUserOption(
      (option) => option.setName('user').setDescription('The member to ban').setRequired(true), // Sedikit perbaikan teks deskripsi dari 'kick' menjadi 'ban'
    )
    .addStringOption((option) =>
      option.setName('reason').setDescription('The reason for the ban').setRequired(false),
    ) as SlashCommandBuilder,

  async execute(interaction: ChatInputCommandInteraction) {
    if (!interaction.guild) {
      interaction.reply('❌ This command can only be used in a server');
      return;
    }

    if (!interaction.memberPermissions?.has(PermissionFlagsBits.BanMembers)) {
      await interaction.reply('❌ You dont have the permission to ban a member');
      return;
    }

    const user = interaction.options.getUser('user', true);
    const member = await interaction.guild.members.fetch(user.id).catch(() => null);

    if (!member) {
      await interaction.reply('❌ This user is not on this server');
      return;
    }

    if (!member.bannable) {
      await interaction.reply('❌ I cant ban that member, check my role position and permissions');
      return;
    }

    const reason = interaction.options.getString('reason') ?? 'No reason provided';

    await member.ban({ reason });

    await interaction.reply(`👢 **${user.tag}** has been banned.\n📝 Reason: ${reason}`);
  },
};
