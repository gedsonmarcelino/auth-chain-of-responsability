import { AuthStepAbstract } from '../AuthStepAbstract';
import type { TAuthContext } from '../AuthStepAbstract.types';

export class AcceptTermsStep extends AuthStepAbstract {
  protected async process(context: TAuthContext): Promise<boolean> {
    console.log('Step: Accept Terms', context);
    return context.acceptedTerms;
  }
}
