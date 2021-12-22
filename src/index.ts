import axios, { AxiosRequestConfig } from 'axios';
import type {
  IgetToken,
  JSONchannelsInfo,
  JSONfollowInfo,
  JSONgetUserInfo,
  JSONsearchcategoriesInfo,
  JSONstreamInfo,
  JSONuserExtensionList,
} from './interfaces';

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

export const getToken = async (client_id: string, client_secret: string, scope: string): Promise<IgetToken> => {
  const request = await axios.post(
    `https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials&scope=${scope}`,
  );
  const response = request.data as IgetToken;

  return response;
};

class TwitchClient {
  private token: string;
  protected twitch_client_id: string;

  private requestOptions: AxiosRequestConfig;

  /**
   *
   * @param {String} token Twitch token use for requests
   * @param {String} twitch_client_id The Tiwtch client ID to use
   */
  constructor(twitch_client_id: string, token: string) {
    this.token = token;
    this.twitch_client_id = twitch_client_id;

    this.requestOptions = {
      headers: {
        'client-id': `${twitch_client_id}`,
        Authorization: `Bearer ${this.token}`,
      },
    };
  }

  /**
   * Streamer Username
   * @param {String} username
   */
  public async getUserbyUsername(username: string) {
    const request = await axios.get(`${twitchbaseapiurl}/users?login=${username}`, this.requestOptions);
    const response = request.data as JSONgetUserInfo;

    return response.data;
  }

  /**
   *
   * @param {String} broadcaster_id Streamer userID
   */

  public async getUserbyID(broadcaster_id: string) {
    const request = await axios.get(`${twitchbaseapiurl}/users?id=${broadcaster_id}`, this.requestOptions);
    const response = request.data as JSONgetUserInfo;

    return response.data;
  }

  /**
   *
   * @param {String} broadcaster_id Streamer userID
   * @param {Number} limit First x follow to get | max : 100
   * @default limit 20
   */

  public async getFollowsTo(broadcaster_id: string, pagination?: { first: number; after?: string }) {
    const request = await axios.get(
      `${twitchbaseapiurl}/users/follows?${
        pagination?.first && pagination.first < 101 && `&first=${pagination.first}`
      }${pagination?.after && `&after=${pagination.after}`}&to_id=${broadcaster_id}`,
      this.requestOptions,
    );
    const response = request.data as JSONfollowInfo;

    return response;
  }

  
  /**
   *
   * @param {String} broadcaster_id Streamer userID
   * @param {Number} limit First x follow to get | max : 100
   * @default limit 20
   */

   public async getFollowsFrom(broadcaster_id: string, pagination?: { first: number; after?: string }) {
    const request = await axios.get(
      `${twitchbaseapiurl}/users/follows?${
        pagination?.first && pagination.first < 101 && `&first=${pagination.first}`
      }${pagination?.after && `&after=${pagination.after}`}&from_id=${broadcaster_id}`,
      this.requestOptions,
    );
    const response = request.data as JSONfollowInfo;

    return response;
  }

  /**
   *
   * @param {String | Number} broadcaster Streamer userID or username
   * @param {Number} limit First x follow to get | max : 100
   * @default limit 20
   */

  public async getUserStreamInfo(broadcaster: string | number, pagination?: { first: number; after?: string }) {
    const request = await axios.get(
      `${twitchbaseapiurl}/users/follows?${
        pagination?.first && pagination.first < 101 && `&first=${pagination.first}`
      }${pagination?.after && `&after=${pagination.after}`}&${
        Number(broadcaster) ? 'user_id' : 'user_login'
      }=${broadcaster}`,
      this.requestOptions,
    );
    const response = request.data as JSONstreamInfo;

    return response;
  }

  /**
* Get the channel stream key for a user.
*  @scopes
  channel:read:stream_key
*/

public async getStreamKey(broadcaster_id?: string) {
  const request = await axios.get(`${twitchbaseapiurl}/users/streams/key${broadcaster_id && `&user_id=${broadcaster_id}`}`);
  const response = request.data;

  return response.data[0].stream_key;
}

  /**
 * Get information about active extensions installed by a specified user
 * Optional scope: user:read:broadcast or user:edit:broadcast
 */

  public async getUserActiveExtensions(broadcaster_id?: string) {
    const request = await axios.get(`${twitchbaseapiurl}/users/extensions/extensions${broadcaster_id && `&user_id=${broadcaster_id}`}`);
    const response = request.data;

    return response;
  }

  public async getUserExtensions() {
    const request = await axios.get(`${twitchbaseapiurl}/users/extensions/list`);
    const response = request.data as JSONuserExtensionList;

    return response.data;
  }

  public async searchCategories(query: string, pagination?: { first: number; after?: string }) {
    const request = await axios.get(
      `${twitchbaseapiurl}/search/categories?query=${query}${
        pagination?.first && pagination.first < 101 && `&first=${pagination.first}`
      }${pagination?.after && `&after=${pagination.after}`}`,
      this.requestOptions,
    );
    const response = request.data as JSONsearchcategoriesInfo;

    return response;
  }

  public async searchChannels(query: string, live_only: boolean, pagination?: { first: number; after?: string }) {
    const request = await axios.get(
      `${twitchbaseapiurl}/search/channels?live_only=${live_only ? true : false}&query=${query}${
        pagination?.first && pagination.first < 101 && `&first=${pagination.first}`
      }${pagination?.after && `&after=${pagination.after}`}`,
      this.requestOptions,
    );
    const response = request.data as JSONchannelsInfo;

    return response;
  }

}

export default TwitchClient;
