import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Author } from './author.entity';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';

@Controller('authors')
export class AuthorsController {
    constructor( private readonly authorsService: AuthorsService) {}

    @Post()
    create(@Body() createAuthorDto: CreateAuthorDto) {
        return this.authorsService.create(createAuthorDto)
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
