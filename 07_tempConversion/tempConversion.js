const ftoc = function(fTemp) {
  let cTemp = (fTemp - 32)/1.8;
  return Math.round(10*cTemp)/10;
};

const ctof = function(cTemp) {
  let fTemp = (cTemp*1.8) + 32;
  return Math.round(10*fTemp)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
