import type { TAuthContext } from "./types";

export abstract class AuthStepAbstract {
  protected nextStep?: AuthStepAbstract;

  setNext(step: AuthStepAbstract): AuthStepAbstract {
    this.nextStep = step;
    return step;
  }

  async handle(context: TAuthContext): Promise<void> {
    const result = await this.process(context);
    if (result && this.nextStep) {
      await this.nextStep.handle(context);
    }
  }

  protected abstract process(context: TAuthContext): Promise<boolean>;
}
