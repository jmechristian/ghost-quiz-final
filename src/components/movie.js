import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import './movie.css';

const Movie = ({ movie, movieSelector, setShowModal }) => {
  const movieRef = useRef();
  const titleRef = useRef();
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .from(movieRef.current, {
        y: '-200',
        ease: 'expo.out',
        duration: '1',
        opacity: '0',
      })
      .from(
        titleRef.current,
        {
          y: '100',
          ease: 'expo.out',
          duration: '1',
          opacity: '0',
        },
        '-=1'
      );
  }, []);

  const selectmovies = () => {
    movieSelector(movie);
    setShowModal();
  };

  return (
    <div
      className='movie__wrapper'
      key={movie.id}
      onClick={selectmovies}
      id={'quiz-click ' + movie.id}
    >
      <div className='movie__image' ref={movieRef}>
        <img
          src={movie.imageUrl}
          alt={movie.title}
          id={'quiz-click ' + movie.id}
        />
      </div>
      <div className='movie__details' ref={titleRef}>
        <h3 id={'quiz-click ' + movie.id}>{movie.title}</h3>
      </div>
    </div>
  );
};

export default Movie;
