<script setup lang="ts">
const router = useRouter()
const { oauth } = useSignIn()

function clickUser() {
  if (currentUser.value)
    router.push(getAccountRoute(currentUser.value.account))
}

function signIn() {
  oauth()
}

function changeSwitchServerDialogDisplay(isOpen: boolean) {
  isSwitchServerDialogOpen.value = isOpen
}
</script>

<template>
  <AccountAvatar
    v-if="isHydrated && currentUser" sm:hidden :account="currentUser.account" h-8 w-8 :draggable="false"
    square @click="clickUser"
  />
  <div v-else class="flex gap-1 items-center">
    <button
      flex="~ row" gap-x-1 items-center justify-center btn-solid text-sm px-2 py-1 xl:hidden
      @click="signIn()"
    >
      <span aria-hidden="true" block i-ri:login-circle-line class="rtl-flip" />
      {{ $t('action.sign_in') }}
    </button>
    <button btn-outline text-sm px-2 py-1 xl:hidden @click="changeSwitchServerDialogDisplay(true)">
      {{ $t('action.switch_server') }}
    </button>
  </div>
</template>
