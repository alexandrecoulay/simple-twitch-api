import crypto from "crypto";
import type { Request } from "express";

// Notification request headers
const TWITCH_MESSAGE_ID = 'Twitch-Eventsub-Message-Id'.toLowerCase();
const TWITCH_MESSAGE_TIMESTAMP = 'Twitch-Eventsub-Message-Timestamp'.toLowerCase();
export const TWITCH_MESSAGE_SIGNATURE: string = 'Twitch-Eventsub-Message-Signature'.toLowerCase();
export const MESSAGE_TYPE: string = 'Twitch-Eventsub-Message-Type'.toLowerCase();


// Build the message used to get the HMAC.
export const getHmacMessage = (request: Request) => {
    const headers = request.headers;

    const message_id = headers[TWITCH_MESSAGE_ID]?.toString();
    const message_timestamp = headers[TWITCH_MESSAGE_TIMESTAMP]?.toString();
    const body = JSON.stringify(request.body);
    return `${message_id}${message_timestamp}${body}`;
}

// Get the HMAC.
export const getHmac = (secret: string, message: string) => {
    return crypto.createHmac('sha256', secret)
    .update(message)
    .digest('hex');
}

// Verify whether your signature matches Twitch's signature.
export const verifyMessage = (hmac: string, verifySignature: string) => {
    return crypto.timingSafeEqual(Buffer.from(hmac), Buffer.from(verifySignature));
}