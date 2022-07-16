/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    
    contador = 0;
    for(let i = low; i<=high; i++)
        {
            if(i % 2 == 0){
                continue;
            }else {
                contador += 1; 
            }
            
        }
    return contador;
};

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
