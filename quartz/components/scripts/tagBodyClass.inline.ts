// quartz/components/scripts/tagBodyClass.inline.ts
document.addEventListener("nav", () => {
  const slug = window.location.pathname.replace(/^\/+|\/+$/g, '') || 'index'
  const data = (window as any).fetchData
  if (data && data[slug]) {
    const tags = data[slug].frontmatter?.tags
    const hasExclude = tags && (Array.isArray(tags) ? tags.includes("explorerexclude") : tags === "explorerexclude")
    document.body.classList.toggle('tag-explorerexclude', hasExclude)
  }
})