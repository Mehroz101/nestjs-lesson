import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateSongDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString({ each: true })
  @IsArray()
  readonly atists: string[];

  @IsNotEmpty()
  @IsDateString()
  readonly releaseDate: string;

  @IsNotEmpty()
  @IsMilitaryTime()
  readonly duration: string;
}

