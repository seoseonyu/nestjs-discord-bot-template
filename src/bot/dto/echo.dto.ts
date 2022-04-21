import { Transform } from 'class-transformer';
import { Param } from '@discord-nestjs/core';

export class EchoDto {
  @Transform(({ value }) => value.toUpperCase())
  @Param({
    name: 'text',
    description: `Echo text!`,
    required: true,
  })
  echo: string;
}
