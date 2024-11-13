import { IsString, IsDate, IsOptional } from 'class-validator';

export class UpdateEventDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsDate()
  @IsOptional()
  date?: Date;
}
