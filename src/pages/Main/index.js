import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';

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

      console.log(finalResult);

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
            <option value="people">Pessoas</option>
            <option value="planets">Planetas</option>
            <option value="starships">Naves</option>
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

        <CompareList requests={this.state.requests} />
      </Container>
    );
  }
}
