import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

export interface commandType {
  data: SlashCommandBuilder;
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}
