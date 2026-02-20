// quartz/components/ExplorerExcludeClass.tsx
import { QuartzComponentConstructor } from "./types"
import script from "./scripts/explorerExcludeClass.inline"

export default (() => {
  function ExplorerExcludeClass() {
    return null // компонент не рендерит ничего
  }

  ExplorerExcludeClass.afterDOMLoaded = script
  return ExplorerExcludeClass
}) satisfies QuartzComponentConstructor