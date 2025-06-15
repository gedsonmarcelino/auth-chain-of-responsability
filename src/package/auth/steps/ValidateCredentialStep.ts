import { faker } from '@faker-js/faker';
import { AuthStepAbstract } from '../AuthStepAbstract';
import type { TAuthContext } from '../types';

export class ValidateCredentialsStep extends AuthStepAbstract {
  private check(context: TAuthContext) {
    return context.username === 'test' && context.password === '123';
  }

  protected async process(context: TAuthContext): Promise<boolean> {
    console.log('Step: Validate Credentials', context);

    if (!this.check(context)) {
      throw new Error('invalid_credentials');
    }

    context.hasMFA = faker.datatype.boolean(0.50)
    return true;
  }
}
