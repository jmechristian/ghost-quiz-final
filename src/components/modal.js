import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faDownload } from '@fortawesome/free-solid-svg-icons';

import './modal.css';

const Modal = ({ movie, setCloseModal }) => {
  const modalRef = useRef();
  const modalBackRef = useRef();
  const movieRef = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap
      .timeline()
      .from(modalBackRef.current, {
        opacity: '0',
        duration: '0.5',
        ease: 'expo.out',
      })
      .from(
        modalRef.current,
        {
          scale: '0',
          duration: '1',
          ease: 'expo.out',
        },
        '-=0.5'
      )
      .from(
        movieRef.current,
        {
          opacity: '0',
          y: '100',
        },
        '-=0.5'
      );
  }, []);

  return (
    <div id='myModal' className='modal' ref={modalBackRef}>
      <div className='modal-content' ref={modalRef}>
        <div className='modal__content__wrapper'>
          <div
            className='modal__content__header'
            style={{
              backgroundImage: `url(${movie.drinkImage})`,
              backgroundSize: 'cover',
              backgroundPosition: '50% 60%',
            }}
          >
            <span className='close' onClick={setCloseModal}>
              &times;
            </span>
            <div className='modal__header__cover'></div>
            <div className='header__content'>
              <div className='modal__content__title'>{movie.drink}</div>
              <div className='modal__movie__image' ref={movieRef}>
                <img src={movie.imageUrl} alt={movie.title} />
              </div>
            </div>
          </div>
          <div className='drink__content'>
            <div className='drink__subtitle'>{movie.subtitle}</div>
            <div className='drink__recipe'>
              <ul>
                {movie.recipe.map((ing, index) => (
                  <li key={index}>{ing}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className='action__buttons'>
            <div className='buy__button'>
              <div className='button__inner'>
                <FontAwesomeIcon icon={faCartPlus} size='lg' inverse />
                <a
                  href='https://www.ghosttequilashop.com/?utm_source=MainHero&utm_medium=Web&utm_campaign=Halloween'
                  target='_blank'
                  rel='noreferrer'
                >
                  Make Yours
                </a>
              </div>
            </div>
            <div className='download__button'>
              <div className='button__inner'>
                <FontAwesomeIcon icon={faDownload} inverse size='lg' />
                <a href={movie.drinkCard} rel='noreferrer' target='_blank'>
                  Save Recipe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
