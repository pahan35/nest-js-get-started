import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    HttpCode, UseInterceptors,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ParseIntPipe } from '../parse-int.pipe';
import {Roles} from "../roles.decorator";
import {TransformInterceptor} from "../transform.interceptor";

@Controller('cats')
@Roles('admin')
@UseInterceptors(TransformInterceptor)
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
