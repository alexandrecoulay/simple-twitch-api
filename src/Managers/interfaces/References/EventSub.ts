export type EventSubConditions = {
    broadcaster_user_id?: string,
    from_broadcaster_user_id?: string,
    to_broadcaster_user_id?: string,
    reward_id?: string,
    organization_id?: string,
    category_id?: string,
    campaign_id?: string,
    extension_client_id?: string,
    client_id?: string,
    user_id?: string
}

export type EventSubTransport = {
    method: string,
    callback: string,
    secret: string
}

export type EventSubMessageType = "webhook_callback_verification" | "notification" | "revocation";

export type EventSubGetStatus = 
    "enable" | 
    "webhook_callback_verification_pending" | 
    "webhook_callback_verification_failed" |
    "notification_failures_exceeded" |
    "authorization_revoked" |
    "user_removed"


export type EventSubType = 
    "channel.update" |
    "channel.follow" |
    "channel.subscribe" |
    "channel.subscription.end" |
    "channel.subscription.gift" |
    "channel.subscription.message" |
    "channel.cheer" |
    "channel.raid" |
    "channel.ban" |
    "channel.unban" |
    "channel.moderator.add" |
    "channel.moderator.remove" |
    "channel.channel_points_custom_reward.add" |
    "channel.channel_points_custom_reward.update"|
    "channel.channel_points_custom_reward.remove" |
    "channel.channel_points_custom_reward_redemption.add" |
    "channel.channel_points_custom_reward_redemption.update" |
    "channel.poll.begin" |
    "channel.poll.progress" |
    "channel.poll.end" |
    "channel.prediction.begin" |
    "channel.prediction.progress" |
    "channel.prediction.lock" |
    "channel.prediction.end" |
    "drop.entitlement.grant" |
    "extension.bits_transaction.create" |
    "channel.goal.begin" |
    "channel.goal.progress" |
    "channel.goal.end" |
    "channel.hype_train.begin" |
    "channel.hype_train.progress" |
    "channel.hype_train.end" |
    "stream.online" |
    "stream.offline" |
    "user.authorization.grant" |
    "user.authorization.revoke" |
    "user.update"

export type EventSubRequestHeaders = 
    'Twitch-Eventsub-Message-Id' |
    'Twitch-Eventsub-Message-Timestamp' |
    'Twitch-Eventsub-Message-Signature' |
    'Twitch-Eventsub-Message-Type'

export type EventSubChoices = {
    id?: string,
    title?: string,
    bits_votes?: number,
    channel_points_votes?: number,
    votes?: number
}

export type EventSubBitsVoting = {
    is_enable?: boolean,
    amount_per_vote?: number
}

export type EventSubChannelPointsVoting = {
    is_enable?: boolean,
    amount_per_vote?: number
}

export type EventSubMaxPerStream = {
    is_enable?: boolean,
    value?: number
}

export type EventSubMaxPerUserStream = {
    is_enable?: boolean,
    value?: number
}

export type EventSubImage = {
    url_1x: string,
    url_2x: string,
    url_4x: string
}

export type EventGlobalCooldown = {
    is_enable?: boolean,
    seconds?: number
}

export type EventReward = {
    id?: string,
    title?: string,
    cost?: number,
    prompt?: string
}

export type EventEmotes = {
    begin: number,
    end: number,
    id: string
}

export type EventMessage = {
    text: string,
    emotes: EventEmotes
}

export type EventTopPredictors = {
    user_id: string,
    user_login: string,
    user_name: string,
    channel_points_won: number | null,
    channel_points_used: number
}

export type EventTopContribution = {
    user_id: string,
    user_login: string,
    user_name: string,
    type: "bits" | "subscription",
    total: number
}

export type EventLastContribution = {
    user_id: string,
    user_login: string,
    user_name: string,
    type: "bits" | "subscription",
    total: number
}

export type EventOutcomes = {
    id: string,
    title: string,
    color: "pink" | "blue",
    users: number,
    channel_points: number,
    top_predictors: EventTopPredictors
}

export type EventDataObject = {
    organization_id?: string,
    category_id?: string,
    category_name?: string,
    campaign_id?: string,
    user_id?: string,
    user_name?: string,
    user_login?: string,
    entitlement_id?: string,
    benefit_id?: string,
    created_at?: string
}

export type EventProduct = {
    name: string,
    bits: number,
    sku: string,
    in_development: boolean
}

export type EventSubWebhookEvent = {
    user_id?: string,
    user_login?: string,
    user_name?: string,
    broadcaster_user_id?: string,
    broadcaster_user_login?: string,
    broadcaster_user_name?: string,
    moderator_user_id?: string,
    moderator_user_login?: string,
    moderator_user_name?: string,
    reason?: string,
    ends_at?: string | "null",
    is_permanent?: boolean,
    tier?: "1000" | "2000" | "3000",
    is_gift?: boolean,
    message?: string | EventMessage,
    bits?: number,
    title?: string,
    language?: string,
    category_id?: string,
    category_name?: string,
    is_mature?: boolean,
    followed_at?: string,
    from_broadcaster_user_id?: string,
    from_broadcaster_user_login?: string,
    from_broadcaster_user_name?: string,
    to_broadcaster_user_id?: string,
    to_broadcaster_user_login?: string,
    to_broadcaster_user_name?: string,
    viewers?: number,
    choices?: Array<EventSubChoices>,
    bits_voting?: EventSubBitsVoting,
    channel_points_voting?: EventSubChannelPointsVoting,
    started_at?: string,
    status?: "completed" | "archived" | "terminated" | "unknown" | "unfulfilled" | "fulfilled" | "fulfilled",
    is_enabled?: boolean,
    is_paused?: boolean,
    is_in_stock?: boolean,
    cost?: number,
    prompt?: string,
    is_user_input_required?: boolean,
    should_redemptions_skip_request_queue?: boolean,
    max_per_stream?: EventSubMaxPerStream,
    max_per_user_per_stream?: EventSubMaxPerUserStream,
    background_color?: string,
    image?: EventSubImage,
    default_image?: EventSubImage,
    global_cooldown?: EventGlobalCooldown,
    cooldown_expires_at?: string | "null",
    redemptions_redeemed_current_stream?: number,
    user_input?: string,
    reward?: EventReward,
    redeemed_at?: string,
    locks_at?: string,
    winning_outcome_id?: string,
    cumulative_total?: number,
    is_anonymous?: boolean,
    streak_months?: string | "null",
    duration_months?: string,
    outcomes?: EventOutcomes,
    data?: Array<EventDataObject>,
    product?: EventProduct,
    type?: "followers" | "subscriptions" | "live" | "playlist" | "watch_party" | "premiere" | "rerun",
    description?: string,
    is_achieved?: boolean,
    current_amount?: number,
    target_amount?: number,
    total?: number,
    progress: number,
    goal: number,
    top_contributions?: EventTopContribution,
    last_contribution?: EventLastContribution,
    expires_at?: string,
    level?: number,
    cooldown_ends_at?: string,
    client_id: string,
    email: string,
}