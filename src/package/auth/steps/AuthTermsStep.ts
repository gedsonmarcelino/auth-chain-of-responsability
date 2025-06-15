import { AuthStepAbstract } from '../AuthStepAbstract';
import { TermException } from '../exceptions/TermsException';
import type { TAuthContext } from '../types';
import {get} from 'lodash'

export class AcceptTermsStep extends AuthStepAbstract {
  protected async process(context: TAuthContext): Promise<boolean> {
    console.log('Step: Accept Terms', context);
    const acceptedTerms = get(context, 'user.acceptedTerms', false)

    console.log("acceptedTerms", acceptedTerms)
    if ( !acceptedTerms ){
      throw new TermException({context})
    }

    return true;
  }
}
