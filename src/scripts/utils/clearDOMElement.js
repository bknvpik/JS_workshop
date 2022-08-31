export function clearDOMElement($container) {
  // console.time("clear DOM tree with innerHTML property");
  // $outlet.innerHTML = "";
  // console.timeEnd("clear DOM tree with innerHTML property");

  // console.time("clear DOM tree with removeChild function");
  while ($container.firstElementChild) {
    $container.removeChild($container.firstElementChild);
  }
  // console.timeEnd("clear DOM tree with removeChild function");

  // console.time('clear DOM tree with remove function');
  // while ($outlet.firstElementChild) {
  //   $outlet.firstElementChild.remove();
  // }
  // console.timeEnd('clear DOM tree with remove function');
}
