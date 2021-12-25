
<div align="center">
<br />
<h1>SIMPLE TWITCH API</h1>
<br />
<p>
<a  href="https://www.npmjs.com/package/simple-twitch-api"><img  src="https://img.shields.io/npm/v/simple-twitch-api.svg?maxAge=3600"  alt="NPM version" /></a> <a  href="https://www.npmjs.com/package/simple-twitch-api"><img  src="https://img.shields.io/npm/dt/simple-twitch-api.svg?maxAge=3600"  alt="NPM downloads" /></a> <a  href="https://www.npmjs.com/package/simple-twitch-api"><img  alt="Snyk Vulnerabilities for npm package"  src="https://img.shields.io/snyk/vulnerabilities/npm/simple-twitch-api"></a> <a  href="https://www.npmjs.com/package/simple-twitch-api"><img  alt="Snyk Vulnerabilities for npm package"  src="https://img.shields.io/bundlephobia/min/simple-twitch-api"></a> <a  href="https://www.npmjs.com/package/simple-twitch-api"><img  alt="Snyk Vulnerabilities for npm package"  src="https://img.shields.io/npm/l/simple-twitch-api"></a>
</p>
</div>

  
A simpler way to interact with the Twitch API (helix version : https://dev.twitch.tv/docs/api/reference) write in Typescript

### Roadmap :
 - [x] TypeScript Support
 - [x] Basic Get and Events
 - [ ] All Get requests
 - [ ] All EventSub
 - [ ] All Posts Request
 - [ ] All Put Request

### Support :
```
- ES5
- ES6
- typescript (you don't need to install another package to work with TS).
```
  

## Install

```
$	npm install simple-twitch-api
```
```
$	yarn add simple-twitch-api
```

## Example

```js
import  Twitch  from  'simple-twitch-api';
import { CLIENT_ID, CLIENT_SECRET } from  "./config.json";

const  SCOPES  =  "user:read:email";

async function script() {
    const request = await twitch.getToken(CLIENT_ID, CLIENT_SECRET, SCOPES);

    const token = request.access_token;

    const client = new twitch.default({
        twitch_client_id: CLIENT_ID,
        token: token
    });

    const get_streams = await client.stream.fetch({
        language: [
            "fr",
            "en",
            "be"
        ],
        user_login: [
            "alex_off"
        ]
    })

   console.table(get_streams.data);
}

script()

```

## Maintainers

  

- [Coulay Alexandre](https://github.com/alexandrecoulay)

  

## License

  

[MIT License](LICENSE).