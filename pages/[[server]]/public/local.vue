<script setup lang="ts">
const { t } = useI18n()

useHydratedHead({
  title: () => t('title.local_timeline'),
})

function changeSwitchServerDialogDisplay(isOpen: boolean) {
  isSwitchServerDialogOpen.value = isOpen
}
</script>

<template>
  <MainContent>
    <template #title>
      <div class="flex justify-between grow">
        <NuxtLink to="/public/local" timeline-title-style flex items-center gap-2 @click="$scrollToTop">
          <div i-ri:group-2-line />
          <span>{{ t('title.local_timeline') }}</span>
        </NuxtLink>
        <button btn-outline text-sm px-2 py-1 xl:hidden @click="changeSwitchServerDialogDisplay(true)">
          {{ $t('action.switch_server') }}
        </button>
      </div>
    </template>

    <TimelinePublicLocal v-if="isHydrated" />
  </MainContent>
</template>
