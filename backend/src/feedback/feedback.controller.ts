import { Body, Controller, Post } from '@nestjs/common';
import { FeedbackService } from './feedback.service';

@Controller('feedbacks')
export class FeedbackController {
  constructor(private feedback: FeedbackService) {}

  @Post()
  createNew(@Body() body) {
    console.log(body);
    return { message: 'ok' };
  }
}
