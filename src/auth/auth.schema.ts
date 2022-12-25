import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthDocument = HydratedDocument<AuthModel>;

@Schema()
export class AuthModel {
  @Prop()
  _id: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  passswordHash: string;

  @Prop({ default: Date.now })
  creastedAt: Date;
}

export const AuthSchema = SchemaFactory.createForClass(AuthModel);
