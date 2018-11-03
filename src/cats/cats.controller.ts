import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    HttpCode, UseInterceptors,
} from '@nestjs/common';
import { UserEntity } from "../common/entities/user.entity";

import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ParseIntPipe } from '../parse-int.pipe';
import {Roles} from "../roles.decorator";
import {TransformInterceptor} from "../transform.interceptor";
import {ExceptionInterceptor} from "../exception.interceptor";
import {CacheInterceptor} from "../cache.interceptor";
import {User} from '../common/decorators/user.decorator';

@Controller('cats')
@Roles('admin')
@UseInterceptors(TransformInterceptor, ExceptionInterceptor)
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @HttpCode(204)
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    @UseInterceptors(CacheInterceptor)
    async findAll(@User() user: UserEntity): Promise<Cat[]> {
        console.log({user});
        return this.catsService.findAll();
    }

    @Get(':id')
    async findOne(@User() user: UserEntity, @Param('id', new ParseIntPipe()) param): Promise<Cat> {
        console.log({user});
        return this.catsService.findOne(param);
    }
}
