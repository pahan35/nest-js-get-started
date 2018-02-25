import { Controller, Get, Param, Post, Res, Body, HttpCode, UsePipes } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ValidationPipe } from '../validation.pipe';

@Controller('cats')
@UsePipes(new ValidationPipe())
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
    async findOne(@Param('id') param): Promise<Cat> {
        return this.catsService.findOne(param);
    }
}
