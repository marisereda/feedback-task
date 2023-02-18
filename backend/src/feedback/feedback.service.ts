import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FeedbackDto } from './dto/feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaService) {}

  async createNew(dto: FeedbackDto) {
    const feedback = await this.prisma.feedback.create({ data: dto });
    return feedback;
  }
}
