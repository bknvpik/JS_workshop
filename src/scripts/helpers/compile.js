/**
 *
 * @param {string} template
 * @returns {Element|null}
 */
export function compile(template) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(template, 'text/html');
  return doc.body.firstElementChild;
}
