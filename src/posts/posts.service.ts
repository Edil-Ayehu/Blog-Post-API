import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from 'src/authors/author.entity';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
        @InjectRepository(Author)
        private readonly authorRepository: Repository<Author>,
    ) {}

    async create(createPostDto: CreatePostDto){
        // find author with the given author id
        const author = await this.authorRepository.findOne({
            where: {id: createPostDto.authorId}
        });

        if(!author) {
            throw new NotFoundException('Author not found')
        }

        const newPost = this.postRepository.create({
            title: createPostDto.title,
            content: createPostDto.content,
            author,
        })

        return this.postRepository.save(newPost)
    }

    findAll() {
        return this.postRepository.find()
    }

    findOne(id: number) {
        return this.postRepository.findOne({
            where: {id}
        })
    }
}
