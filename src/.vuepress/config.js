const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Personal Learning Wiki",
  base: process.env.NODE_ENV === "development" ? "" : "/learnings/",
  // base: "learnings", to host at github pages
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.js",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/contrib/auto-render.min.js",
        onload: "renderMathInElement(document.body);",
      },
    ],
    ["link", { rel: "icon", href: "/icon.png" }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Neuroeconomics",
        link: "/neuroeconomics/",
      },
      {
        text: "Statistics",
        link: "/statistics/",
      },
    ],
    sidebar: {
      "/neuroeconomics/": [
        {
          title: "Neuroeconomics",
          collapsable: false,
          children: ["week-1/", "week-2/", "week-3", "week-4"],
        },
      ],
      "/statistics/": [
        {
          title: "statistics",
          collapsable: false,
          children: ["", "terminology"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-katex"));
    },
  },
};
