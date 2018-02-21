import { Controller, Get, Post, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Post()
    create() {
        // TODO: Add some logic here
    }
    
    @Get()
    findAll(@Req() request) {
        return [];
    }
}