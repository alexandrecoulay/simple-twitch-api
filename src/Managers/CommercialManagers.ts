import EventEmitter from '../Utils/EventEmitter';
import type { JSONstartCommercial } from './interfaces/Commercials';
import type { clientData } from './interfaces/Global';

class CommercialManager extends EventEmitter {
  private broadcaster_id: string;

  constructor(data: clientData, broadcaster_id: string) {
    super(data);

    this.broadcaster_id = broadcaster_id;
  }
  /**
   * Start Commercial
   * @OAuth OAuth token required
   * @scope channel:edit:commercial
   * @link https://dev.twitch.tv/docs/api/reference#start-commercial
   */

  public async start(length: 30 | 60 | 90 | 120 | 150 | 180, broadcaster_id?: string) {
    const request = await this.postRequest('/channels/commercial', {
      broadcaster_id: broadcaster_id ?? this.broadcaster_id,
      length: length
    });

    const response = request as JSONstartCommercial;

    return response.data[0];
  }
}

export default CommercialManager;
