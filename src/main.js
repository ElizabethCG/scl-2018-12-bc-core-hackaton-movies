
// let arr = [];
//
// for(i=1; i<=9; i++){
//     let url = `http://www.omdbapi.com/?i=tt000000${i}&apikey=eb4fa0ba`
//
//     fetch(url)
//     .then(res => res.json())
//     .then((out) => {
//
//         if(out.Response === "True"){
//             arr.push(out);
//         };
//         // printCards(arr);
//         console.log(arr)
//     })
//     .catch(err => { throw err });
// }



// ÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑ


   let movies=[];
   let llamada1="https://www.omdbapi.com/?i=tt";
   let llamada2=3104988;
   let llamada3="&apikey=eb4fa0ba";
   let llamada4="&plot=full";
   let llamada5="&genre=comedy";


   for (i=0;i<50;i++){

   llamando = fetch(llamada1+llamada2+llamada3+llamada4);

   llamando.then(result => {return result.json();})
   .then(result => {
    if (result.Type==="movie"&&result.Poster!=="N/A"){
      movies.push(result);
        }
    // ASÍ SE PUEDE ACCEDER A LOS ELEMENTOS DEL ARRAY
console.log(movies);

 showData(movies);

   // for (let element in movies) {
      // console.log(movies[element]);
//       document.getElementById("root").innerHTML += "<p>" + movies[element].Title + "</p>";
//       document.getElementById("root").innerHTML += "<p>" + movies[element].Genre + "</p>";
//       document.getElementById("root").innerHTML += "<p>" + movies[element].Plot + "</p>";
//       // console.log(movies[element].Poster);
// console.log(movies[element]);
//         let variable3=movies[element].Poster;
//       document.getElementById("root").innerHTML += `
//       <div class="target col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
//         <div class="card">
//          <img class=tarjeta src="${variable3}" class="img">
//         </div>
//       </div>`
//
//
//       document.getElementById("root").innerHTML += "<p>" + movies[element].Year + "</p>";

    //
    // };
   }).catch(err => {
         console.log(err);
   });
   llamada2+=1;

   }

   const containerRoot = document.getElementById("root");

 //Mostrando la Data
const showData = (movies) => {
  console.log(movies)
   let result = '';
 movies.forEach((element,position)=> {
         containerRoot.innerHTML += `
        <div class="card">
          <div class="box">
            <div class="img">

        <img src="${movies[position].Poster}" class="img" alt="Movies"></div>
        <h5 class="card-title">${movies[position].Title}</h5>
        <p>${movies[position].Genre}</p>
        <p>${movies[position].Plot}</p>
        <p>${movies[position].Year}</p>
        </div>
      </div>`
  });
   return result;
}
