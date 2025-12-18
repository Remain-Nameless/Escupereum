import { Root as HTMLRoot } from "hast"
import { toString } from "hast-util-to-string"
import { QuartzTransformerPlugin } from "../types"
import { escapeHTML } from "../../util/escape"

export interface Options {
  descriptionLength: number
  maxDescriptionLength: number
  replaceExternalLinks: boolean
  excludeTags: string[] // Новая опция для исключения тегов
}

const defaultOptions: Options = {
  descriptionLength: 150,
  maxDescriptionLength: 300,
  replaceExternalLinks: true,
  excludeTags: ["explorerexclude"], // Добавляем тег по умолчанию
}

const urlRegex = new RegExp(
  /(https?:\/\/)?(?<domain>([\da-z\.-]+)\.([a-z\.]{2,6})(:\d+)?)(?<path>[\/\w\.-]*)(\?[\/\w\.=&;-]*)?/,
  "g",
)

// Функция для удаления тегов из текста
const removeExcludedTags = (text: string, excludeTags: string[]): string => {
  if (!excludeTags || excludeTags.length === 0) return text
  
  let cleanedText = text
  for (const tag of excludeTags) {
    // Удаляем тег в разных форматах: #explorerexclude, explorerexclude
    const tagRegex = new RegExp(`#?${tag}\\b`, "gi")
    cleanedText = cleanedText.replace(tagRegex, "")
    
    // Также удаляем подтеги: #explorerexclude/subtag
    const subtagRegex = new RegExp(`#?${tag}/[\\w-]+\\b`, "gi")
    cleanedText = cleanedText.replace(subtagRegex, "")
  }
  
  // Убираем лишние пробелы, которые могли образоваться после удаления тегов
  cleanedText = cleanedText.replace(/\s+/g, " ").trim()
  
  return cleanedText
}

export const Description: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "Description",
    htmlPlugins() {
      return [
        () => {
          return async (tree: HTMLRoot, file) => {
            let frontMatterDescription = file.data.frontmatter?.description
            let text = escapeHTML(toString(tree))

            // УДАЛЯЕМ ТЕГИ: Применяем фильтрацию к тексту
            if (opts.excludeTags && opts.excludeTags.length > 0) {
              text = removeExcludedTags(text, opts.excludeTags)
              if (frontMatterDescription) {
                frontMatterDescription = removeExcludedTags(frontMatterDescription, opts.excludeTags)
              }
            }

            if (opts.replaceExternalLinks) {
              frontMatterDescription = frontMatterDescription?.replace(
                urlRegex,
                "$<domain>" + "$<path>",
              )
              text = text.replace(urlRegex, "$<domain>" + "$<path>")
            }

            if (frontMatterDescription) {
              file.data.description = frontMatterDescription
              file.data.text = text
              return
            }

            // otherwise, use the text content
            const desc = text
            const sentences = desc.replace(/\s+/g, " ").split(/\.\s/)
            let finalDesc = ""
            let sentenceIdx = 0

            // Add full sentences until we exceed the guideline length
            while (sentenceIdx < sentences.length) {
              const sentence = sentences[sentenceIdx]
              if (!sentence) break

              const currentSentence = sentence.endsWith(".") ? sentence : sentence + "."
              const nextLength = finalDesc.length + currentSentence.length + (finalDesc ? 1 : 0)

              // Add the sentence if we're under the guideline length
              // or if this is the first sentence (always include at least one)
              if (nextLength <= opts.descriptionLength || sentenceIdx === 0) {
                finalDesc += (finalDesc ? " " : "") + currentSentence
                sentenceIdx++
              } else {
                break
              }
            }

            // truncate to max length if necessary
            file.data.description =
              finalDesc.length > opts.maxDescriptionLength
                ? finalDesc.slice(0, opts.maxDescriptionLength) + "..."
                : finalDesc
            file.data.text = text
          }
        },
      ]
    },
  }
}

declare module "vfile" {
  interface DataMap {
    description: string
    text: string
  }
}
