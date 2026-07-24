// quartz/components/LinksHeader.tsx
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/linksHeader.scss"
// @ts-ignore
import script from "./scripts/linksHeader.inline"
import { classNames } from "../util/lang"

export default (() => {
  function LinksHeader(props: QuartzComponentProps) {
    const { displayClass } = props
    return (
      <div class={classNames(displayClass, "links-header-outer")}>
        <div class="links-header-container">
          {/* Кнопка для мобильной версии */}
          <button
            type="button"
            class="links-header-toggle mobile-only"
            aria-controls="links-list"
            aria-expanded="false"
          >
            <span>Разделы</span>
          </button>

          {/* Контейнер со ссылками */}
          <div class="links-header-content" id="links-list" aria-expanded="false">
            {/* Заголовок для десктопной версии */}
            <div class="links-header-title desktop-only">
              <h1>Разделы</h1>
            </div>
            <ul class="links-header-list">
              <li>
                <a href="https://remain-nameless.github.io/Escupereum/О-проекте">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 2H9l-.35.15-.65.64-.65-.64L7 2H1.5l-.5.5v10l.5.5h5.29l.86.85h.7l.86-.85h5.29l.5-.5v-10l-.5-.5zm-7 10.32l-.18-.17L7 12H2V3h4.79l.74.74-.03 8.58zM14 12H9l-.35.15-.14.13V3.7l.7-.7H14v9zM6 5H3v1h3V5zm0 4H3v1h3V9zM3 7h3v1H3V7zm10-2h-3v1h3V5zm-3 2h3v1h-3V7zm0 2h3v1h-3V9z" fill="currentColor"/>
                  </svg>
                  О проекте
                </a>
              </li>
              <li class="has-submenu">
                <span class="menu-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 52 52">
                      <path d="M26,2C12.7,2,2,12.7,2,26s10.7,24,24,24s24-10.7,24-24S39.3,2,26,2z M26,7C26,7,26,7,26,7C26,7,26,7,26,7 C26,7,26,7,26,7z M28,7.1c-0.1,0-0.1,0-0.2,0C27.9,7.1,28,7.1,28,7.1z M26,45C15.5,45,7,36.5,7,26c0-1,0.1-2.1,0.3-3 c1.3,0.2,2.9,0.7,3.7,1.5c1.7,1.8,3.6,3.9,5.4,4.3c0,0-0.2,0.1-0.4,0.4c-0.2,0.3-0.4,0.9-0.4,1.9c0,4.7,4.4,1.9,4.4,6.6 c0,4.7,5.3,6.6,5.3,2.8s3.5-5.6,3.5-8.5s-2.7-2.8-4.4-3.8c-1.8-0.9-2.7-2.4-6.1-1.9c-1.8-1.7-2.8-3.1-2-4.7c0.9-1.7,4.6-2,4.6-4.6 s-2.5-3.1-4.3-3.1c-0.8,0-2.5-0.6-3.9-1.3c1.7-1.7,3.8-3.1,6-4.1c1.6,0.7,4.3,1.8,6.6,1.8c2.7,0,4.1-1.9,3.7-3.1 c4.5,0.7,8.5,3,11.4,6.2c-1.5,0.9-3.5,1.9-7,1.9c-4.6,0-4.6,4.7-1.9,5.6c2.8,0.9,5.6-1.8,6.5,0c0.9,1.8-6.5,1.8-4.6,6.4 c1.9,4.6,3.7-0.1,5.6,4.5c1.9,4.6,5.6-0.7,2.8-4.3c-1.2-1.6-0.9-6.5,1.9-6.5h0.9c0.4,1.6,0.7,3.3,0.7,5C45,36.5,36.5,45,26,45z" fill="currentColor"/>
                    </svg>
                    Мироустройство
                </span>
				<ul class="submenu">
                      <li><a href="https://remain-nameless.github.io/Escupereum/Мир/Основы-мироздания/Эскуперей">Эскуперей</a></li>
                      <li class="has-submenu"> 
						<span class="menu-title">
						<a>Эстраты</a>
						</span>
						 <ul class="submenu">
                  <li><a href="https://remain-nameless.github.io/Escupereum/Мир/Основы-мироздания/Эстраты/Бездна">Бездна</a></li>
                  <li><a href="https://remain-nameless.github.io/Escupereum/Мир/Основы-мироздания/Эстраты/Резонанс">Резонанс</a></li>
                  <li><a href="https://remain-nameless.github.io/Escupereum/Мир/Основы-мироздания/Эстраты/Эфир">Эфир</a></li>
				  <li><a href="https://remain-nameless.github.io/Escupereum/Мир/Основы-мироздания/Эстраты/Синтериум">Синтериум</a></li>
						</ul>
						</li>
                  <li><a href="https://remain-nameless.github.io/Escupereum/Мир/География/География">География</a></li>
                  <li><a href="https://remain-nameless.github.io/Escupereum/tags/явления">Явления</a></li>
                  {/*<li><a href="https://remain-nameless.github.io/Escupereum/Мир/Природа">Природа</a></li>*/}
                </ul>
              </li>
              <li class="has-submenu">
                <span class="menu-title">
                  <a href="https://remain-nameless.github.io/Escupereum/Общество/Общество">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
  <path fill-rule="evenodd" d="M3.5 8a5.5 5.5 0 118.596 4.547 9.005 9.005 0 015.9 8.18.75.75 0 01-1.5.045 7.5 7.5 0 00-14.993 0 .75.75 0 01-1.499-.044 9.005 9.005 0 015.9-8.181A5.494 5.494 0 013.5 8zM9 4a4 4 0 100 8 4 4 0 000-8z"/>
  <path d="M17.29 8c-.148 0-.292.01-.434.03a.75.75 0 11-.212-1.484 4.53 4.53 0 013.38 8.097 6.69 6.69 0 013.956 6.107.75.75 0 01-1.5 0 5.193 5.193 0 00-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0017.29 8z"/>
</svg>
                    Общество
                  </a>
                </span>
                <ul class="submenu">
				{/*<li><a href="https://remain-nameless.github.io/Escupereum/Общество/Государства">Государства</a></li>*/}
					{/*<li><a href="https://remain-nameless.github.io/Escupereum/Общество/Культура">Культура</a></li>*/}
                  <li><a href="https://remain-nameless.github.io/Escupereum/Общество/Наука/Наука">Наука</a></li>
				  {/*<li><a href="https://remain-nameless.github.io/Escupereum/Общество/Организации">Организации</a></li>*/}
                  <li><a href="https://remain-nameless.github.io/Escupereum/tags/люди">Персоналии</a></li>
                  {/*<li><a href="https://remain-nameless.github.io/Escupereum/Общество/Религия">Религия</a></li>*/}
					  {/*<li><a href="https://remain-nameless.github.io/Escupereum/Общество/Народы">Народы</a></li>*/}
                </ul>
              </li>
              <li class="has-submenu">
                <span class="menu-title">
                  <a href="https://remain-nameless.github.io/Escupereum/История/История">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64" fill="currentColor">
  <path d="M60.711 52.708h-.013V11.3h.013c.712 0 1.289-.581 1.289-1.298c0-.717-.577-1.298-1.289-1.298h-.99c.193-.393.313-.83.313-1.298a2.928 2.928 0 0 0-2.918-2.938H56.03v-1.3c0-.641-.517-1.161-1.154-1.161c-.635 0-1.151.52-1.151 1.161v1.299h-1.086a2.929 2.929 0 0 0-2.919 2.938c0 .469.119.905.313 1.298h-.99a1.3 1.3 0 0 0-1.079 2.006c-2.93.49-9.125 1.347-16.631 1.347c-5.428 0-10.548-.47-15.297-1.347c.135-.205.214-.45.214-.714c0-.718-.578-1.298-1.289-1.298h-.992c.194-.394.313-.831.313-1.299a2.927 2.927 0 0 0-2.917-2.938h-1.086V3.162A1.159 1.159 0 0 0 9.125 2c-.638 0-1.154.52-1.154 1.162V4.46H6.885c-1.611 0-2.916 1.315-2.916 2.938c0 .469.119.906.313 1.299h-.993C2.577 8.697 2 9.277 2 9.995c0 .716.577 1.298 1.289 1.298h.013V52.7h-.013C2.577 52.7 2 53.281 2 53.997c0 .719.577 1.299 1.289 1.299h.991a2.95 2.95 0 0 0-.312 1.299c0 1.623 1.305 2.938 2.916 2.938H7.97v1.299c0 .642.517 1.162 1.154 1.162c.637 0 1.153-.521 1.153-1.162v-1.299h1.084a2.928 2.928 0 0 0 2.919-2.938c0-.469-.119-.905-.313-1.299h.992c.69 0 1.252-.55 1.284-1.239c3.187.52 9.226 1.312 16.421 1.312c5.329 0 10.392-.432 15.097-1.277a1.289 1.289 0 0 0 1.28 1.213h.99c-.194.393-.313.83-.313 1.299a2.93 2.93 0 0 0 2.919 2.938h1.086v1.299c0 .641.517 1.161 1.151 1.161c.638 0 1.154-.521 1.154-1.161V59.54h1.086c1.611 0 2.916-1.315 2.916-2.938c0-.469-.119-.906-.312-1.299h.991c.712 0 1.289-.581 1.289-1.299a1.29 1.29 0 0 0-1.287-1.296m-9.783-.937V12.237h7.896V51.77h-7.896zm-37.856-.008H5.177V12.231h7.896v39.532zm1.875.166V12.441c5.062.989 10.567 1.49 16.385 1.49c8.328 0 15.122-1.045 17.717-1.506v39.514c-5.041 1.032-10.549 1.554-16.384 1.554c-8.597 0-15.513-1.15-17.718-1.564"/>
  <path d="M31.998 17.816c-8.457 0-13.089-1.373-13.135-1.386l-.273.897c.192.058 4.795 1.427 13.408 1.427c9.195 0 13.639-1.37 13.822-1.428l-.281-.894c-.044.013-4.489 1.384-13.541 1.384"/>
  <path d="M31.998 22.098c-8.457 0-13.089-1.373-13.135-1.386l-.273.897c.192.058 4.795 1.426 13.408 1.426c9.195 0 13.639-1.37 13.822-1.428l-.281-.894c-.044.014-4.489 1.385-13.541 1.385"/>
  <path d="M31.998 26.379c-8.457 0-13.089-1.372-13.135-1.386l-.273.897c.192.058 4.795 1.426 13.408 1.426v-.937"/>
  <path d="M31.998 34.941c-2.291 0-4.509-.1-6.592-.297l-.088.934c2.111.199 4.359.301 6.68.301c9.195 0 13.638-1.369 13.822-1.428l-.281-.895c-.044.015-4.489 1.385-13.541 1.385"/>
  <path d="M31.998 39.224c-8.457 0-13.089-1.372-13.135-1.386l-.273.896c.192.059 4.795 1.427 13.408 1.427c9.195 0 13.639-1.37 13.822-1.429l-.281-.893c-.044.015-4.489 1.385-13.541 1.385"/>
  <path d="M31.998 43.506c-8.457 0-13.089-1.373-13.135-1.387l-.273.897c.192.058 4.795 1.427 13.408 1.427c9.195 0 13.639-1.37 13.822-1.429l-.281-.894c-.044.015-4.489 1.386-13.541 1.386"/>
  <path d="M18.59 47.298c.192.058 4.795 1.426 13.408 1.426v-.938c-8.457 0-13.089-1.372-13.135-1.386l-.273.898"/>
</svg>
                    История
                  </a>
                </span>
                <ul class="submenu">
                  <li class="has-submenu">
					<span class="menu-title">
						<a href="https://remain-nameless.github.io/Escupereum/История/Мировая/Мировая-история">Мировая история</a>
					</span>
						<ul class="submenu">
							<li><a href="https://remain-nameless.github.io/Escupereum/История/Мировая/I-Аркейв.-Энодиум">I Аркейв. Энодиум</a></li>
							<li><a href="https://remain-nameless.github.io/Escupereum/История/Мировая/II-Аркейв.-Великий-Коллапс">II Аркейв. Великий Коллапс</a></li>
							<li><a href="https://remain-nameless.github.io/Escupereum/История/Мировая/III-Аркейв.-Новая-эра">III Аркейв. Новая эра</a></li>
							{/*<li><a href="https://remain-nameless.github.io/Escupereum/История/Мировая/IV-Аркейв.-Преддверие-Второго-Коллапса">IV Аркейв. Преддверие Второго Коллапса</a></li>*/}
							{/*<li><a href="https://remain-nameless.github.io/Escupereum/История/Мировая/V-Аркейв.-Ранняя-Реставрация">V Аркейв. Ранняя Реставрация</a></li>*/}
							{/*<li><a href="https://remain-nameless.github.io/Escupereum/История/Мировая/VI-Аркейв.-Поздняя-Реставрация">VI Аркейв. Поздняя Реставрация</a></li>*/}
							{/*<li><a href="https://remain-nameless.github.io/Escupereum/История/Мировая/VII-Аркейв.-Серая-эра">VII Аркейв. Серая эра</a></li>*/}
						</ul>			
				  </li>
				  <li><a href="https://remain-nameless.github.io/Escupereum/История/История-человечества/История-человечества">История человечества</a></li>
                  {/*<li class="has-submenu">
					<span class="menu-title">
						<a href="https://remain-nameless.github.io/Escupereum/История/История-человечества">История человечества</a>
				  </span>*/}
					{/*<ul class="submenu">
							<li><a href="https://remain-nameless.github.io/Escupereum/История/История-человечества/Эпоха-Первых-Царств">Эпоха Первых Царств</a></li>
							<li><a href="https://remain-nameless.github.io/Escupereum/История/История-человечества/Эпоха-Закона">Эпоха Закона</a></li>
							<li><a href="https://remain-nameless.github.io/Escupereum/История/История-человечества/Эпоха-Мечей">Эпоха Мечей</a></li>
							<li><a href="https://remain-nameless.github.io/Escupereum/История/История-человечества/Эпоха-Пороха">Эпоха Пороха</a></li>
							<li><a href="https://remain-nameless.github.io/Escupereum/История/История-человечества/Эпоха-Машин">Эпоха Машин</a></li>
							<li><a href="https://remain-nameless.github.io/Escupereum/История/История-человечества/Эпоха-Знаний">Эпоха Знаний</a></li>
							<li><a href="https://remain-nameless.github.io/Escupereum/История/История-человечества/Эпоха-Реставрации">Эпоха Реставрации</a></li>
					</ul>
				  </li>*/}
                </ul>
              </li>
              <li>
                <a class="random-page-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                    <g fill="currentColor">
                      <path d="M5 4a1 1 0 000 2h.01a1 1 0 000-2H5zM7 8a1 1 0 011-1h.01a1 1 0 010 2H8a1 1 0 01-1-1zM11.01 10a1 1 0 100 2h.01a1 1 0 100-2h-.01z"/>
                      <path fill-rule="evenodd" d="M3.25 1A2.25 2.25 0 001 3.25v9.5A2.25 2.25 0 003.25 15h9.5A2.25 2.25 0 0015 12.75v-9.5A2.25 2.25 0 0012.75 1h-9.5zM2.5 3.25a.75.75 0 01.75-.75h9.5a.75.75 0 01.75.75v9.5a.75.75 0 01-.75.75h-9.5a.75.75 0 01-.75-.75v-9.5z" clip-rule="evenodd"/>
                    </g>
                  </svg>
                  Случайная страница
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="header-hr mobile-only" style="background-color: var(--lightgray); border-top: 1px var(--lightgray) solid; margin-top: 1.3rem" />
      </div>
    )
  }

  LinksHeader.css = style
  LinksHeader.afterDOMLoaded = script
  return LinksHeader
}) satisfies QuartzComponentConstructor