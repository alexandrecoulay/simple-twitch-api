import type LANGUAGES from "../../Utils/ISO-369-1";
import type { Tpagination } from "./Global";

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

type searchChannel = {
    "broadcaster_language": string,
    "broadcaster_login": string,
    "display_name": string,
    "game_id": string,
    "game_name": string,
    "id": string,
    "is_live": boolean,
    "tags_ids": Array<string>,
    "thumbnail_url": string,
    "title": string,
    "started_at": string
}

export type searchParameters = {
    /**
     * @max 100
     * @default 20
     */
    first?: number,
    after?: string,
    /**
     * @default false
     */
    live_only?: boolean
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

export type JSONSearchChannel = {
    data: Array<searchChannel>,
    pagination: Tpagination
}