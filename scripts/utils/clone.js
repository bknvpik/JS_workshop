// Shallow Copy
function cloneWithSpread(object) {
  // Spread operator
  return { ...object };
}

function cloneWithJSON(object) {
  // Deserialize
  return JSON.parse(
    // Serialize
    JSON.stringify(object),
  );
}

function cloneWithAssign(object) {
  return Object.assign({}, object);
}
