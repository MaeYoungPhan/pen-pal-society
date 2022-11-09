import { getLetters } from "./dataAccess.js"
import { getAuthors } from "./dataAccess.js"
import { getRecipients } from "./dataAccess.js"
import { getTopics } from "./dataAccess.js"

const convertLetterToHTML = (letter) => {
const authors =getAuthors()
const recipients =getRecipients()
const topics =getTopics()
    
// Remember that the function you pass to find() must return true/false
    const foundAuthor = authors.find(
    (author) => {
        return author.id === letter.authorId})
    let aName = foundAuthor.name
    let aEmail = foundAuthor.email

    const foundRecipient = recipients.find(
        (recipient) => {
            return recipient.id === letter.recipientId})
            let rName = foundRecipient.name
            let rEmail = foundRecipient.email
    
    const foundTopic = topics.find(
        (topic) => {
            return topic.id === letter.topicId})
            let lTopic = foundTopic.topic

    let letterHTML = `<div class="userLetter">
            <p>Dear ${rName} (${rEmail}),</p>
            <p> ${letter.correspondence}</p>
            <p>Sincerely, ${aName} (${aEmail})</p>
            <p> Sent on ${letter.date} </p>
            <p class="userTopic"> ${lTopic} </p>
            </div> `

    return letterHTML
}

export const Letters = () => {
    const letters = getLetters()

    let html = `<article>
    ${letters.sort(function(a,b){ return new Date(a.date) - new Date(b.date)}).map(convertLetterToHTML).join("")}
    </article>`

    return html
}

const mainContainer = document.querySelector("#container")