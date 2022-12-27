import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { UserSchema } from './user.schema';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { getJwtConfig } from 'src/configs/jwt.config';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [AuthController],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
    ]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig,
    }),
  ],
  providers: [AuthService],
})
export class AuthModule {}
