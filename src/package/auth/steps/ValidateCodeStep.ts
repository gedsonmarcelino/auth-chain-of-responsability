import { AuthStepAbstract } from '../AuthStepAbstract';
import type { TAuthContext } from '../types';

export class ValidateCodeStep extends AuthStepAbstract {
  private check(context: TAuthContext) {
    return context.code === '123';
  }

  protected async process(context: TAuthContext): Promise<boolean> {
    console.log('Step: Validate Code', context);
    if (!this.check(context)) {
      throw new Error('invalid_code');
    }
    return true;
  }
}
