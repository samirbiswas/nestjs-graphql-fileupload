import { Module } from '@nestjs/common';
import { FileResolver } from './files.resolver';

@Module({
  providers: [FileResolver],
})
export class FileModule {}
