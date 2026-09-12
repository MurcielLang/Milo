import "dotenv/config";
import { REST, Routes } from "discord.js";
import { pingCommand } from "./commands/utility/ping";
import { helpCommand } from "./commands/utility/help";

const commands = [
  pingCommand.data.toJSON(),
  helpCommand.data.toJSON(),
];

const rest = new REST({ version: "10" }).setToken(
  process.env.DISCORD_TOKEN!,
);

async function deployCommands() {
  try {
    console.log("Registering slash commands...");

    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID!),
      { body: commands },
    );

    console.log("Slash commands registered!");
  } catch (error) {
    console.error(error);
  }
}

deployCommands();