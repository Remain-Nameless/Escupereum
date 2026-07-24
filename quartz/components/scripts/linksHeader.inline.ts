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
    content.classList.toggle("expanded")
    updateAria()
  })
})