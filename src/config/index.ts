import { Github, Twitter } from "lucide-react"

export const defaultLanguage: string = "en"

export const common = {
  domain: "https://ija.netlify.app",
  meta: {
    favicon: "/avatar.png",
    url: "https://blog.sunguoqi.com",
  },
  googleAnalyticsId: "",
  social: [
    {
      icon: Twitter,
      label: "X",
      link: "https://x.com/sun0225SUN",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/ajipgt",
    },
  ],
  rss: true,
  navigation: {
    home: true,
    archive: true,
    links: true,
    about: true,
  },
  latestPosts: 8,
  comments: {
    enabled: false,
    twikoo: {
      enabled: true,
      // replace with your own envId
      envId: import.meta.env.PUBLIC_TWIKOO_ENV_ID ?? "",
    },
  },
}

export const id = {
  ...common,
  siteName: "Ija",
  meta: {
    ...common.meta,
    title: "Ija's Blog",
    slogan: "Tempat serius untuk belajar",
    description: "Matematika, Fisika, Kimia",
  },
  navigation: {
    ...common.navigation,
  },
  pageMeta: {
    archive: {
      title: "Arsip",
      description: "Semua Post",
      ogImage: "/images/page-meta/zh/archive.png",
    },
    about: {
      title: "Tentang",
      description: "Bio Penulis",
      ogImage: "/images/page-meta/zh/about.png",
    },
  },
}


