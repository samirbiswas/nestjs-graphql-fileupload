import * as mongoose from 'mongoose';

export const FileSchema = new mongoose.Schema({
  fileName: {
    type: String
  },
  size: {
    type: Number
  },
  path: {
    type: String
  },
  orginalName: {
    type: String
  }
});
