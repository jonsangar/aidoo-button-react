import React, { Component } from 'react';
import Button from './Button';

/**
 * Componente que indica un lugar que puede albergar varias zonas (Ej: Hogar, Oficina, Hotel, Hospital, etc)
 * 
 * TODO: implementar una forma de obtener el estado inicial de las zonas desde un servidor, websocket o similar
 */
class Place extends Component{

    render() {
        return(
            <React.Fragment>
                <h3 className="titulo-place">{this.props.title}</h3>
                <hr />
                <div className="container">
                    <Button activo={true} tempConsigna={34} tempAmbiente={39} nombreZona='Cocina'/>
                    <Button activo={false} tempConsigna={15} tempAmbiente={50} nombreZona='Salón comedor'/>
                    <Button activo={false} tempConsigna={22} tempAmbiente={15} nombreZona='Baño'/>
                    <Button activo={true} tempConsigna={19} tempAmbiente={19} nombreZona='Habitación dormitorio'/>
                </div>
            </React.Fragment>
        );
    }
}

export default Place;