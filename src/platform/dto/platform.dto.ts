import { Document } from 'mongoose';

export class PlatformDTO extends Document {
  readonly name: string;
  readonly description: string;
}
