import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { File } from './files.model';

@Injectable()
export class FilesService {
  constructor(@InjectModel('File') private readonly fileModel: Model<File>) { }

//   async create(createFileDto: FileInput): Promise<File> {
//     const createFile = new this.fileModel(createFileDto);
//     return await createFile.save();
//   }

  // async findAll(): Promise<File[]> {
  //   return await this.fileModel.find().exec();
  // }

}