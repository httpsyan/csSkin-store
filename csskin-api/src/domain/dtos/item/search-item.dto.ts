import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { QueryParamsDto } from '../shared';
import { IsGteOrLte } from 'src/common/validators';
import { Transform } from 'class-transformer';

export class SearchItemDto extends QueryParamsDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  category?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsGteOrLte()
  float?: string;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => +value)
  priceMin?: number;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => +value)
  priceMax?: number;
}
