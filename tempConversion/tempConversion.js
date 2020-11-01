const ftoc = function() {
  let f = arguments[0];
  let final = (f - 32) * (5 / 9);

  return parseFloat(final.toFixed(1));

}

const ctof = function() {
  let c = arguments[0];
  let final = (c * 9 / 5) + 32.0

  return parseFloat(final.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
