import { IsString, IsNumber, Max, Min } from 'class-validator';

export class ReviewDto {

  @IsString()
  name: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  @Max(5)
  @Min(1)
  rating: number;

  @IsString()
  productId: string;
}
