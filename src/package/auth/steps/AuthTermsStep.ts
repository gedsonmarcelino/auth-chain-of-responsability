import { AuthStepAbstract } from '../AuthStepAbstract';
import type { TAuthContext } from '../types';
import {get} from 'lodash'

export class AcceptTermsStep extends AuthStepAbstract {
  protected async process(context: TAuthContext): Promise<boolean> {
    console.log('Step: Accept Terms', context);
    const acceptedTerms = get(context, 'user.acceptedTerms', false)

    console.log("acceptedTerms", acceptedTerms)
    if ( !acceptedTerms ){
      throw new Error('move_accepted_terms')
    }

    return true;
  }
}
