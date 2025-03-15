const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Doyeon",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "android developer",
    bio: "Dart/Flutter & Kotlin",
    email: "dodo03@khu.ac.kr",
    linkedin: "",
    github: "doyeon0307",
    instagram: "",
  },
  projects: [
    {
      name: `유클리드`,
      href: "https://github.com/euclid-lyc/lyc-frontend",
    },
    {
      name: `Luckit`,
      href: "https://github.com/9oormthon-univ/2024_DANPOONG_TEAM_27_FE",
    },
    {
      name: `소박한 가계부`,
      href: "https://github.com/doyeon0307/Sobak-Spending-Log",
    },
    {
      name: `효도링`,
      href: "https://github.com/Uni-D-HyodoRing/frontend",
    },
    {
      name: `Tickit!`,
      href: "https://github.com/doyeon0307/Tickit-frontend",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Doyeon-log",
    description: "welcome to Doyeon-log!",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
