export const EventSubsTypesExport = {
  CHANNE_UPDATE: 'channel.update',
  CHANNEL_FOLLOW: 'channel.follow',
  CHANNEL_SUBSCRIBE: 'channel.subscribe',
  CHANNEL_SUBSCRIPTION_END: 'channel.subscription.end',
  CHANNEL_SUBSCRIPTION_GIFT: 'channel.subscription.gift',
  CHANNEL_SUBSRIPTION_MESSAGE: 'channel.subscription.message',
  CHANNEL_CHEER: 'channel.cheer',
  CHANNEL_RAID: 'channel.raid',
  CHANNEL_BAN: 'channel.ban',
  CHANNEL_UNBAN: 'channel.unban',
  CHANNEL_MODERATOR_ADD: 'channel.moderator.add',
  CHANNEL_MODERATOR_REMOVE: 'channel.moderator.remove',
  CHANNEL_CHANNEL_POINTS_CUSTOM_REWARD_ADD: 'channel.channel_points_custom_reward.add',
  CHANNEL_CHANNEL_POINTS_CUSTOM_REWARD_UPDATE: 'channel.channel_points_custom_reward.update',
  CHANNEL_CHANNEL_POINTS_CUSTOM_REWARD_REMOVE: 'channel.channel_points_custom_reward.remove',
  CHANNEL_CHANNEL_POINTS_CUSTOM_REDEMPTION_ADD: 'channel.channel_points_custom_reward_redemption.add',
  CHANNEL_CHANNEL_POINTS_CUSTOM_REDEMPTION_UPDATE: 'channel.channel_points_custom_reward_redemption.update',
  CHANNEL_POLL_BEGIN: 'channel.poll.begin',
  CHANNEL_POLL_PROGRESS: 'channel.poll.progress',
  CHANNEL_POLL_END: 'channel.poll.end',
  CHANNEL_PREDICTION_BEGIN: 'channel.prediction.begin',
  CHANNEL_PREDICTION_PROGRESS: 'channel.prediction.progress',
  CHANNEL_PREDICTION_LOCK: 'channel.prediction.lock',
  CHANNEL_PREDICTION_END: 'channel.prediction.end',
  DROP_ENTITLEMENT_GRANT: 'drop.entitlement.grant',
  EXTENSION_BITS_TRANSACTION_CREATE: 'extension.bits_transaction.create',
  CHANNEL_GOAL_BEGIN: 'channel.goal.begin',
  CHANNEL_GOAL_PROGRESS: 'channel.goal.progress',
  CHANNEL_GOAL_END: 'channel.goal.end',
  CHANNEL_HYPE_TRAIN_BEGIN: 'channel.hype_train.begin',
  CHANNEL_HYPE_TRAIN_PROGRESS: 'channel.hype_train.progress',
  CHANNEL_HYPE_TRAIN_END: 'channel.hype_train.end',
  STREAM_ONLINE: 'stream.online',
  STREAM_OFFLINE: 'stream.offline',
  USER_AUTHORIZATION_GRANT: 'user.authorization.grant',
  USER_AUTHORIZATION_REVOKE: 'user.authorization.revoke',
  USER_UPDATE: 'user.update',
};

export const EventSubGetStatusExport = {
  ENABLE: 'enable',
  WEBHOOK_CALLBACK_VERIFICATION_PENDING: 'webhook_callback_verification_pending',
  WEBHOOK_CALLBACK_VERIFICATION_FAILED: 'webhook_callback_verification_failed',
  NOTIFICATION_FAILURE_EXCEED: 'notification_failures_exceeded',
  AUTHORIZATION_REVOKED: 'authorization_revoked',
  USER_REMOVED: 'user_removed',
};
