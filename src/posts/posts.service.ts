import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from 'src/authors/author.entity';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
        @InjectRepository(Author)
        private readonly authorRepository: Repository<Author>,
    ) {}

    async create(postData: {title: string, content: string, authorId: number}){
        // find author with the given author id
        const author = await this.authorRepository.findOne({
            where: {id: postData.authorId}
        });

        if(!author) {
            throw new NotFoundException('Author not found')
        }

        const newPost = this.postRepository.create({
            title: postData.title,
            content: postData.content,
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
