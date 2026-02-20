import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"
// Импортируем скрипт для случайной страницы
// @ts-ignore
import script from "./scripts/randomPage.inline"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <ul>
          <li>
            <a href="#">
              В начало страницы ↑
            </a> 
			</li>
			<li>
            {/* ВАЖНО: id должен быть именно таким, как в скрипте */}
            <a id="random-page-button">
              Случайная страница 🎲
            </a>
          </li>
        </ul>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li key={link}>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
		<p>
		{i18n(cfg.locale).components.footer.createdWith}{" "}
        <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>
        {/* Блок с дополнительными ссылками */}
      </footer>
    )
  }

  Footer.css = style
  // Подключаем скрипт к футеру
  Footer.afterDOMLoaded = script
  return Footer
}) satisfies QuartzComponentConstructor