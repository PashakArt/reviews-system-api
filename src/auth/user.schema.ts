import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<UserModel>;

@Schema({ timestamps: { updatedAt: false } })
export class UserModel {
  @Prop({ unique: true })
  email: string;

  @Prop()
  passwordHash: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
