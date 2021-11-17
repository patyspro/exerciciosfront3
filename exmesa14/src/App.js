import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import api from './services/api';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cepLista: [],
    }
  }

  handleSubmit = async ({ cep }) => {
    if (cep !== '') {
      if(cep.includes("-")){
        cep = cep.replace("-","")
      }
      try {
        const response = await api.get(`/${cep}/json`);
        console.log(response.data)
        const newCepList = this.state.cepLista
        newCepList.push(response.data);
        this.setState({ cep: newCepList });
        console.log(this.state.cepLista)
      } catch (error) {
        Swal.fire({
          title: error.response.status,
          icon: 'error',
          text: error.response.data.message
        });
      }

      
    }
  }

  render() {
    return (
      <>
        <main>
          <div className="col-md-4 col-sm-6 my-3 container text-center">
            <h2>Digite um cep:</h2>
            <Formik initialValues={{ cep: ""}} onSubmit={this.handleSubmit}>
              <Form>
                <Field placeholder="Digite um cep" required type="text" name="cep" id="cep" className="form-control" />
                <button type="submit" className="btn btn-primary my-4">Enviar</button>
              </Form>
            </Formik>
            <table className="table">
            <tbody>  
              {this.state.cepLista && (
                this.state.cepLista.map(({logradouro,localidade,uf},index)=>{
                  return(

                    <tr key={index}>
                        <th scope="row"> Id {index+1}  </th>
                        <td> {logradouro}</td>
                        <td>{localidade}</td>
                        <td>{uf}</td>
                    </tr>  
                  )
                })
              )}
            </tbody>  
            </table>
          </div>
        </main>
      </>
    );
  }
}


