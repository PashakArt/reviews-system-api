import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

class HhData {

  @Prop()
  count: number;
  
  @Prop()
  juniorSalary: number;
  
  @Prop()
  middleSalary: number;
  
  @Prop()
  seniorSalary: number;
}

class TopPageAdvantage {
  title: string;
  description: string;
}

export class TopPageModel {

  @Prop()
  _id: string;

  @Prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;

  @Prop()
  secondCategory: string;

  @Prop( { unique: true })
  alias: string

  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop()
  hh?: HhData;

  @Prop([TopPageAdvantage])
  advantages: TopPageAdvantage[];

  @Prop()
  seoText: string;

  @Prop()
  tagsTitle: string;

  @Prop([String])
  tags: string[];
}

export const TopPageSchema = SchemaFactory.createForClass(TopPageModel);
