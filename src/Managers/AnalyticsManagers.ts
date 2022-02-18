import EventEmitter from '../Utils/EventEmitter';
import type {
  ExtensionParameters,
  GamesParameters,
  JSONextentionsAnalytics,
  JSONgamesAnalytics,
} from './interfaces/Analytics';
import type { clientData } from './interfaces/Global';

class AnalyticsManager extends EventEmitter {
  constructor(data: clientData) {
    super(data);
  }

  /**
   * Get Extension Analytics
   * @OAuth OAuth token required
   * @scope analytics:read:extensions
   * @link https://dev.twitch.tv/docs/api/reference#get-extension-analytics
   */
  public async extensions(parameters?: ExtensionParameters) {
    const request = await this.getRequest(`/analytics/extensions?
            ${parameters?.after && `&after=${parameters?.after}`}
            ${parameters?.ended_at && `&ended_at=${parameters?.ended_at}`}   
            ${parameters?.extension_id && `&extension_id=${parameters?.extension_id}`}
            ${parameters?.first && parameters.first < 101 && `&first=${Math.trunc(parameters?.first)}`}
        `);

    const response = request as JSONextentionsAnalytics;

    return response;
  }

  /**
   * Get Extension Analytics
   *  @OAuth OAuth token required
   *  @scope analytics:read:games
   *  @link https://dev.twitch.tv/docs/api/reference#get-game-analytics
   */
  public async games(parameters?: GamesParameters) {
    const request = await this.getRequest(`/analytics/extensions?
            ${parameters?.after && `&after=${parameters?.after}`}
            ${parameters?.ended_at && `&ended_at=${parameters?.ended_at}`}   
            ${parameters?.game_id && `&extension_id=${parameters?.game_id}`}
            ${parameters?.first && parameters.first < 101 && `&first=${Math.trunc(parameters?.first)}`}
        `);

    const response = request as JSONgamesAnalytics;

    return response;
  }
}

export default AnalyticsManager;
