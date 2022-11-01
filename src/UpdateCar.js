import React from 'react';

export default class App extends React.Component {

  state = {
      id: "1",
    licensePlate: "",
    }

    add = () => {
      const returnOwnerCar = "ID: " + this.state.id + " Placa: " + this.state.car;
      this.setState({returnOwnerCar})
    }
        
    render() {
      return(
        <div className= "App">

        <h3>Atualizar Carro</h3>

        <label>Placa do Carro: </label>
         <input type = "text" value = {this.state.car} onChange = {(e) => {this.setState({car: e.target.value})}} />

         <br/>

          <button onClick={this.add}>Atualizar</button>

        <br/>

          <label>Carro atualizado: {this.state.returnOwnerCar} </label>
         </div>
         );
      }
}
