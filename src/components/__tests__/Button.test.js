
import React from 'react';
import ReactTestUtil from 'react-dom/test-utils';
import Button from '../Button';

describe('Button Component',()=>{

    //Inicializamos temperatura de consigna a 17 para hacer las pruebas
    const component = ReactTestUtil.renderIntoDocument(
        <Button activo={true} tempConsigna={17} tempAmbiente={22} nombreZona='Sala test' />
    );

    it('Prueba de función de bajar temperatura en uno', ()=>{
    
        component.bajarTemperatura(); 

        //temperatura ahora debe valer 16
        let tempActualizada = component.state.temp_consign;

        expect(tempActualizada).toBe(16); 
    });

    it('Prueba de función de bajar temperatura en uno', ()=>{
        //Nota: temperatura vale 16 si la prueba anterior sale bien
        component.subirTemperatura();

        //ahora temperatura debería ser 17 de nuevo
        let tempActualizada = component.state.temp_consign;

        expect(tempActualizada).toBe(17);
    });
 
});

describe('Button Component Apagado',()=>{

    const component = ReactTestUtil.renderIntoDocument(
        <Button activo={false} tempConsigna={17} tempAmbiente={22} nombreZona='Sala test' />
    );
    
    it('Debe estar el estado inactivo: active a FALSE', () => {
        expect(component.state.active).toBe(false);
    });

    it('Debe devolver la clase adecuada al estar apagado', ()=>{
        expect(component.devolverEstiloEstado()).toBe('btn-zone-off');
    });
 
});

describe('Button Component Enfriando',()=>{

    const component = ReactTestUtil.renderIntoDocument(
        <Button activo={true} tempConsigna={17} tempAmbiente={22} nombreZona='Sala test' />
    );

    it('Debe devolver la clase adecuada al estar Enfriando', ()=>{
        expect(component.devolverEstiloEstado()).toBe('btn-zone-cooling');
    });

 
});

describe('Button Component Calentando',()=>{

    const component = ReactTestUtil.renderIntoDocument(
        <Button activo={true} tempConsigna={25} tempAmbiente={22} nombreZona='Sala test' />
    );

    it('Debe devolver la clase adecuada al estar Calentando', ()=>{
        expect(component.devolverEstiloEstado()).toBe('btn-zone-heating');
    });
 
});


describe('Cambio estilo componente al superar umbral temperatura',()=>{

    const component = ReactTestUtil.renderIntoDocument(
        <Button activo={true} tempConsigna={23} tempAmbiente={22} nombreZona='Sala test' />
    );

    it('Debe partir del estilo de estado Calentando', ()=>{
        expect(component.devolverEstiloEstado()).toBe('btn-zone-heating');
    });

    it('Debe cambiar del estilo de estado Comfort', ()=>{
        //Temp Consigna baja a 22 grados
        component.bajarTemperatura();
        expect(component.devolverEstiloEstado()).toBe('btn-zone-success');
    });

    it('Debe cambiar del estilo de estado Enfriando', ()=>{
        //Temp Consigna baja a 21 grados
        component.bajarTemperatura();
        expect(component.devolverEstiloEstado()).toBe('btn-zone-cooling');
    });

 
});