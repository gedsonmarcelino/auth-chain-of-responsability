import { AuthStep } from './AuthStep';

export class ValidateCredentialsStep extends AuthStep {
  private check(context: any) {
    return context.username === 'test' && context.password === '123';
  }

  protected async process(context: any): Promise<boolean> {
    console.log('Validando credenciais...');
    if (!this.check(context)) {
      throw new Error('invalid_credentials');
    }
    return true;
  }
}
