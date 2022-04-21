import { Command, DiscordCommand } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { CommandInteraction } from 'discord.js';

@Injectable()
@Command({
  name: 'ping',
  description: 'ping!'
})
export class PingCommand implements DiscordCommand {
  handler(interaction: CommandInteraction): string {
    return 'pong';
  }
}
