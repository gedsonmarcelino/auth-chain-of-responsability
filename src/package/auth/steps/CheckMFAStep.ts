import { AuthStepAbstract } from '../AuthStepAbstract';
import type { TAuthContext } from '../types';

export class CheckMFAStep extends AuthStepAbstract {
  protected async process(context: TAuthContext): Promise<boolean> {
    console.log('Step: Check MFA', context);
    if (!context.has2FA) {
      throw new Error('move_mfa');
    }
    return true;
  }
}
