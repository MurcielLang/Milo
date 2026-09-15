import 'dotenv/config';
import { Client, Events, GatewayIntentBits } from 'discord.js';
import { helpCommand } from './commands/utility/help';
import { serverInfoCommand } from './commands/utility/serverinfo';
import { userInfoCommand } from './commands/utility/userInfo';
import { avatarCommand } from './commands/utility/avatar';
import { botInfoCommand } from './commands/utility/botInfo';
import { uptimeCommand } from './commands/utility/uptime';
import { kickCommand } from './commands/moderation/kick';
import { banCommand } from './commands/moderation/ban';
import { unbanCommand } from './commands/moderation/unban';
import { commands } from './utils/commands';

commands.set(helpCommand.data.name, helpCommand);
commands.set(serverInfoCommand.data.name, serverInfoCommand);
commands.set(userInfoCommand.data.name, userInfoCommand);
commands.set(avatarCommand.data.name, avatarCommand);
commands.set(botInfoCommand.data.name, botInfoCommand);
commands.set(uptimeCommand.data.name, uptimeCommand);
commands.set(kickCommand.data.name, kickCommand);
commands.set(banCommand.data.name, banCommand);
commands.set(unbanCommand.data.name, unbanCommand);

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
