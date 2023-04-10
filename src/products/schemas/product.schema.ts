import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ProductClass extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  qty: number;
}

export const ProductSchema = SchemaFactory.createForClass(ProductClass);
