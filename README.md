# JavaScript

## Arrays  Day1

### 1.- Average Salary Excluding the Minimum and Maximum Salary

You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
Return the average salary of employees excluding the minimum and maximum salary. 
Answers within 10-5 of the actual answer will be accepted.

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
### 2. Count Odd Numbers in an Interval Range

Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

```
Example 1:

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
Example 2:

Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].

```
```javascript

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
```
### 3. Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

```javascript

function largestOfFour(arr) {
let arr2 = [];
for(let row=0; row < arr.length; row++ ){
  for(let col=0; col < arr[row].length; col++){
      arr[col].sort(function (a, b) { return a - b });
  }
  arr2.push(arr[row][arr[row].length - 1])
}
  console.log(arr2);
  return arr2;
}

largestOfFour([
[4, 5, 1, 3], 
[13, 27, 18, 26], 
[32, 35, 37, 39], 
[1000, 1001, 857, 1]]);



```
### Recorta una cadena

Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento). Devuelve la cadena recortada con un ... al final.

```javascript
function truncateString(str, num) {
   
   if(str.length > num)
   {
     return str.slice(0,num) + "..."
   } else{
     return str
   }
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);

```


```javascript

import React from 'react';
import { nanoid } from 'nanoid'


function App() {
  const [tarea, setTarea] = React.useState('');
  const [tareas, setTareas] = React.useState([]);
  const [modoEdicio, setModoEdicion] = React.useState(false);
  const [idTarea, setIdTarea] = React.useState('');

  const agregarTarea = e => {
    e.preventDefault();
    if (!tarea.trim()) {
      console.log('No se puede agregar una tarea vacia');
    }
    console.log(tarea);

    setTareas([
      ...tareas, {
        id: nanoid(),
        nombreTarea: tarea
      }]);

    setTarea('');

  }

  const eliminarTarea = id => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  }

  const editarTarea = item => {
    console.log(item);
    setModoEdicion(true);
    setTarea(item.nombreTarea);
    setIdTarea(item.id);
    
  }

  const tareaEdicion = e => {
    e.preventDefault();
    if (!tarea.trim()) {
      console.log('No se puede agregar una tarea vacia');
      return;
    }
    
    setTareas(tareas.map(tarea => {   
      if (tarea.id === idTarea) {
        tarea.nombreTarea = tarea.nombreTarea;
      }
      return tarea;
    }
    ));

    setModoEdicion(false);  
    setTarea('');
    setIdTarea('');

  }


  return (
    <div className="conteiner mt-5 ">
      <h1 className="text-center mx-3"> CRUD Simple </h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center"> Lista de Tareas </h4>

          <ul className="list-group mx-2">
            {
              tareas.map(item => (
                <li className="list-group-item" key={item.id}>
                  <span className="lead">{item.nombreTarea}</span>
                  <button
                    className="btn btn-sm btn-warning float-right"
                    onClick={() => editarTarea(item)}
                  >
                    Editar </button>
                  <button
                    className="btn btn-sm btn-danger float-right mx-2"
                    onClick={() => eliminarTarea(item.id)}
                  >
                    Eliminar </button>

                </li>
              ))

            }
          </ul>


        </div>
        <div className="col-4">
          <h4 className="text-center"> 
          
         {
            modoEdicio ? 'Editar Tarea' : 'Agregar Tarea'
         }
          
          </h4>
          <form className="form-group mx-3" onSubmit={modoEdicio ? tareaEdicion : agregarTarea}>
            <div className="d-grid gap-2">
              <input
                type="text"
                className="form-control mb-2 "
                placeholder="Nombre de la Tarea"
                onChange={(e) => setTarea(e.target.value)}
                value={tarea}
              />
              {
                modoEdicio ? ( <button className="btn btn-warning btn-block"> Editar </button>) : (
                  <button className="btn btn-primary btn-block"> Agregar </button>
                )
              }
           

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;



```
