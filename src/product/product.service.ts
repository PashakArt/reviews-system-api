import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto.ts';
import { ProductDocument, ProductModel } from './product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async findById(id: string) {
    return this.productModel.findById(id).exec();
  }

  async create(dto: CreateProductDto) {
    return this.productModel.create(dto);
  }

  async deleteById(id: string) {
    return this.productModel.findByIdAndDelete(id).exec();
  }

  async updateById(id: string, dto: CreateProductDto) {
    return this.productModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async findWithReviews(dto: FindProductDto) {
    return this.productModel.aggregate([
      {
        $match: {
          categories: dto.category,
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
      {
        $limit: dto.limit,
      },
      {
        $lookup: {
          from: 'Review',
          localField: '_id',
          foreignField: 'productId',
          as: 'reviews',
        },
      },
      {
        $addFields: {
          reviewCount: { $size: '$reviews' },
					reviewAvg: { $avg: '$reviews.rating' },
        },
      },
    ]);
  }
}
