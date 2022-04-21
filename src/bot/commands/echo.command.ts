import { Injectable } from '@nestjs/common';
import { EchoDto } from '../dto';
import { TransformPipe } from '@discord-nestjs/common';
import {
  Command,
  DiscordTransformedCommand,
  Payload,
  TransformedCommandExecutionContext,
  UsePipes,
} from '@discord-nestjs/core';

@Injectable()
@Command({
  name: 'echo',
  description: 'echo!',
})
@UsePipes(TransformPipe)
export class EchoCommand implements DiscordTransformedCommand<EchoDto> {
  handler(
    @Payload() dto: EchoDto,
    { interaction }: TransformedCommandExecutionContext,
  ): string {
    console.log('DTO', dto);
    console.log('Interaction', interaction);

    return `${dto.echo}`;
  }
}
