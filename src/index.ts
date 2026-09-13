import 'dotenv/config';
import { Client, Events, GatewayIntentBits } from 'discord.js';
import { helpCommand } from './commands/utility/help';
import { serverInfoCommand } from './commands/utility/serverinfo';
import { userInfoCommand } from './commands/utility/userInfo';
import { commands } from './utils/commands';

commands.set(helpCommand.data.name, helpCommand);
commands.set(serverInfoCommand.data.name, serverInfoCommand);
commands.set(userInfoCommand.data.name, userInfoCommand);

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

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
