<script setup lang="ts">
const { t } = useI18n()

useHydratedHead({
  title: () => `${t('settings.language.label')} | ${t('nav.settings')}`,
})
</script>

<template>
  <MainContent back-on-small-screen>
    <template #title>
      <div text-lg font-bold flex items-center gap-2 @click="$scrollToTop">
        <span>{{ $t('settings.language.label') }}</span>
      </div>
    </template>
    <div p6>
      <section space-y-2>
        <h2 py2 font-bold text-xl flex="~ gap-1" items-center>
          {{ $t('settings.language.display_language') }}
        </h2>
        <SettingsLanguage select-settings />
      </section>
      <section mt4>
        <h2 font-bold text-xl flex="~ gap-1" items-center>
          {{ $t('settings.language.post_language') }}
        </h2>
        <SettingsItem
          v-if="currentUser"
          command large
          icon="i-ri:quill-pen-line"
          :text="$t('settings.language.post_language')"
          :description="$t('settings.account_settings.description')"
          :to="`https://${currentUser!.server}/settings/preferences/other`"
          external target="_blank"
        />
      </section>
      <section>
        <h2 py4 mt2 font-bold text-xl flex="~ gap-1" items-center>
          {{ $t('settings.language.translations.heading') }}
        </h2>
        <SettingsTranslations />
      </section>
    </div>
  </MainContent>
</template>
