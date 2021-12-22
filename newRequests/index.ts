import axios, { AxiosInstance } from 'axios';
import type { IgetToken, JSONstartCommercial, startCommercialParameters } from './interfaces';

const twitchbaseapiurl = 'https://api.twitch.tv/helix';

/**
 * To get the access token for each connection with the API
 *
 * @param {string} SCOPE join all scopes with a + https://dev.twitch.tv/docs/authentication#scopes
 * @example
 * getToken('CLIENT_ID', 'CLIENT_SECRET', 'user:read:email').then(token => {
 *  console.log(token);
 * });
 */

export const getToken = async (client_id: string, client_secret: string, scope: string) => {
  const request = await axios.post(
    `https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials&scope=${scope}`
  );
  const response = request.data as IgetToken;

  return response;
};

class TwitchClient {
  private token: string;
  private twitch_client_id: string;
  private instance: AxiosInstance;

  /**
   *
   * @param {String} token Twitch token use for requests
   * @param {String} twitch_client_id The Tiwtch client ID to use
   */
  constructor(twitch_client_id: string, token: string) {
    this.token = token;
    this.twitch_client_id = twitch_client_id;

    this.instance = axios.create({
      baseURL: twitchbaseapiurl,
      headers: {
        'client-id': this.twitch_client_id,
        Authorization: `Bearer ${this.token}`
      }
    });
  }

  private async getRequest(url: string) {
    const request = await this.instance({
      method: 'GET',
      url: url
    });

    if (request.status !== 200) throw request;
    else return request.data;
  }

  private async postRequest(url: string, data: any) {
    const request = await this.instance({
      method: 'POST',
      url: url,
      data: data
    });

    if (request.status !== 200) throw request;
    else return request.data;
  }

  private async patchRequest(url: string, data: any) {
    const request = await this.instance({
      method: 'PATCH',
      url: url,
      data: data
    });

    if (request.status !== 200) throw request;
    else return request.data;
  }

  private async putRequest(url: string, data: any) {
    const request = await this.instance({
      method: 'PUT',
      url: url,
      data: data
    });

    if (request.status !== 200) throw request;
    else return request.data;
  }

  /**
   * @link https://dev.twitch.tv/docs/api/reference#start-commercial
   * @authentication
   * OAuth Token required
   * @scopes
   * channel:edit:commercial
   */
  public async startCommercial(parameters: startCommercialParameters) {
    const request = await this.postRequest('/channels/commercial', {
      broadcaster_id: parameters.broadcaster_id,
      length: parameters.lenght
    });

    return request as JSONstartCommercial;
  }

  /**
   * @link https://dev.twitch.tv/docs/api/reference#get-extension-analytics
   * @authentication
   * OAuth Token required
   * @scopes
   * analytics:read:extensions
   */

  /**
   * @link https://dev.twitch.tv/docs/api/reference#get-game-analytics
   * @authentication
   * OAuth Token required
   * @scopes
   * analytics:read:games
   */

  /**
   * @link https://dev.twitch.tv/docs/api/reference#get-bits-leaderboard
   * @authentication
   * OAuth Token required
   * @scopes
   * bits:read
   * @authentication
   * OAuth Token required
   */

  /**
   * @link https://dev.twitch.tv/docs/api/reference#get-cheermotes
   * @authentication
   * OAuth or App Access Token required.
   * @scopes
   *
   */

  /**
   * @link https://dev.twitch.tv/docs/api/reference#get-extension-transactions
   * @authentication
   * OAuth Token required
   * @scopes
   *
   */

  /**
   * @link https://dev.twitch.tv/docs/api/reference#get-channel-information
   * @authentication
   * Valid user token or app access token.
   * @scopes
   *
   */

  /**
   * @link https://dev.twitch.tv/docs/api/reference#modify-channel-information
   * @authentication
   * OAuth Token required
   * @scopes
   * channel:manage:broadcast
   */

  /**
   * @link https://dev.twitch.tv/docs/api/reference#get-channel-editors
   * @authentication
   * OAuth user token required
   * @scopes
   * channel:read:editors
   */
}

export default TwitchClient;
