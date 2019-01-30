import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container } from './styles';
import FilmList from '../../components/FilmList';

export default class Main extends Component {
  state = {
    loading: false,
    requestApiError: false,
    requests: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const { data: requestApi } = await api.get('/api/films');

      this.setState({
        requests: [...this.state.requests, requestApi],
      });
    } catch (err) {
      this.setState({ requestApiError: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <Container>
        <img src={logo} alt="Star Wars" />
        {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : null}
        <FilmList requests={this.state.requests} />
        <small>
          <a href="/">Voltar</a>
        </small>
      </Container>
    );
  }
}
