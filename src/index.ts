import 'dotenv/config';
import { Client, Collection, Events, GatewayIntentBits } from 'discord.js';

import { pingCommand } from './commands/utility/ping';
import { commandType } from './types/command';

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

const commands = new Collection<string, commandType>();

commands.set(pingCommand.data.name, pingCommand);

client.once(Events.ClientReady, () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = commands.get(interaction.commandName);

  if (!command) return;

  await command.execute(interaction);
});

client.login(process.env.DISCORD_TOKEN);
