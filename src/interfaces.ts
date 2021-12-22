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
