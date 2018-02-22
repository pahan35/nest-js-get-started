import { Controller, Get, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
    @Post()
    create(@Res() res, @Body() createCatDto: CreateCatDto) {
        // TODO: Add some logic here
        res.status(HttpStatus.CREATED).send();
    }

    @Get()
    findAll(@Res() res) {
        res.status(HttpStatus.OK).json([]);
    }

    @Get(':id')
    findOne(@Res() res) {
        res.status(HttpStatus.OK).json({});
    }
}
