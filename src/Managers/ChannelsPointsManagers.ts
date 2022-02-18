import EventEmitter from '../Utils/EventEmitter';

import type { createCustomRewardsParameters, getRedemptionsParameters, JSONcreateCustomRewards, JSONgetCustomRewards, JSONgetCustomRewardsRedemptions, JSONupdateCustomRewardsRedemptions } from './interfaces/Channels';
import type { clientData } from './interfaces/Global';

class ChannelPointsManager extends EventEmitter {
  private broadcaster_id: string;

  constructor(data: clientData, broadcaster_id: string) {
    super(data);

    this.broadcaster_id = broadcaster_id;
  }

  /**
   * Creates a Custom Reward on a channel.
   * @OAuth User OAuth token
   * @scope channel:manage:redemptions
   * @link https://dev.twitch.tv/docs/api/reference#create-custom-rewards
   */
  public async createCustomRewards(parameters: createCustomRewardsParameters) {
    const request = await this.postRequest(
      `/channel_points/custom_rewards?broadcaster_id=${this.broadcaster_id}`,
      parameters
    );

    const response = request as JSONcreateCustomRewards;

    return response.data;
  }

  /**
   * Updates the status of Custom Reward Redemption objects on a channel that are in the UNFULFILLED status.
   * @OAuth User OAuth token
   * @scope channel:manage:redemptions
   * @link https://dev.twitch.tv/docs/api/reference#update-custom-reward
   */
     public async updateCustomRewards(id: string, parameters: createCustomRewardsParameters) {
      const request = await this.patchRequest(`/channel_points/custom_rewards?broadcaster_id=${this.broadcaster_id}&id=${id}`,
        parameters
      );
  
      const response = request as JSONcreateCustomRewards;
  
      return response.data;
    }

  /**
   * Deletes a Custom Reward on a channel.
   *
   * The Custom Reward specified by id must have been created by the client_id attached to the OAuth token in order to be deleted. Any UNFULFILLED Custom Reward Redemptions of the deleted Custom Reward will be updated to the FULFILLED status.
   * @param id ID of the Custom Reward to delete, must match a Custom Reward on broadcaster_id’s channel.
   * @OAuth User OAuth token
   * @scope channel:manage:redemptions
   * @link https://dev.twitch.tv/docs/api/reference#delete-custom-reward
   */
  public async deleteCustomRewards(id: string) {
    const request = await this.deleteRequest(
      `/channel_points/custom_rewards?broadcaster_id=${this.broadcaster_id}&id=${id}`
    );

    return request;
  }

  /**
   * Returns a list of Custom Reward objects for the Custom Rewards on a channel.
   * @OAuth User OAuth token
   * @scope channel:manage:redemptions
   * @link https://dev.twitch.tv/docs/api/reference#get-custom-reward
   */
  public async getCustomRewards() {
    const request = await this.getRequest(`/channel_points/custom_rewards?broadcaster_id=${this.broadcaster_id}`);

    const response = request as JSONgetCustomRewards;

    return response.data;
  }

    /**
   * Returns Custom Reward Redemption objects for a Custom Reward on a channel that was created by the same client_id.
   * @OAuth User OAuth token
   * @scope channel:manage:redemptions
   * @link https://dev.twitch.tv/docs/api/reference#get-custom-reward-redemption
   */
     public async getCustomRewardsRedemption(reward_id: string, parameters?: getRedemptionsParameters) {
      const request = await this.getRequest(`/channel_points/custom_rewards/redemptions?broadcaster_id=${this.broadcaster_id}&reward_id=${reward_id}
        ${parameters?.id && `&id=${parameters.id}`}
        ${parameters?.after && `&after=${parameters.after}`}
        ${parameters?.first && `&first=${parameters.first}`}
        ${parameters?.sort && `&first=${parameters.sort}`}
        ${parameters?.status && `&first=${parameters.status}`}
        `);
  
      const response = request as JSONgetCustomRewardsRedemptions;
  
      return response;
    }

  /**
   * Updates the status of Custom Reward Redemption objects on a channel that are in the UNFULFILLED status.
   * @OAuth User OAuth token
   * @scope channel:manage:redemptions
   * @link https://dev.twitch.tv/docs/api/reference#update-redemption-status
   */
    public async updateRedemptionStatus(id: string, reward_id: string, status: "FULFILLED" | "CANCELED") {
      const request = await this.patchRequest(`/channel_points/custom_rewards/redemptions?broadcaster_id=${this.broadcaster_id}&id=${id}&reward_id=${reward_id}`, {
        status: status
      });

      const response = request as JSONupdateCustomRewardsRedemptions;

      return response;
    }
}

export default ChannelPointsManager;
