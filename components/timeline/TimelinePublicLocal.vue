<script setup lang="ts">
import type { mastodon } from 'masto'

const route = useRoute()

setCustomClient(route.params.server as string, route.path)
const paginator = useMastoClient().v1.timelines.public.list({ limit: 30 })
const stream = useStreaming(client => client.public.local.subscribe())
function reorderAndFilter(items: mastodon.v1.Status[]) {
  return reorderedTimeline(items, 'public')
}
</script>

<template>
  <div>
    <TimelinePaginator v-bind="{ paginator, stream }" :preprocess="reorderAndFilter" context="public" />
  </div>
</template>
