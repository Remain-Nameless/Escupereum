import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import breadcrumbsStyle from "./styles/breadcrumbs.scss"
import { FullSlug, SimpleSlug, resolveRelative, simplifySlug } from "../util/path"
import { classNames } from "../util/lang"
import { trieFromAllFiles } from "../util/ctx"

type CrumbData = {
  displayName: string
  path: string
}

interface BreadcrumbOptions {
  spacerSymbol: string
  rootName: string
  resolveFrontmatterTitle: boolean
  showCurrentPage: boolean
}

const defaultOptions: BreadcrumbOptions = {
  spacerSymbol: "❯",
  rootName: "Главная",
  resolveFrontmatterTitle: true,
  showCurrentPage: false,
}

function formatCrumb(displayName: string, baseSlug: FullSlug, currentSlug: SimpleSlug): CrumbData {
  return {
    displayName: displayName.replaceAll("-", " "),
    path: resolveRelative(baseSlug, currentSlug),
  }
}

export default ((opts?: Partial<BreadcrumbOptions>) => {
  const options: BreadcrumbOptions = { ...defaultOptions, ...opts }

  const Breadcrumbs: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
    ctx,
  }: QuartzComponentProps) => {
    const trie = (ctx.trie ??= trieFromAllFiles(allFiles))
    const slugParts = fileData.slug!.split("/")
    const pathNodes = trie.ancestryChain(slugParts)

    if (!pathNodes) {
      return null
    }

    // Создаём карту для быстрого поиска файла по слагу
    const fileMap = new Map(allFiles.map(f => [f.slug, f]))

    // Фильтруем узлы, исключая страницы с тегом "explorerexclude"
    const filteredPathNodes = pathNodes.filter(node => {
      const file = fileMap.get(node.slug)
      // Если файл не найден (например, папка) — оставляем
      if (!file) return true
      // Проверяем наличие тега в frontmatter
      const tags = file.frontmatter?.tags
      return !(Array.isArray(tags) && tags.includes("explorerexclude"))
    })

    if (filteredPathNodes.length === 0) {
      return null
    }

    // Формируем крошки из отфильтрованных узлов
    const crumbs: CrumbData[] = filteredPathNodes.map((node, idx) => {
      const crumb = formatCrumb(node.displayName, fileData.slug!, simplifySlug(node.slug))
      if (idx === 0) {
        crumb.displayName = options.rootName
      }
      // Для последнего узла путь оставляем пустым (текущая страница)
      if (idx === filteredPathNodes.length - 1) {
        crumb.path = ""
      }
      return crumb
    })

    // Удаляем последний элемент, если не нужно показывать текущую страницу
    if (!options.showCurrentPage && filteredPathNodes.length > 0) {
      crumbs.pop()
    }

    return (
      <nav class={classNames(displayClass, "breadcrumb-container")} aria-label="breadcrumbs">
        {crumbs.map((crumb, index) => (
          <div class="breadcrumb-element" key={crumb.path}>
            <a href={crumb.path}>{crumb.displayName}</a>
            {index !== crumbs.length - 1 && <p>{` ${options.spacerSymbol} `}</p>}
          </div>
        ))}
      </nav>
    )
  }

  Breadcrumbs.css = breadcrumbsStyle
  return Breadcrumbs
}) satisfies QuartzComponentConstructor