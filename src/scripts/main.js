function main() {
    const $eventList = document.querySelector('.event-list');
    const $search = document.querySelector('#search');

    for(let i = 0; i < 3; i++) {
        const event = new EventComponent();
        event.render($eventList);
    }
    
    const search = new SearchComponent();
    search.render($search);
}

window.addEventListener('DOMContentLoaded', main);
