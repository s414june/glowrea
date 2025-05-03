<script setup lang="ts">
import type { mastodon } from 'masto'

defineProps<{
  paginator: mastodon.Paginator<mastodon.v1.Tag[], mastodon.DefaultPaginationParams>
}>()
</script>

<template>
  <CommonPaginator :paginator="paginator" key-prop="name">
    <template #default="{ item }">
      <TagCard :tag="item" border="b-2 base" />
    </template>
    <template #loading>
      <TagCardSkeleton border="b-2 base" />
      <TagCardSkeleton border="b-2 base" />
      <TagCardSkeleton border="b-2 base" op50 />
      <TagCardSkeleton border="b-2 base" op50 />
      <TagCardSkeleton border="b-2 base" op25 />
    </template>
  </CommonPaginator>
</template>
