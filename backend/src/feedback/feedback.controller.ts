import { Body, Controller, Post } from '@nestjs/common';
import { FeedbackDto } from './dto';
import { FeedbackService } from './feedback.service';

@Controller('feedbacks')
export class FeedbackController {
  constructor(private feedback: FeedbackService) {}

  @Post()
  createNew(@Body() dto: FeedbackDto) {
    const feedback = this.feedback.createNew(dto);
    return feedback;
  }
}
