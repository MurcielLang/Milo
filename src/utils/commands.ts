import { Collection } from 'discord.js';
import { commandType } from '../types/command';
import { pingCommand } from '../commands/utility/ping';

export const commands = new Collection<string, commandType>();

commands.set(pingCommand.data.name, pingCommand);
