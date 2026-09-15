import { ChatInputCommandInteraction, PermissionFlagsBits, SlashCommandBuilder } from 'discord.js';
import { commandType } from '../../types/command';

export const kickCommand: commandType = {
  data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Kick a member from the server')
    .addUserOption((option) =>
      option.setName('user').setDescription('The member to kick').setRequired(true),
    )
    .addStringOption((option) =>
      option.setName('reason').setDescription('The reason for the kick').setRequired(false),
    ) as SlashCommandBuilder,

  async execute(interaction: ChatInputCommandInteraction) {
    if (!interaction.guild) {
      interaction.reply('This command can only be used in a server');
      return;
    }

    if (!interaction.memberPermissions?.has(PermissionFlagsBits.KickMembers)) {
      await interaction.reply('❌ You dont have the permission to kick a member');
      return;
    }

    const user = interaction.options.getUser('user', true);
    const member = await interaction.guild.members.fetch(user.id).catch(() => null);

    if (!member) {
      await interaction.reply('❌ That user is not on this server');
      return;
    }

    if (!member.kickable) {
      await interaction.reply('❌ I cant kick that member, check my role position and permissions');
      return;
    }

    const reason = interaction.options.getString('reason') ?? 'No reason provided';

    await member.kick(reason);

    await interaction.reply(`👢 **${user.tag}** has been kicked.\n📝 Reason: ${reason}`);
  },
};
