import { Document } from 'mongoose';

export class CommandDTO extends Document {
  readonly description: string;
  readonly line: string;
  readonly platform: string;
  readonly keyWords: string;
}
