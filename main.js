


   let movies=[];
   let calling1="https://www.omdbapi.com/?i=tt";
   let calling2=3104988;
   let calling3="&apikey=eb4fa0ba";
   let calling4="&plot=full";
   // let calling5="&genre=comedy";

   let repeat = 100
   for (let i=0;i<=repeat;i++){

   calling = fetch(calling1+calling2+calling3+calling4);

   calling.then(result => {return result.json();})
   .then(result => {
    if (result.Type==="movie" && result.Poster !=="N/A" && result.Plot !== "N/A"){
      movies.push(result);
        }

      if(i===repeat){showData(movies);}


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
