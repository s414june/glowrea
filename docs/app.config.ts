export default defineAppConfig({
  docus: {
    title: 'Glowrea',
    description: '光景，讓Mastodon景致——如光流動',
    image: 'https://docs.elk.zone/elk-screenshot.png',
    socials: {
      // twitter: 'elk_zone',
      github: 's414june/glowrea',
      // mastodon: {
      //   label: 'Mastodon',
      //   icon: 'IconMastodon',
      //   href: 'https://elk.zone/@elk@webtoo.ls',
      // },
    },
    aside: {
      level: 0,
      exclude: [],
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
    },
    footer: {
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'IconNuxtLabs',
        },
        {
          href: 'https://m.webtoo.ls/@elk',
          icon: 'IconMastodon',
        },
      ],
    },
  },
})
