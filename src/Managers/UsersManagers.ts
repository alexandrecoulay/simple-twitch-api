import EventEmitter from '../Utils/EventEmitter';
import type { clientData } from './interfaces/Global';
import type { FetchUserParameters, JSONfetchUser } from './interfaces/Users';

class UserManager extends EventEmitter {
  private user_id?: string;

  /**
   *
   * @param user_id optional parameter
   */
  constructor(data: clientData, user_id?: string) {
    super(data);

    this.user_id = user_id;
  }

  /**
   * Get Users
   * @OAuth OAuth or App Access Token required
   * @link https://dev.twitch.tv/docs/api/reference#get-users
   * @scope user:read:email (optional)
   */
  public async fetch(parameters?: FetchUserParameters) {
    const request = await this.getRequest(`/users?
            ${this?.user_id && `${this.user_id}`}
            ${
              parameters?.login_name &&
              parameters?.login_name?.length > 0 &&
              parameters?.login_name?.length < 101 &&
              parameters?.login_name?.map(l => `&login=${l}`)
            }
            ${
              parameters?.user_id &&
              parameters?.user_id?.length > 0 &&
              parameters?.user_id?.length < 101 &&
              parameters?.user_id?.map(l => `&id=${l}`)
            }
            `);

    const response = request as JSONfetchUser;

    return response.data;
  }
}

export default UserManager;
