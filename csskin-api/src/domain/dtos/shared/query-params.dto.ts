import { Transform } from 'class-transformer';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';
import { IsSort } from 'src/common/validators';

export class QueryParamsDto {
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => +value)
  page: number = 1;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => +value)
  pageSize: number = 10;

  @IsString()
  @IsOptional()
  @IsSort()
  orderBy?: string;

  @IsOptional()
  @IsDateString()
  from?: string;

  @IsOptional()
  @IsDateString()
  to?: string;
}
