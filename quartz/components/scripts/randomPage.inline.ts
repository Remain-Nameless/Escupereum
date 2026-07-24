import { FullSlug, getFullSlug, pathToRoot, simplifySlug } from "../../util/path"

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

function isValidUrl(newSlug: string, oldSlug: string) {
  return oldSlug !== newSlug && !newSlug.includes("/contributing/")
}

async function navigateToRandomPage() {
    const fullSlug = getFullSlug(window)
    const data = await fetchData
    const allPosts = Object.keys(data).map((slug) => simplifySlug(slug as FullSlug))
    let newSlug = `${pathToRoot(fullSlug)}/${allPosts[getRandomInt(allPosts.length)]}`;

    while (!isValidUrl(newSlug, fullSlug)) {
      newSlug = `${pathToRoot(fullSlug)}/${allPosts[getRandomInt(allPosts.length)]}`;
    }
    window.location.href = newSlug;
}

document.addEventListener("nav", async () => {
  const buttons = document.querySelectorAll(".random-page-button")
  buttons.forEach(button => {
    button.removeEventListener("click", navigateToRandomPage)
    button.addEventListener("click", navigateToRandomPage)
  })
})