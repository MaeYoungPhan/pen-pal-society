import { PenPalSociety } from "./PenPalSociety.js"
import { fetchLetters } from "./dataAccess.js"
import { fetchAuthors } from "./dataAccess.js"
import { fetchRecipients } from "./dataAccess.js"
import { fetchTopics } from "./dataAccess.js"



const mainContainer = document.querySelector("#container")

const render = () => {
    fetchLetters()
        .then(() => fetchAuthors())
        .then(() => fetchRecipients())
        .then(() => fetchTopics())
        .then(
            () => {
                mainContainer.innerHTML = PenPalSociety()
            }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)