import { ValidateCredentialsStep } from '../steps/ValidateCredentialStep';
import { CheckMFAStep } from '../steps/CheckMFAStep';
import { AcceptTermsStep } from '../steps/AuthTermsStep';
import { GetDataUserStep } from '../steps/GetDataUserStep';

const signInflow = new ValidateCredentialsStep();

signInflow.setNext(new CheckMFAStep())
    .setNext(new GetDataUserStep())
    .setNext(new AcceptTermsStep());

export { signInflow };
