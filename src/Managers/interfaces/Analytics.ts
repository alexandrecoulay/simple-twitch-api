import type { Tpagination } from "./Global"

export type extensions = {
    "extension_id": string,
    "URL": string,
    "type": string,
    "date_range": {
        "started_at": string,
        "ended_at": string
    }
}

export type ExtensionParameters = {
    /**
     * cursor string if received in response
     */
    after?: string,
    ended_at?: string,
    extension_id?: string,
    /**
     * not needed if cursor received in response
     * @default 20
     * @max 100
     */
    first?: number,
    started_at?: string,
    type?: string
}

export type games = {
    "game_id": string,
    "URL": string,
    "type": string,
    "date_range": {
        "started_at": string,
        "ended_at": string
    }
}

export type GamesParameters = {
    /**
     * cursor string if received in response
     */
     after?: string,
     ended_at?: string,
     game_id?: string,
     /**
      * not needed if cursor received in response
      * @default 20
      * @max 100
      */
     first?: number,
     started_at?: string,
     type?: string
}

export type JSONextentionsAnalytics = {
    data: Array<extensions>,
    pagination: Tpagination
}

export type JSONgamesAnalytics = {
    data: Array<games>,
    pagination: Tpagination
}