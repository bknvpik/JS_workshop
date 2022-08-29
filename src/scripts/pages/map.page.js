class MapPage {
  template() {
    return `
    <div id="map-page">
      <h3>This is a map page</h3>
    </div>`;
  }

  render($container) {
    const $component = compile(this.template());
    $container.append($component);
  }
}