<script setup lang="ts">
const { env } = useBuildInfo()

function onClickLogo() {
  window.location.reload()
}
</script>

<template>
  <div ps-3 position-relative flex justify-between sticky top-0 z-1 data-tauri-drag-region>
    <NuxtLink
      flex items-end gap-3
      py2
      text-2xl
      select-none
      focus-visible:ring="2 current"
      to="/home"
      @click.prevent="onClickLogo"
    >
      <NavLogo shrink-0 aspect="1/1" w-10 class="rtl-flip" />
      <div v-show="isHydrated" text-secondary>
        {{ $t('app_name') }} <sup text-sm italic mt-1>{{ env === 'release' ? 'alpha' : env }}</sup>
      </div>
    </NuxtLink>
  </div>
</template>
