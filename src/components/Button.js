import React, { Component } from 'react';

//Importamos Componentes
import Modal from './Modal';

//Importamos iconos
import heat_icon from '../assets/images/heat.svg';
import cool_icon from '../assets/images/cool.svg';

/**
 * Componente botón de zona reutilizable. 
 * Se inicializa con un estado que recibe medienta los atributos (activo, tempAmbiente, tempConsigna, nombreZona) al ser llamado por el padre
 * Actualiza los estados y estilos dinámicamente según los valores de temperatura consigna y ambiente, además de estar o no activo.
 */
class Button extends Component{

    /**
     * Constructor del componente
     * @param {active, tempAmbiente, tempConsigna, nombreZona} props Recibe los atributos definidos al usar el componente y los asigna al estado
     */
    constructor(props){
        super(props);
        this.state = {
            active: props.activo,
            temp_ambient: props.tempAmbiente,
            temp_consign: props.tempConsigna,
            name_zone: props.nombreZona
        };
    }
    
    

    
    /**
     * Renderiza la vista del componente
     */
    render() {
        return (
            <React.Fragment>

                <div onClick={this.ajustarTempConsigna.bind(this)} className={this.devolverEstiloEstado()} >
        
                    <div className="zone-switch" onClick={this.encendidoApagadoButton.bind(this)}>
                        <svg width="22px" height="24px" viewBox="0 0 22 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                            <title>power</title>
                            <g className="Guía-de-estilo" stroke="none" strokeWidth="1" fillRule="none" >
                                <g className="Iconos power-icon" transform="translate(-495.000000, -429.000000)" fillRule="#1F2933" >
                                    <path d="M505.8,439.893692 C505.22808,439.893692 504.702128,439.518338 504.702128,438.947488 L504.702128,429.946203 C504.702128,429.375353 505.22808,429 505.8,429 C506.37192,429 506.897872,429.375353 506.897872,429.946203 L506.897872,438.947488 C506.897872,439.518338 506.37192,439.893692 505.8,439.893692 Z M505.8,453 C499.844047,453 495,448.256871 495,442.425 C495,438.223459 497.543248,434.421216 501.483459,432.734625 C502.038758,432.501292 502.683248,432.748547 502.924642,433.290039 C503.168603,433.834511 502.914108,434.469488 502.358655,434.705956 C499.221842,436.048779 497.195745,439.078224 497.195745,442.425 C497.195745,447.069729 501.056447,450.85 505.8,450.85 C510.543553,450.85 514.404255,447.069729 514.404255,442.425 C514.404255,439.078224 512.378158,436.048779 509.242483,434.706442 C508.685892,434.469488 508.431397,433.834511 508.675718,433.289238 C508.919124,432.748154 509.563029,432.501123 510.12034,432.736236 C514.056752,434.421216 516.6,438.223459 516.6,442.425 C516.6,448.256871 511.755953,453 505.8,453 Z" id="power"></path>
                                </g>
                            </g>
                        </svg>
                    </div>

                    <span className="zone-temp"> {this.state.temp_ambient}&deg; </span>

                    <div className="zone-info">
                        <span className="zone-desc">{this.state.name_zone}</span>
                        <span className="zone-state">{this.devolverZoneState()}</span>
                    </div>

            
                    { this.devolverIconoFondo() }
       
                </div>
                
                <Modal 
                uid={this.props.nombreZona} 
                bajarTemp={this.bajarTemperatura.bind(this)}
                subirTemp={this.subirTemperatura.bind(this)}
                consigna={this.state.temp_consign}
                ambiente={this.state.temp_ambient}
                 />

                
            </React.Fragment>
        );
    }

 

    /**
     * Método encargado de aplicar la clase adecuada al botón según su estado: activo, enfiando o calentando
     * @return {string} El nombre de la clase que aplica estilo al botón
     */
    devolverEstiloEstado(){
        let estadoActual = this.state.active;
        let tempAmbiente = this.state.temp_ambient;
        let tempConsigna = this.state.temp_consign;

        if(estadoActual === true){
            if(tempAmbiente === tempConsigna){
                return 'btn-zone-success';
            }
            
            if(tempAmbiente < tempConsigna){
                return 'btn-zone-heating';
            }

            if(tempAmbiente > tempConsigna){
                return 'btn-zone-cooling'
            }
        } else {
            return 'btn-zone-off';
        }
    }

    /**
     * Renderiza el mensaje que informa del estado en el que se encuentra la zona. Se imprime debajo del nombre de la zona
     */
    devolverZoneState(){
        let estadoActual = this.state.active;
        let tempAmbiente = this.state.temp_ambient;
        let tempConsigna = this.state.temp_consign;

        if(estadoActual === true){
            if(tempAmbiente === tempConsigna){
                return (<span>Zona de comfort</span>);
            }            
            if(tempAmbiente < tempConsigna){             
                return ( <span>Calentando a {tempConsigna}&deg;</span> );
            }

            if(tempAmbiente > tempConsigna){          
                return ( <span>Enfriando a {tempConsigna}&deg;</span>);
            }
        } else {
            return ( <span>OFF</span> );
        }
    }


    /**
     * Método que renderiza el icono giratorio de fondo según el estado de la sala
     */
    devolverIconoFondo(){

        if( this.state.active === false ){
            return;
        } else {
            return (<img 
                src={( this.state.temp_ambient < this.state.temp_consign ) ? heat_icon : cool_icon } 
                className="bg-icon"
                alt="Botón encendido/apagado"
                 />);
        }
    }

    /**
     * Controla la acción al pulsar el botón de encendido o apagado del botón (esquina superior derecha)
     * @param {*} event El evento que lanza el propio botón
     */
    encendidoApagadoButton(event){

        let estadoActual = this.state.active;

        if(estadoActual === true){
            this.setState({active: false})
        } else {
            this.setState({active: true})
        } 

        if (event.stopPropagation){
            event.stopPropagation();
        }
        else if(window.event){
           window.event.cancelBubble=true;
        }


    }

    /**
     * Función que maneja el evento al hacer click sobre un botón. 
     * Muestra una ventana modal asociada al mismo que permite modificar la temp de consigna
     * 
     * @param {*} event El evento ha lanzado la función
     */
    ajustarTempConsigna(event){
        
        let modal = document.getElementById(this.props.nombreZona);

        modal.style.display = 'block';
        modal.nextSibling.style.display = 'block';

    }

    /**
     * Función que actualiza el estado de la temp de consigna reduciéndola en 1.
     * 
     * @param {*} e Evento que que ha lanzado la función
     */
    bajarTemperatura = (e) => {
        
        this.setState({
            temp_consign: (this.state.temp_consign - 1)
        });
    };

    /**
     * Función que actualiza el estado de la temp de consigna aumentándola en 1.
     * @param {*} e Evento que que ha lanzado la función
     */
    subirTemperatura = (e) => {
    
        this.setState({
            temp_consign: (this.state.temp_consign + 1)
        });
    };


    

}

export default Button;