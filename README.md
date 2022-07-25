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
### 4 Recorta una cadena

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

### 5 Comprende los peligros de usar el código imperativo
La programación funcional es un buen hábito. Mantiene tu código fácil de manejar y evita que tengas errores incómodos. Pero antes de llegar allí, veamos un enfoque imperativo de la programación para destacar dónde pueden tener problemas.

En inglés (y muchos otros idiomas), la tensión imperativa se utiliza para dar órdenes. De forma similar, un estilo imperativo en la programación es aquel que le da a la computadora un conjunto de sentencias para llevar a cabo una tarea.

A menudo las sentencias cambian el estado del programa, como actualizar variables globales. Un ejemplo clásico es escribir un bucle for que dé instrucciones exactas para iterar sobre los índices de un arreglo.

Por el contrario, la programación funcional es una forma de programación declarativa. Le dice al ordenador lo que quieres hacer llamando a un método o función.

JavaScript ofrece muchos métodos predefinidos que manejan tareas comunes para que no necesites escribir cómo debe ejecutarlas el equipo. Por ejemplo, en lugar de usar el bucle for mencionado anteriormente se podría llamar al método map que maneja los detalles de iteración sobre un array. Esto ayuda a evitar errores semánticos, como los "Off By One Errors" que fueron cubiertos en la sección Debugging.

Considere el escenario: está navegando por la web en su navegador y quiere rastrear las pestañas que ha abierto. Intentemos modelar esto con un código simple orientado a objetos.

Un objeto ventana está formado por pestañas y normalmente tienes más de una abierta. Los títulos de cada sitio abierto en cada objeto ventana se mantienen en un arreglo. Después de trabajar en el navegador (abriendo nuevas pestañas, combinando ventanas y cerrando pestañas), deseas imprimir las pestañas que todavía están abiertas. Las pestañas cerradas se eliminan de la matriz y las nuevas pestañas (por simplicidad) se añaden al final de la misma.

El editor de código muestra una implementación de esta funcionalidad con funciones para tabOpen(), tabClose()y join(). El array tabs es parte del objeto ventana que almacena el nombre de las páginas abiertas.

Examine el código en el editor. Está utilizando un método que tiene efectos secundarios en el programa, causando un comportamiento incorrecto. La lista final de pestañas abiertas, almacenadas en finalTabs.tabs deberia ser ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] pero la lista producida por el código es un poco diferente.

Cambia Window.prototype.tabClose para que elimine la pestaña correcta.


```javascript
// tabs es un arreglo de títulos de cada sitio abierto dentro de la ventana
const Window = function(tabs) {
  this.tabs = tabs; // Mantenemos un registro del arreglo dentro del objeto
};

// Cuando unes dos ventanas en una
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// Cuando abres una nueva pestaña al final
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Abramos una nueva pestaña por ahora
  return this;
};

// Cuando cierras una pestaña
Window.prototype.tabClose = function(index) {

  // Cambia solo el código debajo de esta línea

  const tabsBeforeIndex = this.tabs.splice(0, index); // Obtiene las pestañas antes de la pestaña
  const tabsAfterIndex = this.tabs.splice(index + 1); // Obtiene las pestañas después de la pestaña

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Únelos juntos

  // Cambia solo el código encima de esta línea

  return this;
 };

// Vamos a crear tres ventanas del navegador
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Tu casilla de correo, drive y otros sitios de trabajo
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sitios sociales
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sitios de entretenimiento

// Ahora completa la apertura de la pestaña, cierre, y otras operaciones
const finalTabs = socialWindow
  .tabOpen() // Abre una nueva pestaña para memes de gatos
  .join(videoWindow.tabClose(2)) // Cierra la tercera pestaña en videoWindow y une
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
```
