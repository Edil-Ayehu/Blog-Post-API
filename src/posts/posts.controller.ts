import { Controller, Get,Post, Param, ParseIntPipe, Body, Patch, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Post()
    create(@Body() createPostDto: CreatePostDto) {
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

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id:number, @Body() updatePostDto) {
        return this.postsService.update(id, updatePostDto)
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id:number) {
        return this.postsService.remove(id)
    }
}
