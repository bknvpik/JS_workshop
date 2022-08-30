// Shallow Copy
export function cloneWithSpread(object) {
  // Spread operator
  return { ...object };
}

export function cloneWithJSON(object) {
  // Deserialize
  return JSON.parse(
    // Serialize
    JSON.stringify(object),
  );
}

export function cloneWithAssign(object) {
  return Object.assign({}, object);
}
