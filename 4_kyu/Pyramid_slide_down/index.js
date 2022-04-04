/*
DESCRIPTION:
      /3/
     \7\ 4 
    2 \4\ 6 
   8 5 \9\ 3

   Let's say that the 'slide down' is the maximum sum of consecutive numbers
   from the top to the bottom of the pyramid.
   As you can see, the longest 'slide down' is:
   3 + 7 + 4 + 9 = 23

  Your task is to write a function that takes a pyramid representation
  as argument and returns its' largest 'slide down'.
  
  For example:
  With the input `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`
              3
            7   4
          2   4   6
        8   5   9   3 

INDEXES:
              0
            1   2
          3   4   5
        6   7   8   9

        
              1
            2   3
          4   5   6
        7   8   9   10
      11  12  13  14  15  

Your function should return `23`.


                            75
                          95  64
                        17  47  82
                      18  35  87  10
                    20,  4, 82, 47, 65
                  19,  1, 23, 75,  3, 34
                88,  2, 77, 73,  7, 63, 67
              99, 65,  4, 28,  6, 16, 70, 92
            41, 41, 26, 56, 83, 40, 80, 70, 33
          41, 48, 72, 33, 47, 32, 37, 16, 94, 29
        53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14
      70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57
    91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48
  63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31
4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23

1074
*/

const TEST_DATA = [
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 4, 82, 47, 65],
  [19, 1, 23, 75, 3, 34],
  [88, 2, 77, 73, 7, 63, 67],
  [99, 65, 4, 28, 6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
];

function longestSlideDown(pyramid) {
  const pyramidLength = pyramid.length - 1;

  function recursiveSearch(arrays, level = 0, position = 0) {
    const value = arrays[level][position];

    if (level === pyramidLength) {
      return value;
    }

    const nextLevel = level + 1;
    const rightSide = position + 1;

    if (rightSide > nextLevel) {
      return value + recursiveSearch(arrays, nextLevel, position);
    } else {
      const leftValue = recursiveSearch(arrays, nextLevel, position);
      const rightValue = recursiveSearch(arrays, nextLevel, rightSide);
      return value + (rightValue > leftValue ? rightValue : leftValue);
    }
  }

  return recursiveSearch(pyramid);
}

const start = new Date();
console.log(`Biggest sum: ${longestSlideDown(TEST_DATA)}`);
const end = new Date();
console.log(`time: ${end - start} ms`);

module.exports = longestSlideDown;
