export interface IgetToken {
  access_token: string;
  expires_in: number;
  scope: Array<string>;
  token_type: string;
}

type pagination = {
  cursor: string;
};

type getUserInfo = {
  broadcaster_type: 'partner' | 'affiliate' | '';
  description: string;
  display_name: string;
  id: string;
  login: string;
  offline_image_url: string;
  profile_image_url: string;
  type: 'staff' | 'admin' | 'global_mod' | '';
  view_count: string;
  /**
   * @requires user:read:email scope
   */
  email: string;
  created_at: string;
};

type channelInfo = {
  broadcaster_language: string;
  broadcaster_login: string;
  display_name: string;
  game_id: string;
  game_name: string;
  id: string;
  is_live: boolean;
  tags_ids: Array<string>;
  thumbnail_url: string;
  title: string;
  started_at: string;
};

type followInfo = {
  from_id: string;
  from_login: string;
  from_name: string;
  to_id: string;
  to_name: string;
  followed_at: string;
};

type categoriesInfo = {
  id: string;
  name: string;
  box_art_url: string;
};

type streamInfo = {
  id: string;
  user_id: string;
  user_login: string;
  user_name: string;
  game_id: string;
  game_name: string;
  type: 'live' | '';
  title: string;
  viewer_count: number;
  started_at: string;
  language: string;
  thumbnail_url: string;
  tag_ids: Array<string>;
  is_mature: boolean;
};

type extensionListInfo = {
  id: string;
  version: string;
  name: string;
  can_activate: boolean;
  type: Array<string>;
};

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

type getChannelInfo = {
  broadcaster_id: string;
  broadcaster_login: string;
  broadcaster_name: string;
  broadcaster_language: string;
  game_id: string;
  game_name: string;
  title: string;
  delay: number;
};

type bitsLeaderboardInfo = {
  user_id: string;
  user_login: string;
  user_name: string;
  rank: number;
  score: number;
};

export type JSONgetUserInfo = {
  data: Array<getUserInfo>;
};

export type JSONfollowInfo = {
  total: number;
  data: Array<followInfo>;
  pagination: pagination;
};

export type JSONsearchcategoriesInfo = {
  data: Array<categoriesInfo>;
  pagination: pagination;
};

export type JSONstreamInfo = {
  data: Array<streamInfo>;
  pagination: pagination;
};

export type JSONchannelsInfo = {
  data: Array<channelInfo>;
  pagination: pagination;
};

export type JSONuserExtensionList = {
  data: Array<extensionListInfo>;
};

export type JSONcheersMotes = {
  data: Array<cheermotesInfo>;
};

export type JSONbitsLeaderboard = {
  data: Array<bitsLeaderboardInfo>;
  date_range: {
    started_at: string;
    ended_at: string;
  };
  total: number;
};

export type JSONgetChannel = {
  data: Array<getChannelInfo>;
};
