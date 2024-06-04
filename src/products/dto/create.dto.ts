import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductsDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsNumber()
  readonly stock: number;

  @IsUrl()
  readonly image: string;
}
