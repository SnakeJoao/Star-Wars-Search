import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './styles';

const CompareList = ({ requests }) => (
  <Container>
    {requests.map(requestApi => (
      <Repository key={requestApi.id}>
        <header>
          <strong>{requestApi.name}</strong>
        </header>
        {requests.typeRequest === 'people' ? (
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
          <ul>
            <li> Broke nibba </li>
          </ul>
        )}
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  requests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      height: PropTypes.number,
      birth_year: PropTypes.string,
      gender: PropTypes.string,
    }),
  ).isRequired,
};

export default CompareList;
