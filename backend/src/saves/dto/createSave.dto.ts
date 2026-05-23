import { IsString } from 'class-validator';

export class CreateSaveDto {
  @IsString()
  postId!: string;
}
