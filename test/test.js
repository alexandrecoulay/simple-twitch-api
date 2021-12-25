const twitch = require('../dist/index');
const { CLIENT_ID, CLIENT_SECRET } = require("./config.json");

const SCOPES = "user:read:email";


async function script() {
    const request = await twitch.getToken(CLIENT_ID, CLIENT_SECRET, SCOPES);

    const token = request.access_token;

    const client = new twitch.default(CLIENT_ID, token);

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
