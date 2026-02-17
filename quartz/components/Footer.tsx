import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"
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
          <li>
            <a href="#">
            В начало страницы ↑
            </a> 
          </li>	  
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
		<p></p> 
        <ul>
      {/* check displayclass exist, check value, render */}
      {displayClass && !displayClass.includes('mobile-only') && (
      <li>
        <a id="random-page-button-mobile">
        Random Page 🎲
        </a>
      </li>
      )}
      {displayClass && !displayClass.includes('desktop-only') && (
      <li>
        <a id="random-page-button-desktop">
        Random Page 🎲
        </a>
      </li>
      )}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
