# Tester

## Arrays

```
1.- Average Salary Excluding the Minimum and Maximum Salary

You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
Return the average salary of employees excluding the minimum and maximum salary. 
Answers within 10-5 of the actual answer will be accepted.

```

 ```

Example 1:

Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

```

```javascript
function largestOfFour(arr) {

  arr.sort(function(a, b){return a - b});
  console.log(arr)
  arr.pop();
  arr.shift();
  
  let aver= arr.length;
  let sum = 0;
  let average = 0;

  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  average = sum / aver;
  return average;
}

let arr = [25000,48000,57000,86000,33000,10000,42000,3000,54000,29000,79000,40000]

console.log(largestOfFour(arr))

//largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, //37, 39], [1000, 1001, 857, 1]]);

```
