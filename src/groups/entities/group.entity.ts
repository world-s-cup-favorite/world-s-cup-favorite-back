import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import {
  Country,
  CountrySchema,
} from "../../countries/entities/country.entity";
@Schema()
export class Group extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  groupName: string;

  @Prop({
    index: true,
    type: [CountrySchema],
  })
  teams: Country[];
}

export const GroupSchema = SchemaFactory.createForClass(Group);
