import { IsString, IsNumber, IsOptional } from "class-validator";

export class Product {
  @IsString()
  name!: string;

  @IsNumber()
  price!: number;

  @IsString()
  image!: string;

  @IsString()
  description!: string;
}

export class UpdateProduct {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  image?: string;

  @IsString()
  @IsOptional()
  description?: string;
}
