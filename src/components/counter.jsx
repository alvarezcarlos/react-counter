// Se importa { Component } para crear un componente
import React, { Component } from 'react';

// Se crea el componente extendiendo de la clase Component
class Counter extends Component {
    //state = {
        //value: this.props.counter.value
    //};
    render() { 
        return (
            <div>
                <h4>Counter #{this.props.counter.id}</h4>
                <span 
                    className={this.getBadgeClasses()}>{this.formatCount()}
                    </span>
                <button 
                    className="btn btn-success btn-sm" 
                    onClick={() => this.props.onIncrement(this.props.counter)}>
                    Increment</button>
                <button 
                onClick={() => this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm m-2">
                    Delete</button>
            </div>
        );
    }
    // Se puede usar constructor y el metodo bind(this) para acceder a las propiedades del componente
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    // Para acceder a las propiedades del componente tambien se puede usar arrow function
    //handleIncrement = product => {
       // En react no puedo escribir directamente la propiedad que quiero aumentar
      // this.state.count++; no va a funcionar
      // se debe usar this.setState({count: this.state.count + 1})
      //return this.setState({value: this.state.value + 1})
        
    //}
    getBadgeClasses(){
        //Guardando en una variable el string del estilo de bootstrapp
        //y luego en un condicional pasando el resto del estilo dependiendo del caso
        let badgeClass = 'badge m-2 badge-'
        return this.props.counter.value === 0 ? badgeClass + 'warning' : badgeClass + 'primary'
    }
    formatCount(){
        //Guardando el this.props en la constante {value} para no escribir this.state.count
        const value = this.props.counter.value
        return value === 0 ? 'Zero' : value
    }
}
 
export default Counter;