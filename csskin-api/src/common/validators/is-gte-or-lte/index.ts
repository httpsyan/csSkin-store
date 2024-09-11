import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  registerDecorator,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsGteOrLte', async: false })
export class IsValueGteOrLte implements ValidatorConstraintInterface {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate(value: string, _: ValidationArguments) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, type] = value.split(',');

      if (type != 'gte' && type != 'lte') return false;

      return true;
    } catch {
      return false;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultMessage(_: ValidationArguments) {
    return 'Invalid filter param, sent [field].[gte or lte]';
  }
}

export function IsGteOrLte() {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsGteOrLte',
      target: object.constructor,
      propertyName: propertyName,
      options: {},
      validator: IsValueGteOrLte,
    });
  };
}
