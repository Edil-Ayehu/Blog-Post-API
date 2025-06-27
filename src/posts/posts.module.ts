import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Author } from 'src/authors/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Author])],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
