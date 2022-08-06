import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileModule } from './files/files.module';

@Module({
  imports: [
    FileModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'person.gql',
      debug: true,
      // playground: process.env.NODE_ENV !== 'production',
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
