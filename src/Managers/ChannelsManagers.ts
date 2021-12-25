import EventEmitter from '../Utils/EventEmitter';

import CommercialManager from './CommercialManagers';
import type { ChannelModifyParameters, JSONChannelInformations, JSONeditorsInformations, JSONSearchChannel, searchParameters } from './interfaces/Channels';
import type { clientData } from './interfaces/Global';

class ChannelsManager extends EventEmitter {
  public commercials: CommercialManager;

  private broadcaster_id: string;

  constructor(data: clientData, broadcaster_id: string) {
    super(data);

    this.commercials = new CommercialManager(data, broadcaster_id);
    this.broadcaster_id = broadcaster_id;
  }

  /**
   * Get channel informations
   * @OAuth Valid user token or app access token
   * @link https://dev.twitch.tv/docs/api/reference#get-channel-information
   */
  public async fetch(broadcaster_id?: string) {
    const request = await this.getRequest(`/channels?broadcaster_id=${broadcaster_id ?? this.broadcaster_id}`);

    return request as JSONChannelInformations;
  }

  /**
   * Modify channel information
   * @OAuth OAuth Token required
   * @scope channel:manage:broadcast
   * @link https://dev.twitch.tv/docs/api/reference#modify-channel-information
   */
  public async patch(parameters: ChannelModifyParameters) {
    const request = await this.patchRequest(
      `/channels?broadcaster_id=${parameters?.broadcaster_id ?? this.broadcaster_id}`,
      {
        title: parameters?.title,
        delay: parameters?.delay,
        game_id: parameters?.game_id,
        broadcaster_language: parameters?.broadcaster_language
      }
    );

    return request;
  }

  /**
   * Get channel editors
   * @OAuth OAuth user token required
   * @scope channel:read:editors
   */
  public async editors(broadcaster_id?: string) {
    const request = await this.getRequest(`/channels/editors?broadcaster_id=${broadcaster_id ?? this.broadcaster_id}`);

    const response = request as JSONeditorsInformations;

    return response.data;
  }

  /**
   * Search Channels
   * @OAuth OAuth or App Access Token required
   * @link https://dev.twitch.tv/docs/api/reference#search-channels
   */

  public async search(query: string, parameters?: searchParameters) {
    const request = await this.getRequest(`/search/channels?query=${query}
    ${parameters?.after && `&after=${parameters.after}`}
    ${
      parameters?.first &&
      parameters.first > 0 &&
      parameters.first < 101 &&
      `&first=${parameters.first}`
    }
    ${parameters?.live_only && `&live_only=${parameters.live_only}`}
    `)

    const response = request as JSONSearchChannel;

    return response;
  }
}

export default ChannelsManager;
