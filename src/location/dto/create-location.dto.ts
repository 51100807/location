import { IsString, IsOptional, IsInt } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsInt()
  readonly parentId?: number;

  @IsInt()
  readonly level: number;
}
