import { Document } from 'mongoose';

export interface Blog {
  _id: string;
  topic: string;
  category: string;
  author: string;
  content: string;
  createTime: Date;
  keyword: string;
}

export type BlogDocument = Blog & Document;
