import { AuthStep } from './AuthStep';

export class Check2FAStep extends AuthStep {
  protected async process(context: any): Promise<boolean> {
    console.log('Verificando 2FA...');
    if (!context.has2FA) {
      throw new Error('move_2fa');
    }
    return true;
  }
}
