import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Math-Hu",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "duclydang5-alt.github.io/math-blog-hujiaming",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "JetBrains Mono", // 标题用代码字体
        body: "JetBrains Mono",   // 正文也用代码字体
        code: "JetBrains Mono",
      },
colors: {
        lightMode: {
          light: "#f5fdf9",         // 极淡的薄荷底色
          lightgray: "#d0e8db",     // 浅绿边框
          gray: "#8fa397",          // 灰色文字
          darkgray: "#2d4a3e",      // 正文：深绿，保证清晰
          dark: "#1b3a2b",          // 标题：墨绿
          secondary: "#00a86b",     // 重点色：鲜艳的翡翠绿 (让主题色更明显)
          tertiary: "#4ecdc4",      // 鼠标放上去是青绿色
          highlight: "rgba(0, 168, 107, 0.15)",
        },
        darkMode: {
          light: "#0d1f16",         // 背景：深森林绿 (不再是纯黑！)
          lightgray: "#1e3b2e",
          gray: "#6c8c7d",
          darkgray: "#e0ece6",      // 正文：灰白带点绿
          dark: "#ffffff",          // 标题：纯白
          secondary: "#66ffb2",     // 链接：荧光薄荷绿
          tertiary: "#4ecdc4",
          highlight: "rgba(102, 255, 178, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config