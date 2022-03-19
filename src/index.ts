import axios from 'axios';
import AnalyticsManager from './Managers/AnalyticsManagers';
import ChannelsManager from './Managers/ChannelsManagers';
import EventSubsManager from './Managers/EventsSubsManagers';
import type { clientData, IgetToken } from './Managers/interfaces/Global';
import StreamManager from './Managers/StreamManagers';
import UserManager from './Managers/UsersManagers';
import { EventSubGetStatusExport, EventSubsTypesExport } from './Utils/const_exports';
import EventEmitter from './Utils/EventEmitter';

/**
 * To get the access token for each connection with the API
 *
 * @param {string} scope join all scopes with a + https://dev.twitch.tv/docs/authentication#scopes
 * @example
 * getToken('CLIENT_ID', 'CLIENT_SECRET', 'user:read:email').then(token => {
 *  console.log(token);
 * });
 */

export const getToken = async (client_id: string, client_secret: string, scope: string) => {
  const request = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials&scope=${scope}`);
  const response = request.data as IgetToken;

  return response;
};

export const EventSubType = EventSubsTypesExport;
export const EventSubGetStatus = EventSubGetStatusExport;

class TwitchClient extends EventEmitter {

  protected data: clientData;

  public analytics: AnalyticsManager;
  public stream: StreamManager;
  public eventsub: EventSubsManager;
  
  constructor(data: clientData) {
      super(data);

      this.data = {
        twitch_client_id: data.twitch_client_id, 
        token: data.token
      }
      
      this.analytics = new AnalyticsManager(data);
      this.stream = new StreamManager(data);
      this.eventsub = new EventSubsManager(data);
  }
  
  
  public channel(broadcaster_id: string) {
    return new ChannelsManager(this.data, broadcaster_id);
  }

  public user(user_id?: string) {
    return new UserManager(this.data, user_id);
  }

}

export default TwitchClient;
