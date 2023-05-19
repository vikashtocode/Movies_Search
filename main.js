const URL ="https://api.tvmaze.com/search/shows?q=";

const form =document.getElementById("form");

const result =document.getElementById("container");

 function removeMovies(parent){
   
     while(parent.firstChild){
        // console.log(parent.firstChild)
        parent.firstChild.remove();
     }

 }



function getMovies(searchText){

    axios.get(`${URL}${searchText}`)
    .then((res)=>{
        const movies =res.data;
    //    console.log(res.data)

       for(let movie of movies){
        if(movie.show.image !=null){
            const image =document.createElement("img");
            image.setAttribute("src",movie.show.image.medium);
            result.append(image);
        }
       }

       
    })
}


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const searchText =form.children[1].value;
    // console.log(searchText);
    getMovies(searchText);
    removeMovies(result);
  
    form.children[1].value =" "

})