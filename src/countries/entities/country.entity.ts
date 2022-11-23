import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
@Schema()
export class Country extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
  })
  flag: string;
  @Prop({
    index: true,
  })
  favoritePoint: number;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
