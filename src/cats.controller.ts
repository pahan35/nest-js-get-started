import { Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @HttpCode(204)
    @Post()
    create() {
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