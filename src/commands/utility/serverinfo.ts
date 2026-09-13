import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { commandType } from "../../types/command";

export const serverInfo: commandType ={
    data: new SlashCommandBuilder().setName("serverinfo").setDescription("Shows information about this server"),

    async execute(interaction: ChatInputCommandInteraction) {
        const guild = interaction.guild;
        console.log(guild?.name);
    },
};