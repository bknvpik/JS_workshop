class EventComponent {
  event = null;

  template({ bannerUrl, title, body }) {
    return `
    <div class="event" data-type="component">
      <img src="${bannerUrl}" alt="" />
        <h2>${title}</h2>
        <p>${body}</p>
    </div>`;
  }

  render($container) {
    // Compile
    const $component = compile(this.template(this.event));
    // Rendering
    $container.append($component);
  }
}
