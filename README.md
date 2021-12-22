<div align="center">
  <br />
  <h1>SIMPLE TWITCH API</h1>
  <br />
  <p>
    <a href="https://www.npmjs.com/package/simple-twitch-api"><img src="https://img.shields.io/npm/v/simple-twitch-api.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/simple-twitch-api"><img src="https://img.shields.io/npm/dt/simple-twitch-api.svg?maxAge=3600" alt="NPM downloads" /></a>
     <a href="https://www.npmjs.com/package/simple-twitch-api"><img alt="Snyk Vulnerabilities for npm package" src="https://img.shields.io/snyk/vulnerabilities/npm/simple-twitch-api"></a>
     <a href="https://www.npmjs.com/package/simple-twitch-api"><img alt="Snyk Vulnerabilities for npm package" src="https://img.shields.io/bundlephobia/min/simple-twitch-api"></a>
     <a href="https://www.npmjs.com/package/simple-twitch-api"><img alt="Snyk Vulnerabilities for npm package" src="https://img.shields.io/npm/l/simple-twitch-api"></a>		  
  </p>
 </div>

A simpler way to interact with the Twitch API (helix version : https://dev.twitch.tv/docs/api/reference) write in Typescript

All POST (except OauthToken request) and PUT are in developpement.

Autocompletion

Support for ES5 and ES6.

## Launch date 

 - Test Build : 10/10/2020
 - V1 : 20/10/2020
 - V2 22/12/2021

## Install
```
$ npm install simple-twitch-api
```
```
$ yarn add simple-twitch-api
```
## Example
```js
//Get stream informations

import Twitch from 'simple-twitch-api';

import { CLIENT_ID, CLIENT_SECRET } from "./config.json";

const SCOPES = "user:read:email";

async function script() {
    const request = await twitch.getToken(CLIENT_ID, CLIENT_SECRET, SCOPES);

    const token = request.access_token;

    const client = new twitch.default(CLIENT_ID, token);

    const user_info = await client.getUserbyUsername("alex_off");

    console.log(user_id);

}

script()
```

## Maintainers

- [Coulay Alexandre](https://github.com/alexandrecoulay)

## License

[MIT License](LICENSE).
