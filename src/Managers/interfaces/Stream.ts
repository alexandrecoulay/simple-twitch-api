import type LANGUAGES_LIST from "../../Utils/ISO-369-1"
import type { Tpagination } from "./Global"

type streamInfo = {
    "id": string,
    "user_id": string,
    "user_login": string,
    "user_name": string,
    "game_id": string,
    "game_name": string,
    "type": "live" | "",
    "title": string,
    "viewer_count": number,
    "started_at": string,
    "language": string,
    "thumbnail_url": string
    "tag_ids": Array<string>,
    "is_mature": boolean
}

export type streamInfoParameters = {
    after?: string,
    before?: string,
    /**
     * @max 100
     * @default 20
     */
    first?: number,
    /**
     * @max 100
     */
    game_id?: Array<string>
        /**
     * @max 100
     */
    language?: Array<LANGUAGES_LIST>,
    /**
     * @max 100
     */
    user_id?: Array<string>
    /**
     * @max 100
     */
    user_login?: Array<string>
}

export type JSONstreamKey = {
    data: Array<{
        stream_key: string
    }>
}

export type JSONstreamInfo =  {
    data: Array<streamInfo>,
    pagination: Tpagination
}