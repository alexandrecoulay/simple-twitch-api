import EventEmitter from '../Utils/EventEmitter';
import type { clientData } from './interfaces/Global';
import type { JSONstreamInfo, JSONstreamKey, streamInfoParameters } from './interfaces/Stream';

class StreamManager extends EventEmitter {
  constructor(data: clientData) {
    super(data);
  }

  /**
   * Get Stream Key
   * @OAuth User OAuth token
   * @scope channel:read:stream_key
   * @link https://dev.twitch.tv/docs/api/reference#get-stream-key
   */
  public async key(broadcaster_id: string) {
    const request = await this.getRequest(`/streams/key?broadcaster_id=${broadcaster_id}`);

    const response = request as JSONstreamKey;

    return response.data[0].stream_key;
  }

  /**
   *
   * @OAuth OAuth or App Access Token required
   * @link https://dev.twitch.tv/docs/api/reference#get-streams
   */
  public async fetch(parameters?: streamInfoParameters) {
    const request = await this.getRequest(`/streams?
            ${parameters?.after && `&after=${parameters.after}`}
            ${parameters?.before && `&before=${parameters.before}`}
            ${
              parameters?.first &&
              parameters.first < 101 &&
              parameters.first > 0 &&
              `first=${Math.trunc(parameters.first)}`
            }
            ${
              parameters?.game_id &&
              parameters.game_id.length > 0 &&
              parameters.game_id.length < 101 &&
              parameters.game_id.map(g => `&game_id=${g}`)
            }
            ${
              parameters?.user_id &&
              parameters.user_id.length > 0 &&
              parameters.user_id.length < 101 &&
              parameters.user_id.map(u => `&user_id=${u}`)
            }
            ${
              parameters?.language &&
              parameters.language.length > 0 &&
              parameters.language.length < 101 &&
              parameters.language.map(l => `&language=${l}`)
            }
            ${
              parameters?.user_login &&
              parameters.user_login.length > 0 &&
              parameters.user_login.length < 101 &&
              parameters.user_login.map(u => `&user_login=${u}`)
            }
        `);

    const response = request as JSONstreamInfo;

    return response;
  }
}

export default StreamManager;
