import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { commandType } from '../../types/command';

export const avatarCommand: commandType = {
  data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription("Show a user's avatar")
    .addUserOption((option) =>
      option
        .setName('user')
        .setDescription('The user whose avatar you want to see')
        .setRequired(false),
    ) as SlashCommandBuilder,

  async execute(interaction: ChatInputCommandInteraction) {
    const user = interaction.options.getUser('user') ?? interaction.user;

    const avatar = user.displayAvatarURL({ size: 1024 });

    await interaction.reply(avatar);
  },
};
