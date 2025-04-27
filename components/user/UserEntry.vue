<script setup lang="ts">
import { useRoute } from 'vue-router'

const { busy, oauth, singleInstanceServer } = useSignIn()
const route = useRoute()

function signIn() {
  oauth()
}

function changeSwitchServerDialogDisplay(isOpen: boolean) {
  isSwitchServerDialogOpen.value = isOpen
}

const isLocal = computed(() => {
  return route.path.includes('/public/local')
})
</script>

<template>
  <div :class="{ p8: !currentUser }" lg:flex="~ col gap2" hidden>
    <p v-if="isHydrated && !currentUser" text-sm>
      <i18n-t keypath="user.sign_in_notice_title">
        <strong>{{ currentServer }}</strong>
      </i18n-t>
    </p>
    <p v-if="!currentUser" text-sm text-secondary>
      {{ $t(singleInstanceServer ? 'user.single_instance_sign_in_desc' : 'user.sign_in_desc') }}
    </p>
    <button
      v-if="singleInstanceServer && !currentUser" flex="~ row" gap-x-2 items-center justify-center btn-solid text-center rounded-3
      :disabled="busy" @click="oauth()"
    >
      <span v-if="busy" aria-hidden="true" block animate animate-spin preserve-3d class="rtl-flip">
        <span block i-ri:loader-2-fill aria-hidden="true" />
      </span>
      <span v-else aria-hidden="true" block i-ri:login-circle-line class="rtl-flip" />
      {{ $t('action.sign_in') }}
    </button>
    <div v-else class="grid gap-2">
      <button v-if="!currentUser" btn-solid rounded-3 text-center mt-2 select-none @click="signIn()">
        {{ $t('action.sign_in') }}
      </button>
      <button v-if="isLocal" btn-outline rounded-3 text-center mt-2 select-none @click="changeSwitchServerDialogDisplay(true)">
        {{ $t('action.switch_server') }}
      </button>
    </div>
  </div>
</template>
