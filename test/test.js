const twitch = require('../dist/index');
const { CLIENT_ID, CLIENT_SECRET, TOKEN } = require("./config.json");

const SCOPES = "user:read:email";


async function script() {
    /*const request = await twitch.getToken(CLIENT_ID, CLIENT_SECRET, SCOPES);

    const token = request.access_token;*/

    const client = new twitch.default(CLIENT_ID, TOKEN);

    const user_id = await client.userInfo("alex_off");

    console.log(user_id.id);

}

script()
