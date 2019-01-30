import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';
import RequestList from '../../components/RequestList';

export default class Main extends Component {
  state = {
    loading: false,
    requestApiError: false,
    requestSelect: 'people',
    requestInput: '',
    requests: [],
  };

  handleAddRequest = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: requestApi } = await api.get(
        `/api/${this.state.requestSelect}/${this.state.requestInput}`,
      );

      const finalResult = {
        ...requestApi,
        typeRequest: this.state.requestSelect,
      };

      this.setState({
        requestApiError: false,
        requestSelect: 'people',
        requestInput: '',
        requests: [...this.state.requests, finalResult],
      });
    } catch (err) {
      this.setState({ requestApiError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Star Wars" />

        <Form withError={this.state.requestApiError} onSubmit={this.handleAddRequest}>
          <select
            value={this.state.requestSelect}
            onChange={e => this.setState({ requestSelect: e.target.value })}
          >
            <option value="people">Personagem</option>
            <option value="planets">Planeta</option>
            <option value="starships">Nave</option>
          </select>
          <input
            type="text"
            placeholder="id"
            value={this.state.requestInput}
            onChange={e => this.setState({ requestInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'Enviar'}
          </button>
        </Form>
        <small>
          Você também pode pesquisar por
          <a href="/films"> Filmes</a>
        </small>

        <RequestList requests={this.state.requests} />
      </Container>
    );
  }
}
