import { DiscordModule } from "@discord-nestjs/core";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Intents } from "discord.js";
import { BotModule } from "./bot/bot.module";
import { EchoCommand } from "./bot/commands";
import { PingCommand } from "./bot/commands/ping.command";

@Module({
  imports: [
    ConfigModule.forRoot(),
    DiscordModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        token: configService.get("TOKEN"),
        discordClientOptions: {
          intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
        },
        registerCommandOptions: [
          {
            forGuild: configService.get("GUILD_ID_WITH_COMMANDS"),
            removeCommandsBefore: true
          }
        ],
        slashCommandsPermissions: [
          {
            commandClassType: EchoCommand,
            permissions: []
          },
          {
            commandClassType: PingCommand,
            permissions: []
          }
        ]
      }),
      inject: [ConfigService]
    }),
    BotModule
  ]
})
export class AppModule {
}
