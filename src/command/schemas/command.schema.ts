import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Platform } from 'src/platform/schemas/platform.schema';

@Schema()
export class Command extends Document {
  @Prop({
    type: String,
    required: true
  })
  description: string;

  @Prop({
    type: String,
    required: true
  })
  line: string;

  @Prop({
    type: Types.ObjectId,
    ref: Platform.name
  })
  platform: Platform;
}

export const CommandSchema = SchemaFactory.createForClass(Command);