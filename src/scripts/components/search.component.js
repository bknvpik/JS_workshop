import { compile } from '../helpers/compile';

export class SearchComponent {
  template() {
    return `
    <form class="search-control">
      <input class="search-input" />
      <input class="search-button" type="submit" value="Search" />
    </form>`;
  }

  render($container) {
    const $component = compile(this.template());
    $container.append($component);
  }
}
