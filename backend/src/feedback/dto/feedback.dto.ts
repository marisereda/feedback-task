import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class FeedbackDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(10)
  @IsNotEmpty()
  message: string;
}
