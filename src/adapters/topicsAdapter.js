class TopicsAdapter {
    constructor() {
        this.baseURL = 'http://localhost:3000/topics'
    }

    getTopics() {
        return fetch(this.baseURL)
        .then(res => res.json())
    }

    // Cards

    createCard(question, id) {
        const card = {
           question: question
        }
        return fetch(`${this.baseURL}/${id}/cards`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({card})
        })
        .then(res => res.json())
    }
}