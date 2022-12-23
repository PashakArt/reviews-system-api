import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FindTopPageDto } from './dto/top-page.dto';
import { TopPageModel } from './top-page.schema';

@Controller('top-page')
export class TopPageController {
  @Get(':id')
  async get(@Param('id') id: string) {}

  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Patch(':id')
  async patch(@Param('id') id: string) {}

  @Post()
  @HttpCode(200)
  async find(@Body() dto: FindTopPageDto) {}
}
