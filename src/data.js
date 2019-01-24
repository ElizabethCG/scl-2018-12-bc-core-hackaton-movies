//
// buscar por (valueYear,valueGenre, year,genre)
// let category1=genre;
// let category2=year;
// let valueCategory1=valueYear;
// let valueCategory2=valueGenre;
// let counter=0;
// if(valueCaterory1<>""){counter+=1};
// if(valueCaterory2<>""){counter+=1};
//
// iterar en el array con forEach + counter para las condiciones por cada elemento que ingresa
// que recorra por cada elemento del array y vea si cada elemento es igual al valueCategory 1,
//  si es igual, que almacene la posicion del elemento (pelicula con todos sus datos) en el array
//
// for each para iterar por cada pelicula...
// para realizar la comparacion de los atributos(2)
// si atributo1 asigno array 1
// valtor atributo 1
// si para atributo valor =a par de la movie entonces suma1
// repite ciclo, si par de atributo2 es igual a pelicula, suma1..
// repetir tantas veces como larga del array -1
//
// si la suma total igual a largo array, entonces .... meter pelicula en nuevo array
// devolver array e imprimir en pantalla
//
//
// if(valueCategory2=keyvalue and value category1=keyvalue){push al array resultado}
// si una key value está vacia...
// revisar primero qué contenedores vienen con datos...
//
//


//var selected_movies = movies.filter(function (movie) {
//     return movie.Genre = "comedy";
// });


// Using ES6
// var difficult_tasks = tasks.filter((task) => task.duration >= 120 );
// const deadBeforeSXX = inventors.filter(inventor => (inventor.passed < 1900));



// var filter = function (array, callback) {
//
//     var filtered_array = [];
//
//     array.forEach(function (element, index, array) {
//         if (callback(element, index, array)) {
//             filtered_array.push(element);
//         }
//     });
//
//     return filtered_array;
//
// };




//


/*

const filterSeason = (dataB, condition) => {
    //filter es un ciclo iterativo como el for, forech, reviw
   if (condition == 0){
       return dataB;
   }
    const filteredSeason = dataB.filter(element => {
        return element.seasonNum == condition
    })
    return filteredSeason;
  };*/


// const searchFor = (data, pokeParameter) => {
//   const finding = data.filter(element => {return element.num.indexOf(pokeParameter) >= 0;});
//   console.log(typeof finding);
//   if (finding[0] === undefined){
//     const finding = data.filter(element => {return element.name.indexOf(pokeParameter) >= 0;});
//     console.log(typeof finding);
//     return finding;
//   }
//   return finding;
// }

// ÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑ
// DESDES AQUÍ LA FUNCIONES REALES (LO ANTERIOR SON EJEMPLOS )


//Filtro: si la búsqueda coincide exactamente lo incluye en el array
//      movies.forEach((position)=> {
//          let atribute="Language";
//          let atributeValue="English"
//          let selected_movies = movies.filter(movie => (movie[atribute]===atributeValue));
// console.log(selected_movies);
// return selected_movies
//      });







// PRETENDO DEJAR SOLO ESTA FUNCION DE FILTRADO
//Filtro: si contiene una palabra que coincida lo incluye en el array
     // movies.forEach((position)=> {
     //   let atribute="Genre";
     //     let atributeValue="Comedy"
     //  let selected_movies = movies.filter(movie => ((movie[atribute]).indexOf(atributeValue) > -1));
     //  console.log(selected_movies);
     //  return selected_movies
     // });



     const callingYears = (movies) => {
       let arrayYears = [];
       movies.forEach((element, position)=> {
          arrayYears.push(movies[position].Year);
          console.log(arrayYears)
       });
       return arrayYears
}




     window.callingYears = callingYears;
