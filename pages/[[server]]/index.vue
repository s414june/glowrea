<script setup lang="ts">
const route = useRoute()

onMounted(() => {
  const serverId = route.params.server
  if (typeof serverId === 'string') {
    navigateTo(`${serverId}/public/local`)
  }
})
</script>

<template>
  <div>Redirecting...</div>
</template>
