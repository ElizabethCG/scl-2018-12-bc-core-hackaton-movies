
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
       let arrayOut=[];
       movies.forEach((element, position)=> {
          arrayYears.push(movies[position].Year);

       });
       arrayOut=orderDataForYear(arrayYears)
       return arrayOut
    }
     window.callingYears = callingYears;


     const orderDataForYear = (arrayYears) => {
       // console.log(arrayYears);
       let orderedArray = arrayYears;
       orderedArray.sort(function (a, b) {
         if (a < b) {
           return -1;
           // console.log(a);
           // console.log(b);
         }
         else if (a > b) {
            return 1;
         }else{
         // a must be equal to b
        //  return 0;
        //
        if(a = b){orderedArray.pop() === b}}

       });

       console.log(orderedArray);
       return orderedArray; //retorno el arreglo de objetos para luego tomarlo desde el archivo main.js y hacer la visualización de datos con el DOM
     }
