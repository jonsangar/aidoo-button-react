import React, { Component } from 'react';
import heat_icon from '../assets/images/heat.svg';
import cool_icon from '../assets/images/cool.svg';

class Button extends Component{

    
    constructor(props){
        super(props);
        this.state = {
            active: props.activo,
            temp_ambient: props.tempAmbiente,
            temp_consign: props.tempConsigna,
            name_zone: props.nombreZona,
            state_zone: ''
        };

        /* this.handleChange = this.handleChange.bind(this); */

        /* console.log(this.state); */

    }
    
    

    

    render() {
        return (
            <React.Fragment>

                <div onClick={this.btnPulsado.bind(this)} className={this.devolverEstiloEstado()} >
        
                    <a className="zone-switch" onClick={this.encendidoApagadoButton.bind(this)}>
                        <svg width="22px" height="24px" viewBox="0 0 22 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                            <title>power</title>
                            <g className="Guía-de-estilo" stroke="none" strokeWidth="1" fillRule="none" >
                                <g className="Iconos power-icon" transform="translate(-495.000000, -429.000000)" fillRule="#1F2933" >
                                    <path d="M505.8,439.893692 C505.22808,439.893692 504.702128,439.518338 504.702128,438.947488 L504.702128,429.946203 C504.702128,429.375353 505.22808,429 505.8,429 C506.37192,429 506.897872,429.375353 506.897872,429.946203 L506.897872,438.947488 C506.897872,439.518338 506.37192,439.893692 505.8,439.893692 Z M505.8,453 C499.844047,453 495,448.256871 495,442.425 C495,438.223459 497.543248,434.421216 501.483459,432.734625 C502.038758,432.501292 502.683248,432.748547 502.924642,433.290039 C503.168603,433.834511 502.914108,434.469488 502.358655,434.705956 C499.221842,436.048779 497.195745,439.078224 497.195745,442.425 C497.195745,447.069729 501.056447,450.85 505.8,450.85 C510.543553,450.85 514.404255,447.069729 514.404255,442.425 C514.404255,439.078224 512.378158,436.048779 509.242483,434.706442 C508.685892,434.469488 508.431397,433.834511 508.675718,433.289238 C508.919124,432.748154 509.563029,432.501123 510.12034,432.736236 C514.056752,434.421216 516.6,438.223459 516.6,442.425 C516.6,448.256871 511.755953,453 505.8,453 Z" id="power"></path>
                                </g>
                            </g>
                        </svg>
                    </a>

                    <span className="zone-temp"> {this.state.temp_ambient}&deg; </span>

                    <div className="zone-info">
                        <span className="zone-desc">{this.state.name_zone}</span>
                        <span className="zone-state">{this.devolverZoneState()}</span>
                    </div>

                    {/* <img 
                    src={( this.state.temp_ambient < this.state.temp_consign ) ? heat_icon : cool_icon } 
                    className="bg-icon heat_icon" alt="" 
                    /> */}
                    {/* <img className="bg-icon" src="../assets/images/cool.svg" alt=""> */}

                    { this.devolverIconoFondo() }
       
                </div>
                    {/* <button onClick={this.subirTemp.bind(this)}>Subir</button>
                    <button onClick={this.bajarTemp.bind(this)}>Bajar</button> */}

                
            </React.Fragment>
        );
    }

    btnPulsado(event){
        console.log(this);
    }

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

    devolverZoneState(){
        let estadoActual = this.state.active;
        let tempAmbiente = this.state.temp_ambient;
        let tempConsigna = this.state.temp_consign;

        if(estadoActual === true){
            if(tempAmbiente === tempConsigna){
                return 'Zona de confort';
            }            
            if(tempAmbiente < tempConsigna){             
                return `Calentando a ${ tempConsigna}`;
            }

            if(tempAmbiente > tempConsigna){          
                return `Enfriando a ${ tempConsigna}`;
            }
        } else {
            return 'OFF';
        }
    }



    devolverIconoFondo(){

        if( this.state.active === false ){
            return;
        } else {
            return (<img 
                src={( this.state.temp_ambient < this.state.temp_consign ) ? heat_icon : cool_icon } 
                className="bg-icon heat_icon" alt="" 
                />);
        }
    }

    encendidoApagadoButton(event){

        let estadoActual = this.state.active;

        if(estadoActual === true){
            this.setState({active: false})
        } else {
            this.setState({active: true})
        } 

        event.stopPropagation();


    }

    subirTemp(e){
        this.setState({
            temp_consign: (this.state.temp_consign + 1)
        });
    }

    bajarTemp(e){
        this.setState({
            temp_consign: (this.state.temp_consign - 1)
        });
    }

    

}

export default Button;