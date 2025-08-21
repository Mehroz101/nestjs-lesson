import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(['admin', 'user'], { message: 'Role must be admin or user' })
  @IsNotEmpty()
  role: 'admin' | 'user';
}

