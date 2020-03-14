/*
DESCRIPTION:
    John has invited some friends. His list is:
        s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

    Could you make a program that
        - makes this string uppercase
        - gives it sorted in alphabetical order by last name.

    When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

    So the result of function meeting(s) will be:
        "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

    It can happen that in two distinct families with the same family name two people have the same first name too.

NOTES:
    You can see another examples in the "Sample tests".
*/

"use strict";
function meeting(inputString) {
  return splitOnObject(inputString.toUpperCase())
    .sort((a, b) => a.last.localeCompare(b.last))
    .sort((a, b) =>
      !a.last.localeCompare(b.last)
        ? a.first.localeCompare(b.first)
        : a.last.localeCompare(b.last)
    )
    .map(item => `(${item.last}, ${item.first})`)
    .reduce((previous, current) => previous + current);
}
function splitOnObject(str) {
  return str.split(";").map(item => {
    const fio = item.split(":");
    return {
      first: fio[0],
      last: fio[1]
    };
  });
}

module.exports = meeting;
