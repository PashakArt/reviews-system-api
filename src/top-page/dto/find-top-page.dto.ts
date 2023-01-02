import { IsEnum } from 'class-validator';
import { TopLevelCategory } from '../top-page.schema';

export class FindTopPageDto {
  @IsEnum(TopLevelCategory)
  firstCategory: TopLevelCategory;
}
