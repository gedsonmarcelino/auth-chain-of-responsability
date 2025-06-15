import { AuthStepAbstract } from '../AuthStepAbstract';
import { MfaException } from '../exceptions/MfaException';
import type { TAuthContext } from '../types';

export class CheckMFAStep extends AuthStepAbstract {
  protected async process(context: TAuthContext): Promise<boolean> {
    console.log('Step: Check MFA', context);
    if (context.hasMFA) {
      throw new MfaException({context});
    }
    return true;
  }
}
