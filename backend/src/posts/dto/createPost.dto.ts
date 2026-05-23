import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  caption!: string;

  @IsString()
  imageUrl!: string;

  @IsString()
  imageId!: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsArray()
  @IsString({ each: true })
  tags!: string[];
}
