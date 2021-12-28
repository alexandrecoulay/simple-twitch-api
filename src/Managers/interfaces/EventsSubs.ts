import type { Tpagination } from "./Global";
import type { EventSubTransport, EventSubConditions, EventSubType, EventSubGetStatus, EventSubWebhookEvent } from "./References/EventSub";

export type EventSubCreateParameters = {
    /**
     * See what condition you will need for the choosen type
    * @link https://dev.twitch.tv/docs/eventsub/eventsub-reference#conditions
    */
    type: EventSubType,
    version: "1" | "",
    /**
    * @link https://dev.twitch.tv/docs/eventsub/eventsub-reference#conditions
    */
    condition: EventSubConditions,
    transport: EventSubTransport
}

export type EventSubGetParameters = {
    status?: EventSubGetStatus
    type?: EventSubType,
    after?: string
}

type EventSubCreate = {
    id: string,
    status: string,
    type: EventSubType,
    version: "1" | "",
    created_at: string,
    condition: EventSubConditions,
    transport: EventSubTransport,
    cost: number
}

export type JSONEventSubCreate = {
    data: Array<EventSubCreate>,
    total: number,
    total_cost: number,
    max_total_cost: number
}

export type JSONEventSubGet = {
    total: number,
    data: Array<EventSubCreate>,
    total_cost: number,
    max_total_cost: number
    pagination: Tpagination
}

export type JSONEventSubWebhook = {
    subscription: EventSubCreate,
    /**
     * See what it's return in your webhook
     * @link https://dev.twitch.tv/docs/eventsub/eventsub-reference/#events
     */
    event: EventSubWebhookEvent

}