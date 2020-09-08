import React, { Component } from 'react';

/**
 * Componente que renderiza la ventana modal correspondiente a cada uno de los botones.
 * Este componente sirve para probar los botones de zona en acción, permitiendo modificar 
 * la temperatura de consigna de los mismos y modificando dinámicamente el estado
 * 
 * Recibe props del elemento padre:
 * uid: identificador único para manejar los eventos de apertura y cierre de la ventana modal
 * ambiente: se le asigna el valor de temp ambiente del estado del botón padre
 * consigna: se le asigna el valor de temp consigna del estado del botón padre
 * bajarTemp: función que recibe del padre para manejar el decremente de temperatura de consigna
 * subirTemp: función que recibe del padre para manejar el aumento de temperatura de consigna
 */
class Modal extends Component {

    render(){
        return ( 
            <React.Fragment>
                <div onClick={this.cerrarModal} id={this.props.uid} className="modal-wrapper"></div>
                <div className="modal">
                    <h3> Ajustar temperatura de {this.props.uid}</h3>
                    <hr/>
                    <p>Temperatura ambiente a: {this.props.ambiente}</p>

                    <div className="input-group">
                        <span onClick={this.props.bajarTemp} className="input-group-btn">
                            <button  type="button">
                                <i className="btn-icon"> - </i>
                            </button>
                        </span>
                        <div className="control-info">{this.props.consigna}</div>
                        <span onClick={this.props.subirTemp} className="input-group-btn">
                            <button type="button">
                                <i className="btn-icon"> +</i>
                            </button>
                        </span>
                    </div>
                    <div onClick={this.cerrarModal} className="close-modal">[ x ]</div>
                </div>
            </React.Fragment>
        );
    }

    /**
     * Función encargada de cerrar los elementos de la ventana modal
     * @param {*} e Recibe el evento lanza la función
     */
    cerrarModal = (e) => {
        let modal_activa = document.getElementById(this.props.uid);
        modal_activa.nextSibling.style.display = 'none';
        modal_activa.style.display = 'none'
        
        e.stopPropagation();
    }

}


export default Modal;