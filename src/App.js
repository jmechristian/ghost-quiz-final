import React, { useState } from 'react';

import Movie from './components/movie';
import Modal from './components/modal';

import { data } from './data';
import './App.css';

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(data[0]);
  const [modal, showModal] = useState(false);

  const movieSelector = (movie) => {
    setSelectedMovie(movie);
  };

  const setShowModal = () => {
    showModal(true);
  };

  const setCloseModal = () => {
    showModal(false);
  };
  return (
    <div className='halloween__quiz'>
      <div className='halloween__quiz__wrapper'>
        {modal && <Modal movie={selectedMovie} setCloseModal={setCloseModal} />}
        {data.map((movie) => (
          <Movie
            movie={movie}
            key={movie.id}
            movieSelector={movieSelector}
            setShowModal={setShowModal}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
