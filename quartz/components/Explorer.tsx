import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/explorer.scss"

// @ts-ignore
import script from "./scripts/explorer.inline"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { FileTrieNode } from "../util/fileTrie"
import OverflowListFactory from "./OverflowList"
import { concatenateResources } from "../util/resources"

type OrderEntries = "sort" | "filter" | "map"

export interface Options {
  title?: string
  folderDefaultState: "collapsed" | "open"
  folderClickBehavior: "collapse" | "link"
  useSavedState: boolean
  sortFn: (a: FileTrieNode, b: FileTrieNode) => number
  filterFn: (node: FileTrieNode) => boolean
  mapFn: (node: FileTrieNode) => void
  order: OrderEntries[]
}

// Вспомогательная функция для проверки тегов
const hasExplorerExcludeTag = (node: FileTrieNode): boolean => {
  if (!node.file?.frontmatter?.tags) return false
  
  const tags = node.file.frontmatter.tags
  if (Array.isArray(tags)) {
    return tags.includes("explorerexclude") || 
           tags.some(tag => tag.startsWith("explorerexclude/"))
  }
  
  return false
}

const defaultOptions: Options = {
  folderDefaultState: "collapsed",
  folderClickBehavior: "link",
  useSavedState: true,
  mapFn: (node) => {
    return node
  },
  sortFn: (a, b) => {
    // Sort order: folders first, then files. Sort folders and files alphabetically
    if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
      // numeric: true: Whether numeric collation should be used, such that "1" < "2" < "10"
      // sensitivity: "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }

    if (!a.isFolder && b.isFolder) {
      return 1
    } else {
      return -1
    }
  },
  filterFn: (node) => {
    // Всегда исключаем саму страницу тега "explorerexclude"
    const isExplorerExcludePage = JSON.stringify(node.slugSegment) === JSON.stringify(["tags", "explorerexclude"])
    
    // Для всех остальных узлов применяем базовую фильтрацию
    if (isExplorerExcludePage) {
      return false
    }
    
    return true
  },
  order: ["filter", "map", "sort"],
}

export type FolderState = {
  path: string
  collapsed: boolean
}

let numExplorers = 0
export default ((userOpts?: Partial<Options>) => {
  const opts: Options = { ...defaultOptions, ...userOpts }
  const { OverflowList, overflowListAfterDOMLoaded } = OverflowListFactory()

  const Explorer: QuartzComponent = ({ cfg, displayClass, fileData }: QuartzComponentProps) => {
    const id = `explorer-${numExplorers++}`
    
    // Определяем, находимся ли мы на странице тега (кроме explorerexclude)
    const isTagPage = fileData?.slug?.startsWith("tags/")
    const currentTag = isTagPage ? fileData.slug.split("tags/")[1]?.split("/")[0] || "" : ""
    const isExplorerExcludeTagPage = currentTag === "explorerexclude"
    
    // Создаем контекстно-зависимую функцию фильтрации
    const createFilterFn = (): string => {
      if (isTagPage && !isExplorerExcludeTagPage) {
        // На странице тега (кроме explorerexclude) - фильтруем файлы с тегом explorerexclude
        return `function(node) {
          // Исключаем саму страницу тега "explorerexclude"
          if (JSON.stringify(node.slugSegment) === JSON.stringify(["tags", "explorerexclude"])) {
            return false
          }
          
          // Исключаем файлы с тегом "explorerexclude"
          if (node.file && node.file.frontmatter && node.file.frontmatter.tags) {
            const tags = node.file.frontmatter.tags
            if (Array.isArray(tags)) {
              if (tags.includes("explorerexclude")) {
                return false
              }
              // Проверяем вложенные теги
              for (const tag of tags) {
                if (tag.startsWith("explorerexclude/")) {
                  return false
                }
              }
            }
          }
          
          return true
        }`
      } else {
        // На других страницах - используем стандартную фильтрацию
        return opts.filterFn.toString()
      }
    }

    return (
      <div
        class={classNames(displayClass, "explorer")}
        data-behavior={opts.folderClickBehavior}
        data-collapsed={opts.folderDefaultState}
        data-savestate={opts.useSavedState}
        data-data-fns={JSON.stringify({
          order: opts.order,
          sortFn: opts.sortFn.toString(),
          filterFn: createFilterFn(), // Используем динамически созданную функцию
          mapFn: opts.mapFn.toString(),
        })}
      >
        <button
          type="button"
          class="explorer-toggle mobile-explorer hide-until-loaded"
          data-mobile={true}
          aria-controls={id}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        <button
          type="button"
          class="title-button explorer-toggle desktop-explorer"
          data-mobile={false}
          aria-expanded={true}
        >
          <h2>{opts.title ?? i18n(cfg.locale).components.explorer.title}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="5 8 14 8"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="fold"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div id={id} class="explorer-content" aria-expanded={false} role="group">
          <OverflowList class="explorer-ul" />
        </div>
        <template id="template-file">
          <li>
            <a href="#"></a>
          </li>
        </template>
        <template id="template-folder">
          <li>
            <div class="folder-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="5 8 14 8"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="folder-icon"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              <div>
                <button class="folder-button">
                  <span class="folder-title"></span>
                </button>
              </div>
            </div>
            <div class="folder-outer">
              <ul class="content"></ul>
            </div>
          </li>
        </template>
      </div>
    )
  }

  Explorer.css = style
  Explorer.afterDOMLoaded = concatenateResources(script, overflowListAfterDOMLoaded)
  return Explorer
}) satisfies QuartzComponentConstructor