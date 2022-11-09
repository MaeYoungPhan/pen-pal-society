import { getAuthors, setAuthor } from "./dataAccess.js"


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "authors") {
            setAuthor(parseInt(changeEvent.target.value))
        }
    }
)

export const Authors = () => {
    const authors = getAuthors()
    let html = `<select class="authors" id="authors">
    <option value="">From whom ... </option>
    ${authors.map(
    author => {
        return `<option value="${author.id}">${author.name}</option>`
    }).join("")}
    </select>`
    return html}