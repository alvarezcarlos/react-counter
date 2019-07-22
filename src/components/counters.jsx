// Este archivo renderiza los Counters con el metodo map
// Y agrega mediante un arreglo propiedades a cada Counter
//Estas propiedades pueden ser accedidas desde el componente Counter mediante this.props
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() { 
        return (
        <div>
            <button
                onClick={this.props.onReset}
                className="btn btn-secondary btn-sm m2">
                    Reset
            </button>
            {this.props.counters.map(counter => 
                <Counter 
                    key={counter.id} 
                    onDelete={this.props.onDelete}
                    onIncrement={this.props.onIncrement}
                    counter={counter}
                />
            )}
        </div>  );
    }
}
 
export default Counters;