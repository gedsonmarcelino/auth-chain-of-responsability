import { AuthStep } from './AuthStep';

export class AcceptTermsStep extends AuthStep {
  protected async process(context: any): Promise<boolean> {
    console.log('Verificando aceite de termos...');
    return context.acceptedTerms;
  }
}
