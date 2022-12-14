import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { graphqlUploadExpress } from 'graphql-upload';

async function bootstrap() {
  const port = 3000;

  const app = await NestFactory.create(AppModule);
  app.use(graphqlUploadExpress({ maxFileSize: 20 * 1000 * 1000 }));
  await app.listen(port);
  console.log(`App running at ${await app.getUrl()}`);
}

bootstrap();
