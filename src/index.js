'use strict';

const request = require('node-fetch');

/**
 * To get the access token for each connection with the API
 *
 * @param {string} CLIENT_ID
 * @param {string} CLIENT_SECRET
 * @param {string} SCOPE join all scopes with a + https://dev.twitch.tv/docs/authentication#scopes
 * @returns {Array}
 * @example
 * Twitch.getToken('CLIENT_ID', 'CLIENT_SECRET', 'user:read:email').then(token => {
 *  console.log(token);
 * });
 */

export const getToken = async (CLIENT_ID, CLIENT_SECRET, SCOPE) => {
  let token_request = {
    'method': 'POST'
  };
  let request = await fetch("https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials&scope=${SCOPE}", token_request);
  let response = request.json();
  return response;
}

/**
 * Get information about one Twitch user.
 *
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} username Broadcaster userusername
 * @returns {Array}
 * @example
 * Twitch.getUserInfo("alex_off", token).then(info => {
 *      let result = info.data[0];
 *      console.log(result)
 *  });
 */

export const getUserInfo = async (token, client_id, username) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };
  let request = await fetch(`https://api.twitch.tv/helix/users?login=${username}`, data);
  let response = request.json();
  return response;
}

/**
 * Get Cheermotes info
 *
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} broadcaster_id Broadcaster ID (optional)
 * @returns {Array}
 */

export const getCheermotes = async (token, client_id, broadcaster_id = undefined) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };
  url = broadcaster_id ? `https://api.twitch.tv/helix/bits/cheermotes?broadcaster_id=${broadcaster_id}` : `https://api.twitch.tv/helix/bits/cheermotes`
  let request = await fetch(url, data);
  let response = request.json();
  return response;
}

/**
 * Get Bits Leaderboard (all optional except the token)
 * Required scope : bits:read
 *
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} broadcaster_id Broadcaster ID
 * @returns {Array}
 */

export const getBitsLeaderboard = async (token, client_id, broadcaster_id) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };
  let request = await fetch(`https://api.twitch.tv/helix/bits/leaderboard?user_id${broadcaster_id}`, data);
  let response = request.json();
  return response;
}

/**
 * Get Game analytics (all optional except the token and client_id)
 * Require scope : analytics:read:games
 *
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} game_id Game ID
 * @param {Number} to_return Number of objects to return (default 100)
 * @returns {Array}
 */

 export const getGameAnalytics = async (token, client_id, game_id, to_return = 100) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };
  let request = await fetch(`https://api.twitch.tv/helix/analytics/games?game_id=${game_id}&first=${to_return}`, data);
  let response = request.json();
  return response;
}

/**
 * Get the list of Extension Transactions for a given extension.
 *
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} extension_id ID of the extension to list 
 * @returns {Array}
 */

export const getExtensionTransactions = async (token, client_id, extension_id) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };
  let request = await fetch(`https://api.twitch.tv/helix/extensions/transactions?extension_id=${extension_id}`, data);
  let response = request.json();
  return response;
}

/**
 * Get clip information by clip ID (one only), broadcaster ID (one only), or game ID (one only).
 *
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} id ID of the clip or broadcaster (if first)
 * @param {number} first Number of objects to return (default 100)
 * @returns {Array}
 */

 export const getClips = async (token, client_id, id, first = 100) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };

  let request = await fetch(`https://api.twitch.tv/helix/clips?broadcaster_id=${id}&first=${first}`, data);
  let response = request.json();
  return response;
}

/**
 * Get a list of entitlements for a given organization that have been granted to a game, user, or both.
 * @deprecated Not tested
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} id Broadcaster ID (get with : getUserInfo) 
 * @returns {Array}
 */

 export const getDropsEntitlements = async (token, client_id, user_id, game_id) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };

  let request = await fetch(`https://api.twitch.tv/helix/entitlements/drops?user_id=${user_id}&game_id=${game_id}`, data);
  let response = request.json();
  return response;
}

/**
 * Get games sorted by number of current viewers on Twitch, most popular first.
 * Not tested
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {number} first Number of objects to return (default 100)
 * @returns {Array}
 */

 export const getTopGames = async (token, client_id, first = 100) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };

  let request = await fetch(`https://api.twitch.tv/helix/games/top?first=${first}`, data);
  let response = request.json();
  return response;
}

/**
 * Get game information by game ID or name.
 * 
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} game_id Game ID
 * @returns {Array}
 */

 export const getGames = async (token, client_id, game_id) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };

  let request = await fetch(`https://api.twitch.tv/helix/games?id=${game_id}`, data);
  let response = request.json();
  return response;
}

/**
 * Get the information of the most recent Hype Train of the given channel ID. 
 * Require scope: channel:read:hype_train
 * 
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} broadcaster_id Broadcaster ID
 * @returns {Array}
 */

 export const getHypeTrainEvents = async (token, client_id, broadcaster_id) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };

  let request = await fetch(`https://api.twitch.tv/helix/hypetrain/events?broadcaster_id=${broadcaster_id}`, data);
  let response = request.json();
  return response;
}

/**
 * Returns all banned and timed-out users in a channel.
 * Require scope: moderation:read
 * 
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} broadcaster_id Broadcaster ID
 * @returns {Array}
 */

 export const getBanned = async (token, client_id, broadcaster_id) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };

  let request = await fetch(`https://api.twitch.tv/helix/moderation/banned?broadcaster_id=${broadcaster_id}`, data);
  let response = request.json();
  return response;
}

/**
 * Returns all user bans and un-bans in a channel.
 * Require scope: moderation:read
 * 
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} broadcaster_id Broadcaster ID
 * @returns {Array}
 */


export const getBannedEvents = async (token, client_id, broadcaster_id) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };

  let request = await fetch(`https://api.twitch.tv/helix/moderation/banned/events?broadcaster_id=${broadcaster_id}`, data);
  let response = request.json();
  return response;
}

/**
 * Returns all moderators in a channel.
 * Require scope: moderation:read
 * 
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} broadcaster_id Broadcaster ID
 * @returns {Array}
 */

 export const getModerators = async (token, client_id, broadcaster_id) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };

  let request = await fetch(`https://api.twitch.tv/helix/moderation/moderators?broadcaster_id=${broadcaster_id}`, data);
  let response = request.json();
  return response;
}

/**
 * Returns a list of moderators or users added and removed as moderators from a channel.
 * Require scope: moderation:read
 * 
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} broadcaster_id Broadcaster ID
 * @returns {Array}
 */

export const getmoderatorEvents = async (token, client_id, broadcaster_id) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };

  let request = await fetch(`https://api.twitch.tv/helix/moderation/moderators/events?broadcaster_id=${broadcaster_id}`, data);
  let response = request.json();
  return response;
}

/**
 * Returns a list of games or categories that match the query via name either entirely or partially.
 *
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} name Categorie name
 * @returns {Array}
 */

export const searchCategories = async (token, client_id, name) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };

  let request = await fetch(`https://api.twitch.tv/helix/search/categories?query=${name}`, data);
  let response = request.json();
  return response;
}

/**
* Returns a list of channels (users who have streamed within the past 6 months) 
*
* @param {string} token access_token
* @param {string} client_id App client ID
* @param {string} name Broadcaster name 
* @returns {Array}
*/

export const searchChannels = async (token, client_id, name) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };

  let request = await fetch(`https://api.twitch.tv/helix/search/channels?query=${name}`, data);
  let response = request.json();
  return response;
}

/**
 * Get information about active streams.
 *
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} broadcaster_id Broadcaster ID (optional) 
 * @returns {Array}
 */

export const Getstream = async (token, client_id, broadcaster_id = null) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };
  let url = broadcaster_id ? `https://api.twitch.tv/helix/streams?user_id=${broadcaster_id}` : "https://api.twitch.tv/helix/streams"
  let request = await fetch(url, data);
  let response = request.json();
  return response;
}

/**
* Get the channel stream key for a user.
* Required scope: channel:read:stream_key
*
* @param {string} token access_token
* @param {string} client_id App client ID
* @param {string} broadcaster_id Broadcaster ID 
* @returns {Array}
*/

export const GetstreamKey = async (token, client_id, broadcaster_id) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };
  let request = await fetch(`https://api.twitch.tv/helix/streams/key?broadcaster_id=${broadcaster_id}`, data);
  let response = request.json();
  return response;
}

/**
 * Get a video informations
 * Required scope: user:read:broadcast
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} video_id Video ID
 * @returns {Array}
 */

 export const getVideoInformations = async (token, client_id, video_id) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };
  let request = await fetch(`https://api.twitch.tv/helix/videos?id=${video_id}`, data);
  let response = request.json();
  return response;
}

/**
 * Get all videos of broadcaster ordered by recency
 * Required scope: user:read:broadcast
 * 
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} broadcaster_id Broadcaster ID (optional) 
 * @returns {Array}
 */

 export const getVideos = async (token, client_id, broadcaster_id) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };
  let request = await fetch(`https://api.twitch.tv/helix/streams/markers?user_id=${broadcaster_id}`, data);
  let response = request.json();
  return response;
}

/**
 * Get channel information for users.
 *
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} broadcaster_id Broadcaster ID (get with : getUserInfo) 
 * @returns {Array}
 */

 export const getChannel = async (token, client_id, broadcaster_id) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };
  let request = await fetch(`https://api.twitch.tv/helix/channels?broadcaster_id=${broadcaster_id}`, data);
  let response = request.json();
  return response;
}

/**
 * Get channel information for users.
 * Required scope: channel:read:subscriptions
 * 
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} broadcaster_id Broadcaster ID (get with : getUserInfo) 
 * @returns {Array}
 */

 export const getBroadcasterSubscriptions = async (token, client_id, broadcaster_id) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };
  let request = await fetch(`https://api.twitch.tv/helix/subscriptions?broadcaster_id=${broadcaster_id}`, data);
  let response = request.json();
  return response;
}

/**
 * Get the list of all stream tags defined by Twitch, optionally filtered by tag ID(s).
 * 
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {Number} first Number of objects to return (default 100)
 * @returns {Array}
 */

export const getAllStreamTags = async (token, client_id, first = 100) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };
  let request = await fetch(`https://api.twitch.tv/helix/tags/streams?first=${first}`, data);
  let response = request.json();
  return response;
}

/**
 * Get the list of tags for a specified stream (channel).
 * 
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} broadcaster_id Broadcaster ID (get with : getUserInfo)
 * @param {Number} first Number of objects to return (default 100)
 * @returns {Array}
 */

 export const GetstreamTags = async (token, client_id, broadcaster_id, first = 100) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };
  let request = await fetch(`https://api.twitch.tv/helix/tags/streams?first=${first}&broadcaster_id=${broadcaster_id}`, data);
  let response = request.json();
  return response;
}

/**
 * Get information about users who are being followed
 * 
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} broadcaster_id Broadcaster ID (get with : getUserInfo) 
 * @param {Number} first Number of objects to return (default 100)
 * @returns {Array}
 */

 export const getFollowsFrom = async (token, client_id, broadcaster_id, first = 100) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };
  let request = await fetch(`https://api.twitch.tv/helix/users/follows?first=${first}&from_id=${broadcaster_id}`, data);
  let response = request.json();
  return response;
}

/**
 * Get information about users who are following
 * 
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} broadcaster_id Broadcaster ID (get with : getUserInfo) 
 * @param {Number} first Number of objects to return (default 100)
 * @returns {Array}
 */

 export const getFollowsTo = async (token, client_id, broadcaster_id, first = 100) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };
  let request = await fetch(`https://api.twitch.tv/helix/users/follows?first=${first}&to_id=${broadcaster_id}`, data);
  let response = request.json();
  return response;
}

/**
 * Get information about active extensions installed by a specified user
 * Optional scope: user:read:broadcast or user:edit:broadcast
 * @param {string} token access_token
 * @param {string} client_id App client ID
 * @param {string} broadcaster_id Broadcaster ID (get with : getUserInfo) 
 * @returns {Array}
 */

 export const getFollowsTo = async (token, client_id, broadcaster_id) => {
  const data = {
    'method': 'GET',
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`
    }
  };
  let request = await fetch(`https://api.twitch.tv/helix/users/extensions?user_id=${broadcaster_id}`, data);
  let response = request.json();
  return response;
}