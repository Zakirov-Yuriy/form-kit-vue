import { IsString, IsOptional, IsEmail, IsPhoneNumber, Length, Matches, IsInt, Min, Max, Validate } from 'class-validator';
import { Transform } from 'class-transformer';

class InnValidator {
  validate(value: string): boolean {
    if (!value) return false;
    const digits = value.replace(/\D/g, '');

    if (digits.length === 12) {
      return this.validatePersonInn(digits);
    } else if (digits.length === 10) {
      return this.validateCompanyInn(digits);
    }
    return false;
  }

  private validatePersonInn(inn: string): boolean {
    const weights = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0, 0];
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(inn[i]) * weights[i];
    }
    const controlDigit = sum % 11 % 10;
    return parseInt(inn[10]) === controlDigit;
  }

  private validateCompanyInn(inn: string): boolean {
    const weights = [2, 4, 10, 3, 5, 9, 4, 6, 8];
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(inn[i]) * weights[i];
    }
    const controlDigit = sum % 11 % 10;
    return parseInt(inn[9]) === controlDigit;
  }

  defaultMessage() {
    return 'ИНН недействителен';
  }
}

class PhoneValidator {
  validate(value: string): boolean {
    const digits = value.replace(/\D/g, '');
    if (digits.length === 11 && digits.startsWith('7')) {
      return true;
    }
    if (digits.length === 11 && digits.startsWith('8')) {
      return true;
    }
    return false;
  }

  defaultMessage() {
    return 'Телефон недействителен';
  }
}

export class FormA {
  @IsString({ message: 'Имя должно быть строкой' })
  @IsOptional({ message: 'Имя не может быть пустым' })
  name: string;

  @IsOptional()
  @IsEmail({}, { message: 'Неверный формат email' })
  email?: string;

  @IsString({ message: 'ИНН должен быть строкой' })
  @Validate(InnValidator, { message: 'Неверный формат ИНН' })
  inn: string;

  @IsString({ message: 'Телефон должен быть строкой' })
  @Validate(PhoneValidator, { message: 'Неверный формат телефона' })
  @Transform(({ value }) => value.replace(/\D/g, '').replace(/^8/, '7'))
  phone: string;
}
