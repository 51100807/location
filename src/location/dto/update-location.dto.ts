import { IsString, IsOptional, IsInt } from 'class-validator';

export class UpdateLocationDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsInt()
  readonly parentId?: number;

  @IsOptional()
  @IsInt()
  readonly level?: number;
}
