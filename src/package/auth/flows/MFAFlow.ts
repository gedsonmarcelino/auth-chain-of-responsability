
import { AcceptTermsStep } from '../steps/AuthTermsStep';
import { GetDataUserStep } from '../steps/GetDataUserStep';
import { ValidateCodeStep } from '../steps/ValidateCodeStep';

const mfaFlow = new ValidateCodeStep();

mfaFlow.setNext(new GetDataUserStep())
    .setNext(new AcceptTermsStep());

export { mfaFlow };
