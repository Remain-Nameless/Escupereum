import { FullSlug, getFullSlug, pathToRoot, simplifySlug } from "../../util/path"

async function navigateToRandomPage() {
    const fullSlug = getFullSlug(window)
    const data = await fetchData
    // Получаем список всех существующих страниц
    const allPosts = Object.keys(data).map((slug) => simplifySlug(slug as FullSlug))
    
    // Если нет страниц – ничего не делаем
    if (allPosts.length === 0) return

    // Генерируем случайный индекс от 0 до allPosts.length-1
    const randomIndex = Math.floor(Math.random() * allPosts.length)
    const randomSlug = allPosts[randomIndex]
    
    // Формируем корректный относительный путь
    window.location.href = `${pathToRoot(fullSlug)}/${randomSlug}`
}

document.addEventListener("nav", async (e: unknown) => {
  const slug = (e as CustomEventMap["nav"]).detail.url
  const button = document.getElementById("random-page-button")
  button?.removeEventListener("click", navigateToRandomPage)
  button?.addEventListener("click", navigateToRandomPage)
})