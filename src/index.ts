import 'dotenv/config';
import { Client, Events, GatewayIntentBits } from 'discord.js';
import { pingCommandHandler } from './commands/utility/ping';

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once('clientReady', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await pingCommandHandler(interaction);
  }

})