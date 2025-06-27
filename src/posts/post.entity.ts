import { Author } from "src/authors/author.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column('text')
    content: string

    @ManyToOne(
        ()=> Author, 
        (author)=> author.posts, 
        {eager: true}, // this help to auto-loads the author info when you fetch posts
    )
    author: Author
}