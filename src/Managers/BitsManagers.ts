import EventEmitter from '../Utils/EventEmitter';
import type {
  extensionTransactionParameters,
  JSONcheersMotes,
  JSONextensionTransaction,
  JSONleaderboard,
  leaderboardParameters
} from './interfaces/Bits';
import type { clientData } from './interfaces/Global';

class BitsManager extends EventEmitter {
  constructor(data: clientData) {
    super(data);
  }

  /**
   * Get Bits Leaderboard
   * @OAuth OAuth token required
   * @scope bits:read
   * @link https://dev.twitch.tv/docs/api/reference#get-bits-leaderboard
   */
  public async leaderboard(parameters?: leaderboardParameters) {
    const request = await this.getRequest(`/channels/commercial?
            ${parameters?.count && Math.trunc(parameters.count) < 101 && `&count=${Math.trunc(parameters.count)}`}
            ${parameters?.period && `&period=${parameters.period}`}
            ${parameters?.started_at && `&started_at=${parameters.started_at}`}
            ${parameters?.user_id && `&user_id=${parameters.user_id}`}
        `);

    const response = request as JSONleaderboard;

    return response;
  }

  /**
   * Get Cheermotes
   * @OAuth OAuth or App Access Token required
   * @link https://dev.twitch.tv/docs/api/reference#get-cheermotes
   */
  public async cheermotes(broadcaster_id?: string) {
    const request = await this.getRequest(`/bits/cheermotes?
        ${broadcaster_id && `broadcaster_id=${broadcaster_id}`}
        `);

    const response = request as JSONcheersMotes;

    return response;
  }

  /**
   * Get Extension Transactions
   * @OAuth App Access Token
   * @link https://dev.twitch.tv/docs/api/reference#get-extension-transactions
   */
  public async transaction(extension_id: string, parameters: extensionTransactionParameters) {
    const request = await this.getRequest(`/extensions/transactions?
            extension_id=${extension_id}
            ${parameters?.after && `&after=${parameters.after}`}
            ${parameters?.first && `&first=${parameters.first}`}
            ${
              parameters?.id &&
              parameters.id.length > 0 &&
              parameters.id.length < 101 &&
              `${parameters.id.map((i, index) => `${index < 100 && `&id=${i}`}`)}`
            }
            `);

    const response = request as JSONextensionTransaction;

    return response;
  }
}

export default BitsManager;
