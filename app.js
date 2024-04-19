// 0(n) ---> big o of n ===> linear time complexcity
function largeElement(arr) {
  let largeEl = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > largeEl) {
      largeEl = arr[i];
    }
  }
  return largeEl;
}

console.log(largeElement([5, 11, 22, 10, 30])); //30

// el = 5 run = 5
// el = 1000 run = 1000
// el = n run = n
// o(n) ---> big o of n ===> linear time complexcity

function findFirstElement(arr) {
  return arr.at(0);
}
console.log(findFirstElement([10, 20, 60]));

// el = 10 run = 1
// el = 100 run = 1
// el = n run = 1
// o(1) ----> constant time complexcity
