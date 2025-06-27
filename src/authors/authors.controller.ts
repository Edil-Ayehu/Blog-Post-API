import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Author } from './author.entity';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
    constructor( private readonly authorsService: AuthorsService) {}

    @Post()
    create(@Body() author: Partial<Author>) {
        return this.authorsService.create(author)
    }

    @Get()
    findAll() {
        return this.authorsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.authorsService.findOne(id)
    }
}
