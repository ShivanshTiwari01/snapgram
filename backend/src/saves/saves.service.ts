import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SavesService {
  constructor(private prisma: PrismaService) {}

  async savePost(userId: string, postId: string) {
    const post = await this.prisma.post.findUnique({ where: { id: postId } });

    if (!post) throw new NotFoundException('Post not found');

    const existing = await this.prisma.save.findFirst({
      where: { userId, postId },
    });

    if (existing) throw new ConflictException('Post already saved');

    return this.prisma.save.create({
      data: { userId, postId },
      include: { post: true },
    });
  }

  async unsavePost(saveId: string, userId: string) {
    const save = await this.prisma.save.findUnique({ where: { id: saveId } });

    if (!save) throw new NotFoundException('Saved record not found');

    if (save.userId !== userId)
      throw new ForbiddenException("Cannot remove another user's save");

    await this.prisma.save.delete({ where: { id: saveId } });

    return { message: 'Post unsaved successfully' };
  }

  async getSavedPosts(userId: string) {
    return this.prisma.save.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        post: {
          include: {
            creator: { select: { id: true, name: true, imageUrl: true } },
          },
        },
      },
    });
  }
}
