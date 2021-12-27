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