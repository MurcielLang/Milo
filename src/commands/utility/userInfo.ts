import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { commandType } from '../../types/command';

export const userInfoCommand: commandType = {
  data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('Shows information about a user.')
    .addUserOption((option) =>
      option
        .setName('user')
        .setDescription('The user to get information about.')
        .setRequired(false),
    ) as SlashCommandBuilder,

  async execute(interaction: ChatInputCommandInteraction) {
    const user = interaction.options.getUser('user') ?? interaction.user;

    const member = interaction.options.getMember('user') ?? interaction.member;

    const userInfo = [
      `**${user.tag}**`,
      '',
      `🆔 ID: \`${user.id}\``,
      `🤖 Bot: ${user.bot ? 'Yes' : 'No'}`,
      `📅 Account created: <t:${Math.floor(user.createdTimestamp / 1000)}:D>`,
      `📥 Joined server: ${
        member && 'joinedTimestamp' in member && member.joinedTimestamp
          ? `<t:${Math.floor(member.joinedTimestamp / 1000)}:D>`
          : 'Unknown'
      }`,
    ].join('\n');

    await interaction.reply(userInfo);
  },
};
