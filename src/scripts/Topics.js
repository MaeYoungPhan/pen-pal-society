import { getTopics, setTopic } from "./dataAccess.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "topic") {
            setTopic(parseInt(event.target.value))
        }
    }
)

export const Topics = () => {
    const topics = getTopics()
    let html = `<p class="topics--items">`

    //converting to p elements so they can be arranged easily in a row
    for (const topic of topics) {
        html += `
            <input type="radio" name="topic" value="${topic.id}" /> ${topic.topic}
        `
    }

    html += "</p>"
    return html
}