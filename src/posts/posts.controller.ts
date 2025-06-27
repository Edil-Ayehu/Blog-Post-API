import { Controller, Get,Post, Param, ParseIntPipe, Body } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Post()
    create(@Body()createPostDto: any) {
        return this.postsService.create(createPostDto)
    }

    @Get()
    findAll(){
        return this.postsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number) {
        return this.postsService.findOne(id)
    }
}
