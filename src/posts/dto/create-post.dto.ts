import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    title:string

    @IsString()
    @IsNotEmpty()
    content:string

    @IsInt()
    authorId: number
}