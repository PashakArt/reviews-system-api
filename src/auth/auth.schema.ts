import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthDocument = HydratedDocument<AuthModel>;

@Schema( {timestamps: {updatedAt: false}})
export class AuthModel {

  @Prop({ required: true })
  email: string;

  @Prop()
  passswordHash: string;
}

export const AuthSchema = SchemaFactory.createForClass(AuthModel);
