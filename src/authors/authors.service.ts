import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Author } from './author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

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

    async update(id:number, updateAuthorDto: UpdateAuthorDto) {
        const author = await this.authorRepository.findOne({where: {id}})

        if (!author){
            throw new NotFoundException('Author Not Found')
        }

        Object.assign(author, updateAuthorDto);
        return this.authorRepository.save(author)
    }

    async remove(id:number) {
        const author = await this.authorRepository.findOne({where: {id}})

        if (!author){
            throw new NotFoundException('Author Not Found')
        }

        await this.authorRepository.remove(author)

        return {
            deleted: true,
            id,
        }
    }
}
