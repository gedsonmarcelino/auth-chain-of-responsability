import { signInService } from '../../services/auth';
import { AuthStepAbstract } from '../AuthStepAbstract';
import type { TAuthContext, TUser } from '../types';
import { get } from 'lodash'

export class GetDataUserStep extends AuthStepAbstract {

  private async getDataUser (context: TAuthContext) : Promise<TUser>{
    return await signInService({
      username: get(context, 'username', ''), 
      password: get(context, 'password', '')
    })
  }
 
  protected async process(context: TAuthContext): Promise<boolean> {
    console.log('Step: GetDataUser', context);
    try {
      context.user = await this.getDataUser(context)
    } catch {
      throw new Error('error_get_data_user')
    }
    
    return true;
  }
}
