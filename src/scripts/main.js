function main() {
    const eventList = document.querySelector('.events-list');
    
    for(let i = 0; i < 3; i++) {
        const evt = new EventComponent();
        evt.render(eventList);
    }
}

window.addEventListener('DOMContentLoaded', main);
