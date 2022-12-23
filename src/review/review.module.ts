import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewController } from './review.controller';
import { ReviewSchema } from './review.schema';

@Module({
  controllers: [ReviewController],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Review',
        schema: ReviewSchema,
      },
    ]),
  ],
})
export class ReviewModule {}
