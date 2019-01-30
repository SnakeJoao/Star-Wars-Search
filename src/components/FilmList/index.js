import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './styles';

import image from '../../assets/films.svg';

const FilmList = ({ requests }) => (
  <Container>
    {requests.map(requestApi => (
      <Container>
        {requestApi.results.map(result => (
          <Repository key={Math.random()}>
            <header>
              <img src={image} alt="Film" />
              <strong>{result.title}</strong>
            </header>
            <ul>
              <li>
                {result.episode_id}
                <small>Id do episódio</small>
              </li>
              <li>
                {result.director}
                <small>Diretor</small>
              </li>
              <li>
                {result.release_date}
                <small>Data de lançamento</small>
              </li>
            </ul>
          </Repository>
        ))}
      </Container>
    ))}
  </Container>
);

FilmList.propTypes = {
  requests: PropTypes.arrayOf(
    PropTypes.shape({
      episode_id: PropTypes.number,
      title: PropTypes.string,
      release_date: PropTypes.string,
      director: PropTypes.string,
      gender: PropTypes.string,
    }),
  ).isRequired,
};

export default FilmList;
