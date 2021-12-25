import type LANGUAGES from "../../Utils/ISO-369-1";

type ChannelInformations = {
    "broadcaster_id": string,
    "broadcaster_login": string,
    "broadcaster_name": string,
    "broadcaster_language": string,
    "game_id": string,
    "game_name": string
    "title": string
    "delay": number
}

type channelEditors = {
    user_id: string,
    user_name: string,
    created_at: string
}

export type ChannelModifyParameters = {
    broadcaster_id?: string,
    game_id?: string,
    /**
     * ISO-369-1 format
     */
    broadcaster_language?: LANGUAGES,
    title?: string,
    delay?: number
}

export type JSONChannelInformations = {
    data: Array<ChannelInformations>
}

export type JSONeditorsInformations = {
    data: Array<channelEditors>
}