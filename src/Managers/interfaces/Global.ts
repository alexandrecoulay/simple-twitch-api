export type clientData = {
    token: string,
    twitch_client_id: string
}

export type IgetToken = {
    access_token: string;
    expires_in: number;
    scope: Array<string>;
    token_type: string;
}

export type Tpagination = {
    cursor: string
}