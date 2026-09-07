import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import { Spiral } from "./quartz/plugins/transformers/spiral"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Эскуперей",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: false,
    analytics: {
      provider: "plausible",
    },
    locale: "ru-RU",
    baseUrl: "remain-nameless.github.io/Escupereum/",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "published",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
		title: "Spectral SC",
        header: "Alegreya",
        body: "EB Garamond",
        code: "Roboto",
		textAlign: "justify",
      },
      colors: {
       lightMode: {
          light: "#f7e6d4",
          lightgray: "#d8917d",
          gray: "#b8b8b8",
          darkgray: "#21263f",
          dark: "#d17a62",         // золотистый для заголовков
          secondary: "#3d8a8a",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#141c2b",        // тёмно-синий фон
          lightgray: "#d8917d",
          gray: "#646464",
          darkgray: "#ece4da",     // кремовый для основного текста
          dark: "#d4b87a",         // золотистый для заголовков
          secondary: "#3d8a8a",    // светящийся изумрудно-синий (акцент)
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
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
      Plugin.ObsidianFlavoredMarkdown({ 
		enableInHtmlEmbed: false,
		}),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description({
		excludeTags: ["explorerexclude", "глоссарий"]
		}),
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
      // Comment out CustomOgImages to speed up build time
      //Plugin.CustomOgImages(),
    ],
  },
}

export default config
