import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { resolveDynamicProviders } from 'nestjs-dynamic-providers';

async function bootstrap() {
  await resolveDynamicProviders();
  const app = await NestFactory.createApplicationContext(AppModule);
  await app.init();
}
bootstrap();
