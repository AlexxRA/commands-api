import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
    type: String,
    required: true
  })
  platform: string;
}

export const CommandSchema = SchemaFactory.createForClass(Command);