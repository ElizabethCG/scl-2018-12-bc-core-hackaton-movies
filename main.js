
   let movies=[];
   let calling1="https://www.omdbapi.com/?i=tt";
   let calling2=3104988;
   let calling3="&apikey=eb4fa0ba";
   let calling4="&plot=full";
   // let calling5="&genre=comedy";

   let repeat = 500
   for (let i=0;i<=repeat;i++){

   calling = fetch(calling1+calling2+calling3+calling4);

   calling.then(result => {return result.json();})
   .then(result => {
    if (result.Type==="movie" && result.Poster !=="N/A" && result.Plot !== "N/A"){
      movies.push(result);
        }



        /* Función que carga por pantalla la lista de años de forma dinámica */

 /*       let yearsAvailable = window.callingYears(movies);
        // console.log(yearsAvailable);

        document.getElementById("selectYear").addEventListener("click", //transformar a una función para poder reutilizarlo desde distintos botones
          (event) => {
            event.preventDefault();
            // <option value="0" disabled selected>Año</option>
            document.getElementById('selectYear').innerHTML = ''; // limpio el div cada vez que se hace click

            let m = 0;
            yearsAvailable.forEach((element) => {
              document.getElementById("selectYear").innerHTML += "<option value=" + m + "  id=selectYear" + m + ">" + element + "</option>";
              m++;
            });
          });

             let selectedYear = document.getElementById("selectYear").value;
             console.log(selectedYear);

*/


      if(i===repeat){showData(movies);
        // let yearsAvailable = callingYears(movies);
        // console.log(yearsAvailable);


/*
//Filtro: si la búsqueda coincide exactamente lo incluye en el array
     movies.forEach((position)=> {
         let atribute="Language";
         let atributeValue="English"
         let selected_movies = movies.filter(movie => (movie[atribute]===atributeValue));
console.log(selected_movies);
return selected_movies
     });


// PRETENDO DEJAR SOLO ESTA FUNCION DE FILTRADO (ME PARECE QUE SERVIRÁ PARA TODOS LOS CASOS)
//Filtro: si contiene una palabra que coincida lo incluye en el array
     movies.forEach((position)=> {
       let atribute="Genre";
         let atributeValue="Comedy"
      let selected_movies = movies.filter(movie => ((movie[atribute]).indexOf(atributeValue) > -1));
      console.log(selected_movies);
      return selected_movies
     });*/

}

//});

   }).catch(err => {
         console.log(err);
   });
   calling2+=1;

   }



   const containerRoot = document.getElementById("root");

  //Mostrando la Data
  const showData = (movies) => {
  console.log(movies)
   let result = '';
 movies.forEach((element,position)=> {
 // console.log(position);
 // console.log(element);
            containerRoot.innerHTML += `

        <div class="card">
          <div class="box">
          <div class="img">
          <a title="Movies" href="https://www.youtube.com/user/trailersyestrenos"><img src="${movies[position].Poster}" class="img" alt="Movies"></div></a>
        <h5 class="card-title">${movies[position].Title}</h5>
        <p>Género: ${movies[position].Genre}</p>
        <p>Sinópsis: ${movies[position].Plot}</p>
        <p>Año de Estreno: ${movies[position].Year}</p>

        </div>
      </div>`
  });
   return result;
}
