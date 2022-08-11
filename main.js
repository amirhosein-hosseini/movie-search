const fetchApi = async(movie_name) => {
    const url = "http://www.omdbapi.com/?s=" + movie_name + "&apikey=40d59aed";
    const first_fetch = await fetch(url);
    const second_fetch = await first_fetch.json();
    if (second_fetch.Response == "True"){
        movieList(second_fetch.Search)
    }
}
const movieList = (titleList)=> {
    for(i = 0 ; i < titleList.length ; i++){
        console.log(titleList[i])
        let image = titleList[i].Poster;
        let title = titleList[i].Title;
        let imdb = titleList[i].imdbID;
        let year = titleList[i].Year;
        let my_html = document.getElementById("my-html");
        my_html.innerHTML += '<div class="col-12 col-lg-4"><div class="card border-0 shadow mb-5"><div class="card-image"><img src=' + image + '></div><div class="card-body"><h5 class="title">' + title + '</h5><h5 class="imdb mt-4">imdb ID : ' + imdb + '</h5><h5 class="year mt-4">Year : ' + year + '</h5></div></div></div>'
    }
}
const show = () => {
    document.getElementById("my-html").innerHTML = ""
    const movie_name = document.getElementById("movie-name").value;
    fetchApi(movie_name);
    document.getElementById("movie-name").value = ""
    document.getElementById("backimage").style = "background-image:none;padding-top:20px";
    document.getElementById("backimage").style.height = "150px";
}
