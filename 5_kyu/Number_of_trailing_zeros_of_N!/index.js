/*
DESCRIPTION:
    Write a program that will calculate
    the number of trailing zeros
    in a factorial of a given number.
    `N! = 1 * 2 * 3 * ... * N`
    Be careful 1000! has 2568 digits...
    For more info, see: http://mathworld.wolfram.com/Factorial.html


EXAMPLE:
    zeros(6) = 1    # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
    zeros(12) = 2   # 12! = 479001600 --> 2 trailing zeros
    zeros(6) = 1
    zeros(12) = 2
    zeros(0): 0, true
    zeros(5) = 1
    zeros(6) = 1
    zeros(30) = 7
    zeros(254716483) = 63679116
*/

function log(val, base) {
  return Math.log(val) / Math.log(base);
}

function zeros(N) {
  if (N < 5) return 0;

  let K_MAX = log(N, 5);

  let trailingZeros = 0;
  for (let K = 1; K <= K_MAX; K++) {
    trailingZeros += Math.floor(N / Math.pow(5, K));
  }

  return trailingZeros;
}

module.exports = zeros;
