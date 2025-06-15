import { AuthStepAbstract } from '../AuthStepAbstract';
import { InvalidCodeException } from '../exceptions/InvalidCodeException';
import type { TAuthContext } from '../types';

export class ValidateCodeStep extends AuthStepAbstract {
  private check(context: TAuthContext) {
    return context.code === '123';
  }

  protected async process(context: TAuthContext): Promise<boolean> {
    console.log('Step: Validate Code', context);
    if (!this.check(context)) {
      throw new InvalidCodeException({context});
    }
    return true;
  }
}
