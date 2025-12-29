import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = (props: QuartzComponentProps) => {
  const { fileData, cfg, displayClass } = props
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class="page-title-container">
	      <div class="title-logo">
          <a href={baseDir}>
            <img id="icon-header" src={"https://mywebicons.ru/i/jpg/dd7ffa45587f76d73838e225293260de.jpg"} alt="" />
          </a>
		  </div>
      <h1 class={classNames(displayClass, "page-title")}>
          <a href={baseDir} class={displayClass} id="header-text">
            {title}
          </a>
      </h1>
    </div>
  )
}

PageTitle.css = `
.page-title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
}

.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
.title-logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}
`
export default (() => PageTitle) satisfies QuartzComponentConstructor
