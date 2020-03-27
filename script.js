
function addMoviestoDom(movies) {
    const movieList = document.getElementById('moviedatabase').getElementsByTagName('li');
    const movieWithLi = movies.map(movie => {
        const newLi = document.createElement("li");
        const newA = document.createElement("a");
        const newImg = document.createElement("img");
        newImg.src = movie.Poster;
        newA.href = "https://www.imdb.com/title/"+movie.imdbID;
        moviedatabase.appendChild(newLi);
        newLi.appendChild(newA);
        newA.appendChild(newImg);

    })
}

addMoviestoDom(movies);

const recentMovies = document.getElementsByName("moviefilters").
    forEach(filter => {
        filter.addEventListener("change", function handleOnChangeEvent(event) {
            const movieList = document.getElementById('moviedatabase');
            let removeMovies = movieList.lastElementChild;
            while (removeMovies) {
                movieList.removeChild(removeMovies);
                removeMovies = movieList.lastElementChild;
            }

            switch (event.target.value) {
                case "recentmovies":
                    const filterLatestMovies = movies.filter(movies => movies.Year >= 2014);
                    addMoviestoDom(filterLatestMovies);
                    break;
                case "avenger":
                    const avengerMovies = movies.filter(movies => movies.Title.includes("Avenger"));
                    addMoviestoDom(avengerMovies);
                    break;
                case "xmen":
                    const xmenMovies = movies.filter(movies => movies.Title.includes("X-Men"));
                    addMoviestoDom(xmenMovies);
                    break;
                case "princess":
                    const princessMovies = movies.filter(movies => movies.Title.includes("Princess"));
                    addMoviestoDom(princessMovies);
                    break;
                case "batman":
                    const batmanMovies = movies.filter(movies => movies.Title.includes("Batman"));
                    addMoviestoDom(batmanMovies);
                    break;
                default:
                    addMoviestoDom(movies)
            }
        }
        )
    })



