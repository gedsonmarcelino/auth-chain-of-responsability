export abstract class AuthStep {
  protected nextStep?: AuthStep;

  setNext(step: AuthStep): AuthStep {
    this.nextStep = step;
    return step;
  }

  async handle(context: any): Promise<void> {
    const result = await this.process(context);
    if (result && this.nextStep) {
      await this.nextStep.handle(context);
    }
  }

  protected abstract process(context: any): Promise<boolean>;
}
