
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






// for (let i=0; i<=1;i++){
//   if (i=0){
//     llamada2=6513120;
//   }else{llamada2=4701660}
// console.log(callingFetch(llamada2))
//
// }


// const callingFetch = (llamada1,llamada2,llamada3) => {
// let request = new Request("http://www.omdbapi.com/?i=tt6513120&apikey=eb4fa0ba&plot=full", {
// let request = new Request("http://www.omdbapi.com/?i=tt6513120&apikey=eb4fa0ba&plot=full", {
    //     method: 'GET',
    //     mode: 'cors',
    //     credentials: 'omit',
    //     // cache: 'only-if-cached',    VER PARA QUE SE USA ESTA LINEA. LA COMENTÉ POR QUE DA ERROR
    //     referrerPolicy: 'no-referrer'
    // });
    // console.log('request =', request);   PARA VER QUE EL REQUEST FUNCIONA




// const callingFetch = (llamada2) => {

// fetch(request)
//     .then(function(response) {
//          // console.log('response =', response);
//         return response.json();
//     })
//     .then(function(data) {
//         console.log('data = ', data);
//         movies.push(data);
//         console.log(movies);
//     })
//     .catch(function(err) {
//         console.error(err);
//     });


// permite imprimir
// console.log(movies);
     // return movies;
     // }



   // for (let i=0; i<=1;i++){
   //    if (i=0){
   //      llamada2=6513120;
   //     }else{llamada2=4701660}
   //   console.log(callingFetch(llamada1,llamada2,llamada3))
   //
   // }



// ÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑ


   let movies=[];
   let llamada1="http://www.omdbapi.com/?i=tt";
   let llamada2=3104988;
   let llamada3="&apikey=eb4fa0ba";
   let llamada4="&plot=full";
   let llamada5="&genre=comedy";


   for (i=0;i<50;i++){

   llamando = fetch(llamada1+llamada2+llamada3+llamada4);

   llamando.then(result => {return result.json();})
   .then(result => {
    if (result.Type==="movie"){
   console.log(result.Type);
    movies.push(result);

    }

   }).catch(err => {
     // Mostrar error
     console.log(err);
   });

   console.log(movies);
   llamada2+=1;
   // return movies;
   // }
   }




   // foreach (let property in movies){
   //
   // console.log(property);}



   // let pokemonBox = (name, number, type, image) => {
   //     let typesFormated = formatTypes (type);
   //     return `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
   //     <div class="card w-100 pokemon-box">
   //     <div  class="card-img-top">
   //     <img class="img-fluid" src="${image}" alt="${name}">
   //     </div>
   //     <div class="card-body">
   //     <p class="card-text">#${number}</p>
   //     <p class="card-text">${name}</p>
   //     <p class="card-text">${typesFormated}</p>
   //     </div>
   //     </div>
   //     </div>`;
   // }
