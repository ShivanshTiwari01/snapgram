import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './createPost.dto';

// eslint-disable-next-line
export class UpdatePostDto extends PartialType(CreatePostDto) {}
