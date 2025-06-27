import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Author } from './author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';

@Injectable()
export class AuthorsService {
    constructor(
        @InjectRepository(Author)
        private readonly authorRepository: Repository<Author>
    ) {}

    create(createAuthorDto: CreateAuthorDto) {
        const newAuthor = this.authorRepository.create(createAuthorDto)
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
