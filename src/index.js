'use strict';

const request = require('request');

/**
 * To get the access token for each connection with the API
 *
 * @param {string} CLIENT_ID
 * @param {string} CLIENT_SECRET
 * @param {string} SCOPE join all scopes with a + https://dev.twitch.tv/docs/authentication#scopes
 * @returns {Array}
 * @example
 * API.getToken('CLIENT_ID', 'CLIENT_SECRET', 'user:read:email').then(token => {
 *  console.log(token);
 * });
 */

exports.getToken = (CLIENT_ID, CLIENT_SECRET, SCOPE) => {
    let token_request = {
        'method': 'POST',
        'url': `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials&scope=${SCOPE}`,
        'headers': {
          'Cookie': 'unique_id=aa555924100f05f0; unique_id_durable=aa555924100f05f0; twitch.lohp.countryCode=FR'
        }
      };
      return new Promise((resolve, reject) => {
        request(token_request, function (error, response, body) {
          if (error){
            reject(error);
          }
          const token = JSON.parse(body);
          resolve(token); 
        })
    })
}

/**
 * Usefull to get a Broadcaster ID
 *
 * @param {string} token access_token
 * @param {string} username Broadcaster userusername
 * @returns {Array}
 * @example
 * Twitch.getUserInfo("alex_off", token).then(info => {
 *      let result = info.data[0];
 *      console.log(result)
 *  });
 */

exports.getUserInfo = (token, client_id, username) => {
  let getid = {
    'method': 'GET',
    'url': `https://api.twitch.tv/helix/users?login=${username}`,
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`,
      'Cookie': 'unique_id=aa555924100f05f0; unique_id_durable=aa555924100f05f0; twitch.lohp.countryCode=FR'
    }
  };
  return new Promise((resolve, reject) => {
    request(getid, function (error, response, body) {
      if (error){
        reject(error);
      }
      const result = JSON.parse(body);
      resolve(result); 
    });
  })
}

/**
 * Return Cheermotes info
 *
 * @param {string} token access_token
 * @param {string} broadcaster_id Broadcaster ID (optional)
 * @returns {Array}
 */

exports.getCheermotes = (token, client_id, broadcaster_id) => {
  let getCheermotes;
  if(broadcaster_id != undefined){
    getCheermotes = {
      'method': 'GET',
      'url': `https://api.twitch.tv/helix/bits/cheermotes?broadcaster_id=${broadcaster_id}`,
      'headers': {
        'client-id': `${client_id}`,
        'Authorization': `Bearer ${token}`,
        'Cookie': 'unique_id=aa555924100f05f0; unique_id_durable=aa555924100f05f0; twitch.lohp.countryCode=FR'
      }
    };
  }else{
    getCheermotes = {
      'method': 'GET',
      'url': `https://api.twitch.tv/helix/bits/cheermotes`,
      'headers': {
        'client-id': `${client_id}`,
        'Authorization': `Bearer ${token}`,
        'Cookie': 'unique_id=aa555924100f05f0; unique_id_durable=aa555924100f05f0; twitch.lohp.countryCode=FR'
      }
    };
  }
    return new Promise((resolve, reject) => {
      request(getCheermotes, function (error, response, body) {
        if (error){
          reject(error);
        }
        const result = JSON.parse(body);
        resolve(result); 
    });
  })
}

/**
 * Return Bits Leaderboard (all optional except the token)
 * Require scope : bits:read
 *
 * @param {string} token access_token
 * @param {number} count number of result to return (max 100)
 * @param {string} period day/week/month/year/all
 * @param {string} started_at timestamp (ignored if period is all)
 * @param {string} user_id Broadcaster ID
 * @returns {Array}
 * @example
 * let Twitch = require('simple-twitch-api');
 * const { CLIENT_ID, CLIENT_SECRET } = require("./index.json");
 * const SCOPE = "bits:read";
 *Twitch.getToken(CLIENT_ID, CLIENT_SECRET, SCOPE).then(async result => {
 *  let access_token = result.access_token;
 *  console.log(access_token); 
 *  let user = await Twitch.getUserInfo(access_token, CLIENT_ID , "alex_off");
 *  let user_id = user.data[0].id;
 *   console.log(user_id);
 * });
 */

exports.getBitsLeaderboard = (token, client_id, count, period, started_at, user_id) => {
  let url = [];
  if(count != undefined) url.push("count="+count)
  if(period != undefined) url.push("period="+period)
  if(started_at != undefined) url.push("started_at="+started_at)
  if(user_id != undefined) url.push("user_id="+user_id) 
  let bitsleaderboard = {
    'method': 'GET',
    'url': `https://api.twitch.tv/helix/bits/leaderboard?${url.join("&")}`,
    'headers': {
      'client-id': `${client_id}`,
      'Authorization': `Bearer ${token}`,
      'Cookie': 'unique_id=aa555924100f05f0; unique_id_durable=aa555924100f05f0; twitch.lohp.countryCode=FR'
    }
  };
  return new Promise((resolve, reject) => {
    request(bitsleaderboard, function (error, response, body) {
      if (error){
        reject(error);
      }
      const result = JSON.parse(body);
      resolve(result); 
    });
  })
}


/**
 * Return a channel informations
 *
 * @param {string} token access_token
 * @param {string} id Broadcaster ID (get with : getUserInfo) 
 * @returns {Array}
 */

exports.getChannel = (token, client_id, id) => {
    let getchannel = {
        'method': 'GET',
        'url': `https://api.twitch.tv/helix/channels?broadcaster_id=${id}`,
        'headers': {
          'client-id': `${client_id}`,
          'Authorization': `Bearer ${token}`,
          'Cookie': 'unique_id=aa555924100f05f0; unique_id_durable=aa555924100f05f0; twitch.lohp.countryCode=FR'
        }
      };
      return new Promise((resolve, reject) => {
        request(getchannel, function (error, response, body) {
          if (error){
            reject(error);
          }
          const result = JSON.parse(body);
          resolve(result); 
        });
      })
}

/**
 * Return a channel informations
 *
 * @param {string} token access_token
 * @param {string} id Broadcaster ID (get with : getUserInfo) 
 * @returns {Array}
 */

exports.getStream = (token, client_id, id) => {
    let getstream = {
        'method': 'GET',
        'url': `https://api.twitch.tv/helix/streams?user_id=${id}`,
        'headers': {
          'client-id': `${client_id}`,
          'Authorization': `Bearer ${token}`,
          'Cookie': 'unique_id=aa555924100f05f0; unique_id_durable=aa555924100f05f0; twitch.lohp.countryCode=FR'
        }
      };
      return new Promise((resolve, reject) => {
        request(getstream, function (error, response, body) {
          if (error){
            reject(error);
          }
          const result = JSON.parse(body);
          resolve(result); 
        });
      })
}

/**
 * Return Categorie informations
 *
 * @param {string} token access_token
 * @param {string} username Categorie username
 * @returns {Array}
 */

exports.searchCategories = (token, client_id, username) => {
    let searchcategories = {
        'method': 'GET',
        'url': `https://api.twitch.tv/helix/search/categories?query=${username}`,
        'headers': {
          'client-id': `${client_id}`,
          'Authorization': `Bearer ${token}`,
          'Cookie': 'unique_id=aa555924100f05f0; unique_id_durable=aa555924100f05f0; twitch.lohp.countryCode=FR'
        }
      };
      return new Promise((resolve, reject) => {
        request(searchcategories, function (error, response, body) {
          if (error){
            reject(error);
          }
          const result = JSON.parse(body);
          resolve(result); 
        });
      })
}

/**
 * Return channels
 * @param {string} token access_token
 * @param {string} username Broadcaster username 
 * @returns {Array}
 */

exports.searchCategories = (token, client_id, username) => {
    let searchcategories = {
        'method': 'GET',
        'url': `https://api.twitch.tv/helix/search/channels?query=${username}`,
        'headers': {
          'client-id': `${client_id}`,
          'Authorization': `Bearer ${token}`,
          'Cookie': 'unique_id=aa555924100f05f0; unique_id_durable=aa555924100f05f0; twitch.lohp.countryCode=FR'
        }
      };
      return new Promise((resolve, reject) => {
        request(searchcategories, function (error, response, body) {
          if (error){
            reject(error);
          }
          const result = JSON.parse(body);
          resolve(result); 
        });
      })
}
