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

console.log(largeElement([5, 11, 22, 10, 30]));

// el = 5 run = 5
// el = 1000 run = 1000
// el = n run = n
// 0(n) ---> big o of n ===> linear time complexcity
