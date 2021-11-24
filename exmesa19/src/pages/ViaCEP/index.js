import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import api from '../../services/apiViaCEP';

export default class ViaCEP extends Component {
  constructor() {
    super();
    this.state = {
      endereco: {}
    }
  }

  handleSubmit = async ({ cep }) => {
    try {
      const response = await api.get(`${cep}/json`);
      this.setState({ endereco: response.data });
    } catch (error) {
      Swal.fire({
        title: 'Oops',
        icon: 'error',
        text: 'CEP não encontrado ou erro no servidor.'
      });
    }
  }

  render() {
    return (
      <>
        <main>
          <Link to="/brasilapi">Ir para BrasilAPI</Link>
          <div className="col-md-4 col-sm-6 my-3 container text-center">
            <h2>Procure um CEP</h2>
            <Formik initialValues={{ cep: '' }} onSubmit={this.handleSubmit}>
              <Form>
                <Field placeholder="Insira o CEP" required type="text" name="cep" id="cep" className="form-control my-3" />
                <button type="submit" className="btn btn-primary">Pesquisar</button>
              </Form>
            </Formik>
            {this.state.endereco.cep && (
              <ul className="list-group my-3">
                <li><Link to={`/brasilapi/${this.state.endereco.cep}`}>Ver endereço com CEP</Link></li>
                <li>{this.state.endereco.cep}</li>
                <li>{this.state.endereco.logradouro}</li>
                <li>{this.state.endereco.complemento}</li>
                <li>{this.state.endereco.bairro}</li>
                <li>{this.state.endereco.localidade}</li>
                <li>{this.state.endereco.uf}</li>
              </ul>
            )}
          </div>
        </main>
      </>
    );
  }
}