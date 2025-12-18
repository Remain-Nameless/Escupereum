import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/search.scss"
// @ts-ignore
import script from "./scripts/search.inline"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

export interface SearchOptions {
  enablePreview: boolean
  excludeTags: string[] // Новая опция для исключения тегов
}

const defaultOptions: SearchOptions = {
  enablePreview: true,
  excludeTags: ["explorerexclude"], // Добавляем тег по умолчанию
}

export default ((userOpts?: Partial<SearchOptions>) => {
  const opts = { ...defaultOptions, ...userOpts }
  
  // Добавляем скрипт для передачи опций фильтрации
  const searchScript = `
    (function() {
      window.QUARTZ_SEARCH_OPTS = ${JSON.stringify({ excludeTags: opts.excludeTags })};
    })();
    ${script}
  `

  const Search: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const searchPlaceholder = i18n(cfg.locale).components.search.searchBarPlaceholder
    return (
      <div class={classNames(displayClass, "search")}>
        <button class="search-button">
          <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
            <title>Search</title>
            <g class="search-path" fill="none">
              <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
              <circle cx="8" cy="8" r="7" />
            </g>
          </svg>
          <p>{i18n(cfg.locale).components.search.title}</p>
        </button>
        <div class="search-container">
          <div class="search-space">
            <input
              autocomplete="off"
              class="search-bar"
              name="search"
              type="text"
              aria-label={searchPlaceholder}
              placeholder={searchPlaceholder}
            />
            <div class="search-layout" data-preview={opts.enablePreview}></div>
          </div>
        </div>
      </div>
    )
  }

  Search.afterDOMLoaded = searchScript
  Search.css = style

  return Search
}) satisfies QuartzComponentConstructor