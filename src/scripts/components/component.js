import { compile } from '../helpers/compile';

export class Component {
  template() {
    return '';
  }

  render($container) {
    // Compile
    const $component = compile(this.template());
    // Rendering
    $container.append($component);
  }
}
