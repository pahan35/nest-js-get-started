import { Controller, Get, Param, Post, Body, HttpCode, UseGuards } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ParseIntPipe } from '../parse-int.pipe';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @HttpCode(204)
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
         this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', new ParseIntPipe()) param): Promise<Cat> {
        return this.catsService.findOne(param);
    }
}
