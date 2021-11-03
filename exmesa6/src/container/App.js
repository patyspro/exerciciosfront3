import '../styles/App.css';
import '../styles/Component.css';

import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';

function App() {

  const listaDaFesta=[{
    nome:'Nicolas',
    estaNaLista:true,
    tarefa:'bata-frita'},
    {nome:'Pedro',
    estaNaLista:false,
    tarefa:'pizza'},
    {nome:'Carolina',
    estaNaLista:true,
    tarefa:'bebidas'}
  ];


  return (
    <div className="App">
    <h3>Convidados:</h3>
    {listaDaFesta.map(({nome, estaNaLista})=> {
      return( <ClassComponent key={nome} nome={nome} estaNaLista={estaNaLista}/>
    )
    })}
     <h3>Tarefas: </h3>
     {listaDaFesta.map(({nome, tarefa}) => {
       return (
        <FunctionComponent key={nome} nome={nome} tarefa={tarefa} />
         )
      })}
    
    </div>
  );
}
  

export default App;

