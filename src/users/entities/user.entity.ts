import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail } from "class-validator";
import { Document } from "mongoose";

@Schema()
export class User extends Document {
  @Prop({
    index: true,
    unique: true,
  })
  name: string;
  @Prop({
    unique: true,
    index: true,
  })
  email: string;
  @Prop({
    index: true,
  })
  password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
