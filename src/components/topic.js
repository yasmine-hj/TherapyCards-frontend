class Topic {
    constructor(topic) {
        this.id = topic.id
        this.name = topic.name
        this.cards = topic.cards ? topic.cards : []
    }

    renderTopicName() {
        return `
           <button type="button" class="topics-button" id="topics-button">
                <div class="topic-cards" data-id=${this.id}> 
                    <h3 class="therapy-topic-category">${this.name}</h3>
                </div>
            </button>
               `
    }

    renderTopic(){
        returns `        
            ${this.renderTopicName()}
        `
    }
}