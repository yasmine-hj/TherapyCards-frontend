class Card {
    constructor(card){
        this.id = card.id
        this.question = card.question
        this.response = card.response
        this.topicID = card.topic_id
    }

    // renderQuestionCardHTML(){
    //     return `<button type="button" id="topic-button">
    //                  <div class="topic-card" data-id=${this.id}> 
    //                        <h3 class="therapy-content">${this.question}</h3>
    //                   </div>
    //              </button>
    //              `
    // }

    // renderResponseCardHTML(){
    //     return `<h2 id="response" Your thoughts: ${this.response}</h2>`
    // }
}