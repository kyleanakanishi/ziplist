const testStr = ['a', 'b', 'c'];
const testArr = [1, 2, 3];

function zipList(list1, list2) {
  const sum = [];
  for (let i = 0; i < list1.length; i++) {
    sum.push(list1[i], list2[i]);
  }
  return sum;
}

console.log(zipList(testStr, testArr));

function zipListTheSimpleWay(list1, list2) {
  const zip = _.zip(list1, list2);
  const fix = _.flatten(zip);
  return fix;
}

console.log(zipListTheSimpleWay(testStr, testArr));
