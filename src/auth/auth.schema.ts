import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthDocument = HydratedDocument<AuthModel>;

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
