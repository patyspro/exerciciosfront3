import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      
      mostraNome: false,
      listaSupermecado: [
  
        {
          id: 1,
          imagem: 'https://http2.mlstatic.com/D_NQ_NP_663249-MLB43033347408_082020-O.webp',
          nome: 'Azeite Extra Virgem '
        },
        {
          id: 2,
          imagem: 'https://grandeadega.com.br/arquivos/ids/158498-300-680/gragnano-vaso-anfora-fidanzati-tricolori-1kg.png?v=637680874991900000',
          nome: 'Massa Fidanzati'
        },

        {
          id: 3,
          imagem: 'https://cellarvinhos.vtexassets.com/arquivos/ids/155499-800-auto?v=637675087603770000&width=800&height=auto&aspect=true',
          nome: 'Vinho'
        },

      ]

      
    }
  }
  mostraNomeToggler = () => {
    this.setState({
      mostraNome: !this.state.mostraNome
    })

  }
  
  removeProduto = (idProduto) =>{
    const novalista= this.state.listaSupermecado.filter(({ id }) => {
      return id !== idProduto
    })
    this.setState({
      listaSupermecado: novalista
    })
  }

 reaparecer = () =>{
  this.setState({
    listaSupermecado: [
    
      {
        id: 1,
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_663249-MLB43033347408_082020-O.webp',
        nome: 'Azeite Extra Virgem '
      },
      {
        id: 2,
        imagem: 'https://grandeadega.com.br/arquivos/ids/158498-300-680/gragnano-vaso-anfora-fidanzati-tricolori-1kg.png?v=637680874991900000',
        nome: 'Massa Fidanzati'
      },

      {
        id: 3,
        imagem: 'https://cellarvinhos.vtexassets.com/arquivos/ids/155499-800-auto?v=637675087603770000&width=800&height=auto&aspect=true',
        nome: 'Vinho'
      },
    ]
  })

}

  render() {
    
    
    return (
      <>
      
    
      <div className="d-flex flex-column align-items-center justify-content-center">

      <button className="btn btn-primary px-5 py-3" onClick={()=>{this.reaparecer()}}>Reaparecer os produtos</button>
        
        <div className="d-flex align-items-center justify-content-center mt-5">

        
            {this.state.listaSupermecado.map(({ id, imagem, nome })=>{
              return(
                <div key={id} className="d-flex flex-column align-items-center m-3" onClick={()=> this.removeProduto(id) }>
                 
                  <img src={imagem} alt={nome} />
                  <h3>{nome}</h3>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}
}
   
  
export default App;
