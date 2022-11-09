//set variable to talk with json
const applicationState = {
    authors: [],
    recipients: [],
    topics: [],
    letters: [],
    letterBuilder: {}
}

const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (sentLetters) => {
                //store the external state in application state
                applicationState.letters = sentLetters
            }
        )
}

export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}

export const sendLetter = (userLetter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLetter)
    }


    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.authors = data
            }
        )
}

export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}

export const setAuthor = (id) => {
    applicationState.letterBuilder.authorId = id
}

export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.recipients = data
            }
        )
}

export const getRecipients = () => {
    return applicationState.recipients.map(clown => ({...clown}))
}

export const setRecipient = (id) => {
    applicationState.letterBuilder.recipientId = id
}

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.topics = data
            }
        )
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}

export const setTopic = (id) => {
    applicationState.letterBuilder.topicId = id
}

export const getNewLetters = () => {
    return {...applicationState.letterBuilder}
}

export const resetLetterBuilder = () => {
   return applicationState.letterBuilder = {}
}
