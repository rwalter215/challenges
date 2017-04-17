
// {
//   title: "Fight Club",
//   year: "1999",
//   genre: "Thriller",
//   actors: "Brad Pitt, Edward Norton",
//   rating: 3.5
// }
export const saveMovies = (movies) => {
  localStorage.setItem('movies', JSON.stringify(movies))
}

export const clearStorage = () => {
  localStorage.clear()
  console.log('memory cleared')
}

export const getMovies = () => {
  try {
    return JSON.parse(localStorage.getItem('movies'))
  }
  catch (e) {
    console.error(e)
  }
}
