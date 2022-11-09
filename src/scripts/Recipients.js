import { getRecipients, setRecipient } from "./dataAccess.js"


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "recipients") {
            setRecipient(parseInt(changeEvent.target.value))
        }
    }
)

export const Recipients = () => {
    const recipients = getRecipients()
    let html = `<select class="recipients" id="recipients">
    <option value="">To whom ... </option>
    ${recipients.map(
    recipient => {
        return `<option value="${recipient.id}--${recipient.id}">${recipient.name}</option>`
    }).join("")}
    </select>`
    return html}

    