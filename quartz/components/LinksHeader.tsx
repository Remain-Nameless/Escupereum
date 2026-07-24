import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksHeader.scss"
// @ts-ignore
import script from "./scripts/linksHeader.inline"

export default (() => {
  function LinksHeader() {
    return (
      <div>
        <div class="links-header-container">
          {/* Кнопка для мобильной версии */}
          <button
            type="button"
            class="links-header-toggle mobile-only"
            aria-controls="links-list"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <span>Меню</span>
          </button>

          {/* Контейнер со ссылками */}
          <div class="links-header-content" id="links-list" aria-expanded="false">
            {/* Заголовок для десктопной версии (опционально) */}
            <div class="links-header-title desktop-only">
              <h2>Разделы</h2>
            </div>
            <ul class="links-header-list">
              <li>
                <a href="https://remain-nameless.github.io/Escupereum/О-проекте">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                  О проекте
                </a>
              </li>
              <li>
                <a href="https://remain-nameless.github.io/Escupereum/Мироустройство">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                  Мироустройство
                </a>
              </li>
              <li>
                <a href="https://remain-nameless.github.io/Escupereum/Общество">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/>
                    <circle cx="12" cy="10" r="3"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  Общество
                </a>
              </li>
              <li>
                <a href="https://remain-nameless.github.io/Escupereum/История">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  </svg>
                  История
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr style="background-color: var(--lightgray); border-top: 1px var(--lightgray) solid; margin-top: 1.3rem"></hr>
      </div>
    )
  }

  LinksHeader.css = style
  LinksHeader.afterDOMLoaded = script
  return LinksHeader
}) satisfies QuartzComponentConstructor