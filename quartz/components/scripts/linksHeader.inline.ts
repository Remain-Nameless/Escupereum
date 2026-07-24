// quartz/components/scripts/linksHeader.inline.ts
document.addEventListener("nav", () => {
  const container = document.querySelector(".links-header-container")
  const toggle = container?.querySelector(".links-header-toggle")
  const content = container?.querySelector(".links-header-content")
  if (!toggle || !content) return

  const updateAria = () => {
    const expanded = content.classList.contains("expanded")
    toggle.setAttribute("aria-expanded", String(expanded))
    content.setAttribute("aria-expanded", String(expanded))
  }

  toggle.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()
    content.classList.toggle("expanded")
    updateAria()
  })

  document.addEventListener("click", (e) => {
    if (!container?.contains(e.target as Node)) {
      content.classList.remove("expanded")
      updateAria()
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      content.classList.remove("expanded")
      updateAria()
    }
  })

  const isMobile = () => window.matchMedia("(max-width: 768px)").matches

  const handleSubmenuClick = (e: MouseEvent) => {
    if (!isMobile()) return

    const target = e.target as HTMLElement
    if (target.tagName === 'A' || target.closest('a')) return

    const title = e.currentTarget as HTMLElement
    const parent = title.closest(".has-submenu")
    if (!parent) return

    e.preventDefault()
    e.stopPropagation()

    const siblings = Array.from(parent.parentNode?.children || []).filter(
      child => child !== parent && child.classList.contains('has-submenu')
    )
    siblings.forEach(sib => sib.classList.remove('open'))

    parent.classList.toggle('open')
  }

  const attachSubmenuHandlers = () => {
    const submenuTitles = document.querySelectorAll<HTMLElement>(".has-submenu > .menu-title")
    submenuTitles.forEach((title) => {
      title.removeEventListener("click", handleSubmenuClick)
      title.addEventListener("click", handleSubmenuClick)
    })
  }

  attachSubmenuHandlers()

  // Сброс всех открытых подменю на мобильных при загрузке
  if (isMobile()) {
    document.querySelectorAll(".has-submenu.open").forEach(el => el.classList.remove("open"))
  }

  const resetSubmenus = () => {
    if (!isMobile()) {
      document.querySelectorAll(".has-submenu.open").forEach(el => el.classList.remove("open"))
    }
  }

  window.addEventListener("resize", resetSubmenus)
  resetSubmenus()
})