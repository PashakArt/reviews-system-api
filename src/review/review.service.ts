import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ReviewDocument, ReviewModel } from './review.schema';

@Injectable()
export class ReviewService {
    constructor(@Inject(ReviewModel.name) private readonly reviewModel: Model<ReviewDocument>) {}
}
