import type LANGUAGES from "../../Utils/ISO-369-1";
import type { Tpagination } from "./Global";

type ChannelInformations = {
    "broadcaster_id": string,
    "broadcaster_login": string,
    "broadcaster_name": string,
    "broadcaster_language": string,
    "game_id": string,
    "game_name": string
    "title": string
    "delay": number
}

type channelEditors = {
    user_id: string,
    user_name: string,
    created_at: string
}

type searchChannel = {
    "broadcaster_language": string,
    "broadcaster_login": string,
    "display_name": string,
    "game_id": string,
    "game_name": string,
    "id": string,
    "is_live": boolean,
    "tags_ids": Array<string>,
    "thumbnail_url": string,
    "title": string,
    "started_at": string
}

type createCustomRewards = {
    "broadcaster_name": string,
    "broadcaster_login": string,
    "broadcaster_id": string,
    "id": string,
    "image": string,
    "background_color": string,
    "is_enabled": boolean,
    "cost": number,
    "title": string,
    "prompt": string,
    "is_user_input_required": boolean,
    "max_per_stream_setting": {
      "is_enabled": boolean,
      "max_per_stream": number
    },
    "max_per_user_per_stream_setting": {
      "is_enabled": boolean,
      "max_per_user_per_stream": number
    },
    "global_cooldown_setting": {
      "is_enabled": boolean,
      "global_cooldown_seconds": number
    },
    "is_paused": boolean,
    "is_in_stock": boolean,
    "default_image": {
      "url_1x": string,
      "url_2x": string,
      "url_4x": string
    },
    "should_redemptions_skip_request_queue": boolean,
    "redemptions_redeemed_current_stream": string,
    "cooldown_expires_at": string
}

type getCustomRewardsRedemptions = {
    "broadcaster_name": string,
    "broadcaster_login": string,
    "broadcaster_id": string,
    "id": string,
    "user_id": string,
    "user_name": string,
    "user_input": string,
    "status": "UNFULFILLED" | "FULFILLED" | "CANCELED",
    "redeemed_at": string,
    "reward": {
      "id": string,
      "title": string,
      "prompt": string,
      "cost": number
    }
}

type updateCustomRewardsRedemptions = {
    "broadcaster_name": string,
    "broadcaster_login": string,
    "broadcaster_id": string,
    "id": string,
    "image": string,
    "background_color": string,
    "is_enabled": boolean,
    "cost": number,
    "title": string,
    "prompt": string,
    "is_user_input_required": boolean,
    "max_per_stream_setting": {
      "is_enabled": boolean,
      "max_per_stream": number
    },
    "max_per_user_per_stream_setting": {
      "is_enabled": boolean,
      "max_per_user_per_stream": number
    },
    "global_cooldown_setting": {
      "is_enabled": boolean,
      "global_cooldown_seconds": number
    },
    "is_paused": boolean,
    "is_in_stock": boolean,
    "default_image": {
      "url_1x": string,
      "url_2x": string,
      "url_4x": string
    },
    "should_redemptions_skip_request_queue": boolean,
    "redemptions_redeemed_current_stream": string,
    "cooldown_expires_at": string
}

type getCustomRewards = createCustomRewards;

export type createCustomRewardsParameters = {
    title?: string,
    cost?: number,
    prompt?: string,
    is_enabled?: boolean,
    /**
     * Format: Hex with # prefix. Example: #00E5CB
     */
    background_color?: string,
    is_user_input_required?: boolean,
    is_max_per_stream_enabled?:	boolean,
    max_per_stream?: number,
    is_max_per_user_per_stream_enabled?: boolean,
    max_per_user_per_stream?: number,
    is_global_cooldown_enabled?: boolean,
    should_redemptions_skip_request_queue?:	boolean
}

export type getRedemptionsParameters = {
    id?: string,
    status?: string,
    sort?: string,
    after?: string,
    first?: string   
}

export type searchParameters = {
    /**
     * @max 100
     * @default 20
     */
    first?: number,
    after?: string,
    /**
     * @default false
     */
    live_only?: boolean
}
export type ChannelModifyParameters = {
    broadcaster_id?: string,
    game_id?: string,
    /**
     * ISO-369-1 format
     */
    broadcaster_language?: LANGUAGES,
    title?: string,
    delay?: number
}

export type JSONChannelInformations = {
    data: Array<ChannelInformations>
}

export type JSONeditorsInformations = {
    data: Array<channelEditors>
}

export type JSONSearchChannel = {
    data: Array<searchChannel>,
    pagination: Tpagination
}

export type JSONcreateCustomRewards = {
    data: Array<createCustomRewards>
}

export type JSONgetCustomRewards = {
    data: Array<getCustomRewards>
};

export type JSONgetCustomRewardsRedemptions = {
    data: Array<getCustomRewardsRedemptions>,
    pagination?: Tpagination
}

export type JSONupdateCustomRewardsRedemptions = {
    data: Array<updateCustomRewardsRedemptions>
};