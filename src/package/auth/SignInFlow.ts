import { ValidateCredentialsStep } from './ValidateCredentialStep';
import { Check2FAStep } from './Check2FAStep';
import { AcceptTermsStep } from './AuthTermsStep';

const signInflow = new ValidateCredentialsStep();
signInflow.setNext(new Check2FAStep()).setNext(new AcceptTermsStep());

export { signInflow };
