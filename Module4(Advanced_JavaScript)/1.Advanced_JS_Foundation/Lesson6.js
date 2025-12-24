const favouriteFilem = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Science Fiction",
    star: "Leonardo DiCaprio"
}

// const title = favouriteFilem.title;
// const director = favouriteFilem.director;
// const year = favouriteFilem.year;
// const genre = favouriteFilem.genre;
// const star = favouriteFilem.star;

const { title, director, year, genre, star } = favouriteFilem;

/* define print function */
function print(msg) {
    console.log(msg)
}

print(`My favourite film is ${title}, directed by ${director}, released in ${year}. It is a ${genre} film starring ${star}.`)