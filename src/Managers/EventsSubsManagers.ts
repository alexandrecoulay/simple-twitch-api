import EventEmitter from '../Utils/EventEmitter';
import type {
  EventSubCreateParameters,
  EventSubGetParameters,
  JSONEventSubCreate,
  JSONEventSubGet,
  JSONEventSubWebhook,
} from './interfaces/EventsSubs';
import type { clientData } from './interfaces/Global';
import * as sub from './Services/EventSub';

class EventSubsManager extends EventEmitter {
  constructor(data: clientData) {
    super(data);
  }

  /**
   * Create EventSub Subscription
   * @OAuth Requires an app access token.
   * @scope channel:read:subscriptions
   * @link https://dev.twitch.tv/docs/api/reference#create-eventsub-subscription
   */
  public async create(parameters: EventSubCreateParameters) {
    const request = await this.postRequest('/eventsub/subscriptions', parameters);

    const response = request as JSONEventSubCreate;

    return response;
  }

  /**
   * Delete EventSub Subscription
   * @OAuth Requires an application OAuth access token
   * @link https://dev.twitch.tv/docs/api/reference#delete-eventsub-subscription
   */
  public async delete(subscription_id: string) {
    const request = await this.deleteRequest(`/eventsub/subscriptions?id=${subscription_id}`);

    return request;
  }

  /**
   * Get EventSub Subscription
   * @OAuth Requires an application OAuth access token
   * @link https://dev.twitch.tv/docs/api/reference#get-eventsub-subscriptions
   */
  public async fetch(parameters?: EventSubGetParameters) {
    const request = await this.getRequest(`/eventsub/subscriptions?
        ${parameters?.after && `&after=${parameters.after}`}
        ${parameters?.type && `&type=${parameters.type}`}
        ${parameters?.status && `&status=${parameters.status}`}
        `);

    const response = request as JSONEventSubGet;

    return response;
  }

  /**
   * Verify the twitch Eventsub signature
   */
  public verify(signature: string, request: any) {
    const message = sub.getHmacMessage(request);
    const hmac = 'sha256=' + sub.getHmac(signature, message);
    const hmacverif = sub.verifyMessage(hmac, request.headers[sub.TWITCH_MESSAGE_SIGNATURE]);

    return hmacverif;
  }

  /**
   * Get the content of the webhook
   */
  public content(request: any) {
    return request.body as JSONEventSubWebhook;
  }
}

export default EventSubsManager;
