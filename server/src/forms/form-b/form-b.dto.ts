import { IsString, IsNotEmpty, IsEmail, Matches, Validate, ValidationArguments } from 'class-validator';
import { Transform } from 'class-transformer';

// Custom validator for Birth Date
class BirthDateValidator {
  validate(value: string, args: ValidationArguments): boolean {
    if (!value) return false;

    const [regex] = args.constraints;
    if (!regex.test(value)) {
      return false; // Does not match DD.MM.YYYY format
    }

    const parts = value.split('.');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    const date = new Date(year, month - 1, day);

    // Check if date is valid and matches the input parts
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
      return false; // Invalid date (e.g., Feb 30)
    }

    // Check age range (0-120 years)
    const today = new Date();
    const age = today.getFullYear() - year - (today.getMonth() < month - 1 || (today.getMonth() === month - 1 && today.getDate() < day) ? 1 : 0);

    return age >= 0 && age <= 120;
  }

  defaultMessage(args: ValidationArguments) {
    const property = args.property;
    return `${property} must be a valid date between 0 and 120 years old.`;
  }
}

export class FormB {
  @IsString({ message: 'Имя должно быть строкой' })
  @IsNotEmpty({ message: 'Имя обязательно для заполнения' })
  firstName: string;

  @IsString({ message: 'Фамилия должна быть строкой' })
  @IsNotEmpty({ message: 'Фамилия обязательна для заполнения' })
  lastName: string;

  @IsString({ message: 'Отчество должно быть строкой' })
  @IsNotEmpty({ message: 'Отчество обязательно для заполнения' })
  middleName: string;

  @IsString({ message: 'Дата рождения должна быть строкой' })
  @Validate(BirthDateValidator, [/^(\d{2})\.(\d{2})\.(\d{4})$/], { message: 'Неверный формат даты рождения или возраст вне диапазона 0-120 лет' })
  birthDate: string;

  @IsString({ message: 'Логин должен быть строкой' })
  @IsNotEmpty({ message: 'Логин обязателен для заполнения' })
  @Matches(/^[a-zA-Z][a-zA-Z0-9_]{5,}$/, { message: 'Логин должен начинаться с латинской буквы, содержать латинские буквы, цифры или подчеркивания, и быть не менее 6 символов' })
  login: string;

  @IsString({ message: 'Email должен быть строкой' })
  @IsNotEmpty({ message: 'Email обязателен для заполнения' })
  @IsEmail({}, { message: 'Неверный формат email' })
  email: string;
}
