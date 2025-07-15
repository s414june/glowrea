<script setup lang="ts">
import type { mastodon } from 'masto'

const {
  status,
  newer,
  withAction = true,
} = defineProps<{
  status: mastodon.v1.Status | mastodon.v1.StatusEdit
  newer?: mastodon.v1.Status
  withAction?: boolean
}>()

const { translation } = useTranslation(status, getLanguageCode())

const statusBodyComponent = ref<HTMLElement | null>(null)
const hasMore = ref(false)
const openMore = ref(false)

const emojisObject = useEmojisFallback(() => status.emojis)
const vnode = computed(() => {
  if (!status.content)
    return null
  return contentToVNode(status.content, {
    emojis: emojisObject.value,
    mentions: 'mentions' in status ? status.mentions : undefined,
    markdown: true,
    collapseMentionLink: !!('inReplyToId' in status && status.inReplyToId),
    status: 'id' in status ? status : undefined,
    inReplyToStatus: newer,
  })
})

onMounted(() => {
  if (statusBodyComponent.value) {
    const originHeight = statusBodyComponent.value.scrollHeight
    statusBodyComponent.value.setAttribute('clip', 'true')

    const newHeight = statusBodyComponent.value?.scrollHeight
    if (originHeight === newHeight) {
      statusBodyComponent.value.setAttribute('clip', 'false')
    }
    else {
      hasMore.value = true
    }
  }
})
</script>

<template>
  <div
    ref="statusBodyComponent" class="status-body" whitespace-pre-wrap break-words
    :class="{ 'with-action': withAction, 'close-more': !openMore }" relative
  >
    <span
      v-if="status.content" class="content-rich line-compact flex flex-col" dir="auto"
      :lang="('language' in status && status.language) || undefined"
    >
      <component :is="vnode" v-if="vnode" />
    </span>
    <div v-else />
    <button
      v-show="hasMore && !openMore" text-primary m="t-2" i-ri:arrow-down-double-line type="button"
      class="action-button" @click="openMore = true"
    />
    <button
      v-show="hasMore && openMore" text-primary m="t-2" i-ri:arrow-up-double-line type="button"
      class="action-button" @click="openMore = false"
    />
    <template v-if="translation.visible">
      <div my2 h-px border="b-2 base" bg-base />
      <ContentRich
        v-if="translation.success" class="line-compact" :content="translation.text"
        :emojis="status.emojis"
      />
      <div v-else text-red-4>
        Error: {{ translation.error }}
      </div>
    </template>
  </div>
</template>

<style scoped>
.status-body.with-action p {
  cursor: pointer;
}

.status-body.with-action[clip=true].close-more>* {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  text-overflow: ellipsis;
  overflow: hidden;
  clear: both;
}
</style>
