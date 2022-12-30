import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ReviewDto } from './dto/create-review.dto';
import { ReviewDocument, ReviewModel } from './review.schema';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(ReviewModel.name)
    private readonly reviewModel: Model<ReviewDocument>,
  ) {}

  async create(dto: ReviewDto): Promise<ReviewModel> {
    return this.reviewModel.create(dto);
  }

  async delete(id: string): Promise<ReviewModel> | null {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  async findByProductId(id: string): Promise<ReviewModel[]> {
    return this.reviewModel.find({ productId: id }).exec();
  }

  async deleteByProductId(id: string): Promise<object> {
    return this.reviewModel.deleteMany({ productId: id }).exec();
  }
}
