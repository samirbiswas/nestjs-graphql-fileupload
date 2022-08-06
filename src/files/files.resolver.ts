import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { File } from './files.model';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import * as fs from 'fs/promises';
import { parse } from 'path';

@Resolver()
export class FileResolver {
  constructor() { }

  @Query(() => File)
  async files() {
    return "hello";
  }

  @Mutation(() => Int, { name: 'video' })
  async uploadFile(@Args('file', { type: () => GraphQLUpload }) file: FileUpload): Promise<any> {
    try {
      const { createReadStream, filename } = file;
      const stream = createReadStream();
      let { ext, name } = parse(filename)
      const chunks = [];

      const buffer = await new Promise<Buffer>((resolve, reject) => {
        let buffer: Buffer;

        stream.on('data', function (chunk) {
          chunks.push(chunk);
        });

        stream.on('end', function () {
          buffer = Buffer.concat(chunks);
          resolve(buffer);
        });
        stream.on('error', reject);
      });

      const base64 = buffer.toString('base64');
      let p = Math.floor(Math.random() * 10)
      await fs.writeFile(`upload/${p}-${Date.now()}-${name}${ext}`, buffer);

      return base64.length

    } catch (err) {
      console.log(err);
    }
  }
}
