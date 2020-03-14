/*
DESCRIPTION:
    You live in the city of Cartesia where all roads are laid out in a perfect grid.
    You arrived ten minutes too early to an appointment,
    so you decided to take the opportunity to go for a short walk.
    The city provides its citizens with a Walk Generating App on their phones
    -- everytime you press the button it sends you an array of one-letter strings
    representing directions to walk (eg. ['n', 's', 'w', 'e']).
    You always walk only a single block in a direction and you know
    it takes you one minute to traverse one city block, so create a function
    that will return true if the walk the app gives you will take you exactly ten minutes
    (you don't want to be early or late!) and will, of course, return you to your starting point.
    Return false otherwise.

NOTE:
    you will always receive a valid array
    containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
    It will never give you an empty array (that's not a walk, that's standing still!).

EXAMPLE:
    ['n','s','n','s','n','s','n','s','n','s'] - should return true
    ['w','e','w','e','w','e','w','e','w','e','w','e'] - should return false
    ['w'] - should return false
    ['n','n','n','s','n','s','n','s','n','s'] - should return false


*/

"use strict";
var Directions;
(function(Directions) {
  Directions["NORTH"] = "n";
  Directions["EAST"] = "e";
  Directions["SOUTH"] = "s";
  Directions["WEST"] = "w";
})(Directions || (Directions = {}));
function isValidWalk(coordinates) {
  if (coordinates.length !== 10) {
    return false;
  }
  return checkEndpoint(coordinates);
}
function checkEndpoint(coordinates) {
  let abscissa = 0; // X
  let ordinate = 0; // Y
  coordinates.forEach(coord => {
    switch (coord) {
      case Directions.EAST:
        abscissa++;
        break;
      case Directions.WEST:
        abscissa--;
        break;
      case Directions.NORTH:
        ordinate++;
        break;
      case Directions.SOUTH:
        ordinate--;
        break;
    }
  });
  return !abscissa && !ordinate;
}

module.exports = isValidWalk;
