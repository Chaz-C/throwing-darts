module.exports = function scoreThrows(array) {
  let score = 0;
  let bonus = 0;

  for (let i = 0; i < array.length; i++) {

    if ( typeof array[i] !== 'number' || typeof array !== 'object' || array[i] < 1 ) {
      return false;
    }

    if ( array[i] > 10 ) {
      score += 0;
    } else if ( array[i] > 4 ) {
      score += 5;
    } else {
      bonus += 1;
      score += 10;
    }
  }
  if ( bonus === array.length ) {
    score += 100;
  }
  return score;
};