import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import './style.scss';

export default class Formulario extends Component {
  handleSubmit = ({ name, number, email }) => {
    if (name || number || email === '') {
      Swal.fire({
        title: 'Favor inserir seus dados no formulário',
        icon: 'error',
        text: 'Dados vazios'
      })
    }
    else {
      console.log(name, number, email);
      Swal.fire({
        title: 'Valores enviados',
        icon: 'success',
        text: 'Valores enviados com sucesso'
      })
    }
  }

  render() {
    return (
      <div id="formulario" className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4 text-center">
        <Formik initialValues={{ name: '', number: 0, email:'' }} onSubmit={this.handleSubmit}>
          <Form>
            <Field type="text" id="nome" name="nome" className="form-control" placeholder="nome" />
            <Field type="phone" id="phone" name="telefone" className="form-control" placeholder="telefone" />
            <Field type="email" id="email" name="email" className="form-control"  placeholder= "e-mail"/>
            <button className="btn btn-primary my-3" type="submit">Enviar</button>
          </Form>
        </Formik>
      </div>
    )
  }
}