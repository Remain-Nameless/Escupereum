// quartz/components/scripts/explorerExcludeClass.inline.ts
import { FullSlug, simplifySlug } from "../../util/path"

document.addEventListener("nav", () => {
  // Получаем текущий slug из URL
  const currentSlug = window.location.pathname.replace(/^\/+|\/+$/g, '') || 'index'
  
  // Данные всех страниц, которые Quartz делает доступными
  const data = (window as any).fetchData
  if (data && data[currentSlug]) {
    const tags = data[currentSlug].frontmatter?.tags
    const hasExplorerExclude = tags && (Array.isArray(tags) ? tags.includes("explorerexclude") : tags === "explorerexclude")
    
    if (hasExplorerExclude) {
      document.body.classList.add('tag-explorerexclude')
    } else {
      document.body.classList.remove('tag-explorerexclude')
    }
  }
})