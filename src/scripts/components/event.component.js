class EventComponent {
    template() {
        return `
        <div class="event" data-type="component">
            <img src="https://picsum.photos/id/40/300/150" alt="" />
            <h2>Workshop z JavaScript</h2>
            <p>Szkolenie porusza zaawansowane techniki</p>
        </div>`;
    }
    
    render($container) {
        const $component = compile(this.template());
        $container.append($component);
    }
}
