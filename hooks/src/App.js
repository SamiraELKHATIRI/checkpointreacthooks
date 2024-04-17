import React , {useState} from 'react';
import Filtre from './Filtre.js'
import MovieList from './MovieList.js';

function App() {
  const [movies , setMovies] = useState([
    {
      id : 1,
      title: 'Inception',
      description: 'gfsdhfjshdfhsdhofosdihfhsdoifishdkjf',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
      rating: 8,
    },
    {
      id : 2,
      title: 'The Notebook',
      description: 'gfsdhfjshdfhsdhofosdihfhsdoifishdkjf',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
      rating: 9,
    }
  ])
  return (
    <div className="App">
      <h1>Movies Library</h1>
      <Filtre />
      <br></br>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;