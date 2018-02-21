import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import {CreateCatDto} from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        // TODO: Add some logic here
    }

    @Get()
    async findAll(): Promise<any[]> {
        return [];
    }

    @Get(':id')
    findOne(@Param() params) {
        console.log(params.id);
        return {};
    }
}