import { Post } from "src/posts/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({
        nullable: true,
    })
    bio: string

    @OneToMany(() => Post, (post)=> post.author)
    posts : Post[]
}