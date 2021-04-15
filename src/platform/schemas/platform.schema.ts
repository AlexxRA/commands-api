import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Platform extends Document {
  @Prop({
    type: String,
    required: true
  })
  name: string;

  @Prop({
    type: String,
    required: true
  })
  description: string;
}

export const PlatformSchema = SchemaFactory.createForClass(Platform);