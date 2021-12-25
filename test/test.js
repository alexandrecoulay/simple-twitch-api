const twitch = require('../dist/index');
const { CLIENT_ID, CLIENT_SECRET } = require("./config.json");

const SCOPES = "user:read:email";


async function script() {
    const request = await twitch.getToken(CLIENT_ID, CLIENT_SECRET, SCOPES);

    const token = request.access_token;

    const client = new twitch.default({
        twitch_client_id: CLIENT_ID,
        token: token
    });

    const get_streams = await client.stream.fetch({
        first: 10
    })

    console.table(get_streams.data);

}

script()
