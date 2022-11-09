import { LetterForm } from "./LetterForm.js"
import { Letters } from "./Letters.js"

export const PenPalSociety = () => {
    return `
    <h1>Donkey's Pen Pal Society</h1>
    <section class="letterForm">
        ${LetterForm()}
    </section>
    <h2 class="letter_header">Letters</h2>
    <section class="letters">
        ${Letters()}
    </section>
    `
}