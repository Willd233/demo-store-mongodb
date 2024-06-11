import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductsDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly price: number;

  @IsNumber()
  @ApiProperty()
  readonly stock: number;

  @IsUrl()
  @ApiProperty()
  readonly image: string;
}
