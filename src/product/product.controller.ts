import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { FindProductDto } from './dto/find-product.dto.ts';
import { ProductModel } from './product.model';

@Controller('product')
export class ProductController {

    @Get(':id')
    async get(@Param('id') id: string) {}

    @Post('create')
    async create(@Body() dto: Omit<ProductModel, '_id'>) {}

    @Delete(':id')
    async delete(@Param('id') id: string) {}

    @Patch(':id')
    async patch(@Param('id') id: string) {}

    @Post()
    @HttpCode(200)
    async find(@Body() dto: FindProductDto) {}
}
