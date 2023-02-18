import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class FeedbackDto {
  @MinLength(4)
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(10)
  @IsNotEmpty()
  message: string;
}
