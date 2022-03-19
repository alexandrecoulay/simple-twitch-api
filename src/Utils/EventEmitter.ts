import axios, { AxiosInstance } from 'axios';

import type { clientData } from '../Managers/interfaces/Global';

const twitchbaseapiurl = 'https://api.twitch.tv/helix';

class RequestEmitter {
  private instance: AxiosInstance;

  constructor(data: clientData) {
    this.instance = axios.create({
      baseURL: twitchbaseapiurl,
      headers: {
        'client-id': data.twitch_client_id,
        Authorization: `Bearer ${data.token}`,
      },
    });
  }

  protected async postRequest(url: string, data: object) {
    const request = await this.instance({
      method: 'POST',
      url: url,
      data: data,
    });

    if (request.status !== 200) throw request;
    else return request.data;
  }

  protected async patchRequest(url: string, data: object) {
    const request = await this.instance({
      method: 'PATCH',
      url: url,
      data: data,
    });

    if (request.status !== 200) throw request;
    else return request.data;
  }

  protected async getRequest(url: string) {
    const request = await this.instance({
      method: 'GET',
      url: url,
    });

    if (request.status !== 200) throw request;
    else return request.data;
  }

  protected async deleteRequest(url: string) {
    const request = await this.instance({
      method: 'DELETE',
      url: url,
    });

    if (request.status !== 204) throw request;
    else return true;
  }
}

export default RequestEmitter;
