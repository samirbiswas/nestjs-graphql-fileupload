import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): { name: string } {
    return {
      name: 'nestjs- graphql-fileupload',
    };
  }
}
