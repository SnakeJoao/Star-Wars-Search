import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './styles';
import people from '../../assets/people.svg';
import ships from '../../assets/ships.svg';
import planets from '../../assets/planets.svg';

const RequestList = ({ requests }) => (
  <Container>
    {requests.map(requestApi => (
      <Repository key={Math.random()}>
        <header>
          {requestApi.typeRequest === 'people' ? <img src={people} alt="People" /> : null}
          {requestApi.typeRequest === 'starships' ? <img src={ships} alt="Ships" /> : null}
          {requestApi.typeRequest === 'planets' ? <img src={planets} alt="Planets" /> : null}
          <strong>{requestApi.name}</strong>
        </header>
        {requestApi.typeRequest === 'people' ? (
          <ul>
            <li>
              {requestApi.height}
              <small>altura</small>
            </li>
            <li>
              {requestApi.birth_year}
              <small>aniversário</small>
            </li>
            <li>
              {requestApi.gender}
              <small>gênero</small>
            </li>
          </ul>
        ) : (
          <ul>{null}</ul>
        )}

        {requestApi.typeRequest === 'planets' ? (
          <ul>
            <li>
              {requestApi.rotation_period}
              <small>Período de Rotação</small>
            </li>
            <li>
              {requestApi.climate}
              <small>Clima</small>
            </li>
            <li>
              {requestApi.population}
              <small>População</small>
            </li>
          </ul>
        ) : (
          <ul>{null}</ul>
        )}
        {requestApi.typeRequest === 'starships' ? (
          <ul>
            <li>
              {requestApi.model}
              <small>Modelo</small>
            </li>
            <li>
              {requestApi.consumables}
              <small>Consumíveis</small>
            </li>
            <li>
              {requestApi.starship_class}
              <small>Classe da Nave</small>
            </li>
          </ul>
        ) : (
          <ul>{null}</ul>
        )}
      </Repository>
    ))}
  </Container>
);

RequestList.propTypes = {
  requests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      height: PropTypes.string,
      birth_year: PropTypes.string,
      gender: PropTypes.string,
      rotation_period: PropTypes.number,
      climate: PropTypes.string,
      population: PropTypes.number,
      model: PropTypes.string,
      consumables: PropTypes.number,
      starship_class: PropTypes.string,
    }),
  ).isRequired,
};

export default RequestList;
