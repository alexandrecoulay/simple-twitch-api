<div align="center">
  <br />
  <h1>SIMPLE TWITCH API</h1>
  <br />
  <p>
    <a href="https://www.npmjs.com/package/simple-twitch-api"><img src="https://img.shields.io/npm/v/simple-twitch-api.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/simple-twitch-api"><img src="https://img.shields.io/npm/dt/simple-twitch-api.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
 </div>
 
[![NPM](https://nodei.co/npm/simple-twitch-api.png)](https://nodei.co/npm/simple-twitch-api/)


A simpler way to interact with the Twitch API (helix version)
Webhook, clips, leaderboard, moderations and follows options are in developpement.

## Launch date 

 - Test Build : 10/10/2020
 - V1 : 20/10/2020


## Install

```
$ npm install simple-twitch-api
```

## Maintainers

- [Coulay Alexandre](https://github.com/alexandrecoulay)

## License

[MIT License](LICENSE).


## Example
```js
//Get the ID of a broadcaster

let Twitch = require('simple-twitch-api');

const { CLIENT_ID, CLIENT_SECRET } = require("./index.json");
const SCOPE = "user:read:email";

Twitch.getToken(CLIENT_ID, CLIENT_SECRET, SCOPE).then(async result => {

    let access_token = result.access_token;

    console.log(access_token);
    
    let user = await Twitch.getUserInfo(access_token, CLIENT_ID , "alex_off");
    let user_id = user.data[0].id;

    console.log(user_id);
});
```