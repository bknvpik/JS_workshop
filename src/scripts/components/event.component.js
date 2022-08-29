class EventComponent {
    constructor() {
        console.log("Class EventComponent");
    }
    
    template() {
        return `
        <div class="event" data-type="component">
            <img src="https://picsum.photos/id/40/300/150" alt="" />
            <h2>Workshop z JavaScript</h2>
            <p>Szkolenie porusza zaawansowane techniki</p>
        </div>`;
    }
    
    render(placeholder) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(this.template(), "text/html");
        const component = doc.body.firstElementChild;
        
        placeholder.append(component);
    }
}
