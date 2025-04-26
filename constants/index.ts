import type { mastodon } from 'masto'

export const APP_NAME = 'Glowrea'

export const DEFAULT_POST_CHARS_LIMIT = 500
export const DEFAULT_FONT_SIZE = '15px'

export const ELK_PAGE_LIFECYCLE_FROZEN = 'glowrea-frozen'

export const STORAGE_KEY_DRAFTS = 'glowrea-drafts'
export const STORAGE_KEY_USERS = 'glowrea-users'
export const STORAGE_KEY_SERVERS = 'glowrea-servers'
export const STORAGE_KEY_NODES = 'glowrea-nodes'
export const STORAGE_KEY_CURRENT_USER_HANDLE = 'glowrea-current-user-handle'
export const STORAGE_KEY_NOTIFY_TAB = 'glowrea-notify-tab'
export const STORAGE_KEY_SETTINGS = 'glowrea-settings'
export const STORAGE_KEY_CUSTOM_EMOJIS = 'glowrea-custom-emojis'
export const STORAGE_KEY_HIDE_EXPLORE_POSTS_TIPS = 'glowrea-hide-explore-posts-tips'
export const STORAGE_KEY_HIDE_EXPLORE_NEWS_TIPS = 'glowrea-hide-explore-news-tips'
export const STORAGE_KEY_HIDE_EXPLORE_TAGS_TIPS = 'glowrea-hide-explore-tags-tips'
export const STORAGE_KEY_NOTIFICATION = 'glowrea-notification'
export const STORAGE_KEY_NOTIFICATION_POLICY = 'glowrea-notification-policy'
export const STORAGE_KEY_PWA_HIDE_INSTALL = 'glowrea-pwa-hide-install'
export const STORAGE_KEY_LAST_ACCESSED_NOTIFICATION_ROUTE = 'glowrea-last-accessed-notification-route'
export const STORAGE_KEY_LAST_ACCESSED_EXPLORE_ROUTE = 'glowrea-last-accessed-explore-route'
export const STORAGE_KEY_BOTTOM_NAV_BUTTONS = 'glowrea-bottom-nav-buttons'

export const HANDLED_MASTO_URLS = /^(https?:\/\/)?([\w\-]+\.)+\w+\/(@[@\w\-.]+)(\/objects)?(\/\d+)?$/

export const NOTIFICATION_FILTER_TYPES: mastodon.v1.NotificationType[] = ['status', 'reblog', 'follow', 'follow_request', 'favourite', 'poll', 'update', 'admin.sign_up', 'admin.report']

export const THEME_COLORS = {
  defaultTheme: '#0097fd',
  themeDark: '#111111',
  themeLight: '#fafafa',
  backgroundDark: '#fafafa',
  backgroundLight: '#111111',
} as const
