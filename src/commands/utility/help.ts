import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { commandType } from '../../types/command';
import { commands } from '../../utils/commands';

export const helpCommand: commandType = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Show a list of available commands'),

  async execute(interaction: ChatInputCommandInteraction) {
    const commandList = commands.map((command) => {
      return `/${command.data.name} -- ${command.data.description}`;
    });

    await interaction.reply(commandList.join('\n'));
  },
};
