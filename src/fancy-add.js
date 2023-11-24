/**
 * A more complex function used to demonstrate mutation testing.
 */
function add(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    throw new Error('Both arguments must be numbers!');
  }
}

module.exports = add;