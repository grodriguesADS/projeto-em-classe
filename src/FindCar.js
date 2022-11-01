import React from 'react';

export default class App extends React.Component {

  state = {
    licensePlate: "",
    }

    add = () => {
      const returnOwnerCar =  " Placa: " + this.state.car;
      this.setState({returnOwnerCar})
    }
        
    render() {
      return(
        <div className= "App">

        <h3>Encontrar Carro</h3>

        <label>Placa do Carro: </label>
         <input type = "text" value = {this.state.car} onChange = {(e) => {this.setState({car: e.target.value})}} />

         <br/>

          <button onClick={this.add}>Procurar</button>

        <br/>

          <label>Carro encontrado: {this.state.returnOwnerCar} </label>
         </div>
         );
      }
}
