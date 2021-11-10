import { Component } from 'react';
import './App.scss';

export default class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = { cronometro: 60 };
  }

  componentDidMount() {
    setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    if(this.state.cronometro === 0) return ;
    this.setState({ cronometro: this.state.cronometro - 1 });
  }

  render() {

    console.log(this.state.cronometro)
    return (
      <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4" >
        <h1>Exercício Mesa 10</h1>
        <h2>{this.state.cronometro}</h2>
      </div>
    );
  }
}
