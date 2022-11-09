import { sendLetter } from "./dataAccess.js"
import { Authors } from "./Authors.js"
import { Recipients } from "./Recipients.js"
import { Topics } from "./Topics.js"
import { getNewLetters } from "./dataAccess.js"
import { resetLetterBuilder } from "./dataAccess.js"


export const LetterForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="author">Author</label>
            ${Authors()}
        </div>
        <div class="field">
            <label class="label" for="correspondence">Letter</label>
            <input type="text" name="correspondence" class="input" />
        </div>
        <div class="field">
            <label class="label" for="topics">Topics</label>
            ${Topics()}
        </div>
        <div class="field">
            <label class="label" for="recipient">Recipient</label>
            ${Recipients()}
        <button class="button" id="send">Send</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "send") {
        // Get what the user typed into the form fields
        const newLetterToAPI = getNewLetters()
        const letterBody = document.querySelector("input[name='correspondence']").value
        
        // Make an object out of the user input
        newLetterToAPI.correspondence = letterBody
        newLetterToAPI.date = Date()
        

        // Send the data to the API for permanent storage
        sendLetter(newLetterToAPI)

        resetLetterBuilder()
    }
})

// export const addCustomOrder = () => {
//     // Copy the current state of user choices
//     const newOrder = {...database.orderBuilder}

//     // Add a new primary key to the object
//     const lastIndex = database.customOrders.length - 1
//     newOrder.id = database.customOrders[lastIndex].id + 1

//     // Add a timestamp to the order
//     newOrder.timestamp = Date.now()

//     // Add the new order object to custom orders state
//     database.customOrders.push(newOrder)

//     // Reset the temporary state for user choices
//     database.orderBuilder = {}

//     // Broadcast a notification that permanent state has changed
//     document.dispatchEvent(new CustomEvent("stateChanged"))
// }