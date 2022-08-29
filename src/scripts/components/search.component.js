class SearchComponent {
    template() {
        return `
        <form class="search-control">
            <input class="search-input" />
            <input class="search-button" type="submit" value="Search" />
        </form>`;
    }
    
    render($container) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(this.template(), "text/html");
        const $component = doc.body.firstElementChild;
        
        $container.append($component);
    }
}
