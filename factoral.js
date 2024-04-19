// 5! = 5 * 4 * 3 * 2 * 1
// 4! = 4 * 3*  2 * 1
// n! = n*(n-1) * (n-2) * ......* 1

function factoral(n) {
  let fac = 1;
  for (let i = 1; i < n; i++) {
    fac = fac * i;
  }
  return fac;
}

console.log(factoral(10));

// input = 5 run = 5
// input = 10 run = 10
// input = n run = n
// O(n) -----> linear time complexcity
