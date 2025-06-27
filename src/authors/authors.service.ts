import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Author } from './author.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthorsService {
    constructor(
        @InjectRepository(Author)
        private readonly authorRepository: Repository<Author>
    ) {}

    create(author: Partial<Author>) {
        const newAuthor = this.authorRepository.create(author)
        return this.authorRepository.save(newAuthor)
    }

    findAll() {
        return this.authorRepository.find()
    }

    findOne(id: number) {
        return this.authorRepository.findOne({
            where: {id}
        })
    }
}
