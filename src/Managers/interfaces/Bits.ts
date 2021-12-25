import type { Tpagination } from "./Global";

type leaderboardUser = {
    "user_id": string,
    "user_login": string,
    "user_name": string,
    "rank": number,
    "score": number  
}

export type leaderboardParameters = {
    /**
     * @default 10
     * @max 100
     */
    count: number,
    period: "all" | "day" | "week" | "month" | "year",
    /**
     * ignored if period is all
     */
    started_at: string,
    user_id: string
}

type cheeermotesImagesMetadata = {
    dark: {
      animated: {
        '1': string;
        '1.5': string;
        '2': string;
        '3': string;
        '4': string;
      };
      static: {
        '1': string;
        '1.5': string;
        '2': string;
        '3': string;
        '4': string;
      };
    };
    light: {
      animated: {
        '1': string;
        '1.5': string;
        '2': string;
        '3': string;
        '4': string;
      };
      static: {
        '1': string;
        '1.5': string;
        '2': string;
        '3': string;
        '4': string;
      };
    };
  };
  
  type cheermotesMetada = {
    min_bits: string;
    id: string;
    color: string;
    images: cheeermotesImagesMetadata;
    can_cheer: boolean;
    show_in_bits_card: boolean;
  };
  
  type cheermotesInfo = {
    prefix: string;
    tiers: Array<cheermotesMetada>;
    type: 'global_first_party' | 'global_third_party' | 'channel_custom' | 'display_only' | 'sponsored';
    order: 1 | -1;
    last_updated: string;
    is_charitable: boolean;
  };

 export type extensionTransactionParameters = {
      /**
       * @max 100
       */
    id: Array<string>,
    after: string,
    /**
     * @default 20
     * @max 100
     */
    first: number
  }

type extensionTransaction = {
    "id": string,
    "timestamp": string,
    "broadcaster_id": string,
    "broadcaster_login": string,
    "broadcaster_name": string,
    "user_id": string,
    "user_login": string,
    "user_name": string,
    "product_type": "BITS_IN_EXTENSION",
    "product_data": {
      "domain": string,
      "sku": string,
      "cost": {
        "amount": number,
        "type": "bits"
      },
      "inDevelopment": boolean,
      "displayName": string,
      "expiration": string,
      "broadcast": boolean
    }
}

  export type JSONcheersMotes = {
    data: Array<cheermotesInfo>;
  };

export type JSONleaderboard = {
    data: Array<leaderboardUser>,
    date_range: {
        started_at: string,
        ended_at: string
    },
    total: number
}

export type JSONextensionTransaction = {
    data: Array<extensionTransaction>,
    pagination: Tpagination
}