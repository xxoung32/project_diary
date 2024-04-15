import { IsString, IsNumber, IsOptional } from "class-validator";

export class CreateProduct {
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
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
