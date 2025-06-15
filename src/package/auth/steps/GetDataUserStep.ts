import { AuthStepAbstract } from '../AuthStepAbstract';
import type { TAuthContext, TUser } from '../types';
import { faker } from '@faker-js/faker';

export class GetDataUserStep extends AuthStepAbstract {

  private async getDataUser () : Promise<TUser>{
    return Promise.resolve({
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      phone: faker.phone.number(),
      email: faker.internet.email(),
    })
  }
 
  protected async process(context: TAuthContext): Promise<boolean> {
    console.log('Step: GetDataUser', context);
    try {
      context.user = await this.getDataUser()
    } catch {
      throw new Error('error_get_data_user')
    }
    
    return true;
  }
}
