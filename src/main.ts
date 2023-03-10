import {
  INestApplication,
  Logger,
  NestApplicationOptions,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

async function createApp(options?: NestApplicationOptions) {
  const app = await NestFactory.create(AppModule, options);
  return app;
}

export async function configureApp(app: INestApplication) {
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      validationError: {
        target: false,
      },
    }),
  );
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);
}

async function main() {
  const app = await createApp();
  const port = process.env.PORT || 3000;
  await configureApp(app);

  await app.listen(port);

  Logger.log(
    `GraphQL application is running on: ${await app.getUrl()}`,
    'main',
  );
}

main();
