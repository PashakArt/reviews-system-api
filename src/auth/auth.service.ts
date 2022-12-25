import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthDto } from './dto/auth.dto';
import { UserDocument } from './user.schema';
import { genSaltSync, hashSync } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  async createUser(authDto: AuthDto) {
    const salt = genSaltSync(10);
    const newUser = new this.userModel({
      email: authDto.email,
      passwordHash: hashSync(authDto.password, salt),
    });
    return newUser.save();
  }

  async findUser(email: string) {
    return this.userModel.findOne({ email: email }).exec();
  }
}
