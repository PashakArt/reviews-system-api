import { Prop, SchemaFactory } from '@nestjs/mongoose';

export class ReviewModel {
  @Prop()
  _id: string;

  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  rating: number;

  @Prop()
  created: Date;
}

export const ReviewSchema = SchemaFactory.createForClass(ReviewModel);
