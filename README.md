## Implentación de botón control de zona - AIDOO

Este es un proyecto de prueba sobre una posible implementación de un componente reutilizable para la aplicación AIDOO.

Se han tratado de resolver las siguientes cuestiones:

* Reutilización del componente con paso de parámetros (props).
* Implementar encendido y apagado del botón a través del icono asignado a ello.
* Implementación reactiva del mismo, haciendo uso de los estados para modificar los estilos si se dan las condiciones.
* Implementación de interacción con el botón mediante una sencilla interfaz modal para actualizar la temperatura de consigna.
* Maquetación de todos los elementos siguiendo las especificaciones y haciendo uso de SCSS/CSS para mejor mantenimiento de estilos.
* Realización de algunas pruebas unitarias sobre el componente Botón.

## Ver el proyecto funcionando

Para ver el proyecto en funcionamiento, he subido una distribución de producción a mi sitio web. 

Ver en: [http://jonsg.es/devs/aidoo](http://jonsg.es/devs/aidoo)

## Descargar y levantar el proyecto

Se ha empleado React para la realización del proyecto y el diseño del componente, para aprovechar las ventajas que ofrece en la gestión de estados y props a la hora de diseñar aplicaciones reactivas.

Si no se tiene instalado Node sería conveniente instalarlo primero. Ver: [https://nodejs.org/es/download/](https://nodejs.org/es/download/)

## Release de producción

Hay etiquetas disponibles para descargar el proyecto entero. Recomiendo descargar el Release más reciente.

Una vez descargado, no olvidar instalar las dependencias de node_modules:

### `npm install`

Para levantar el proyecto

### `npm start`

Ejecuta la app en modo desarrollo.<br />
Abrir [http://localhost:3000](http://localhost:3000) en el navegador.


### `npm test`

Para lanzar el modo test de forma interactiva.<br />

[running tests](https://facebook.github.io/create-react-app/docs/running-tests) para más información.

### `npm run build`

Para generar el proyecto en producción. Se crea el directorio `build`<br />

[deployment](https://facebook.github.io/create-react-app/docs/deployment) para más información.

## Docs

### Button Component ###

Este elemento está diseñado de forma que puede ser reutilizado. Recibe los siguientes parámetros (props):

* **activo** : boolean - Indica si el componente (botón) está encendido o apagado.
* **tempConsigna** : number - Temperatura a la que queremos climatizar la sala/zona
* **tempAmbiente** : number - Temperatura actual a la que se encuentra la sala/zona
* **nombreZona** : string - Nombre que identificará la sala/zona.

Ejemplo de uso con el paso de valores como literales:

`<Button activo={true} tempConsigna={20} tempAmbiente={25} nombreZona='Dormitorio' />`

En este proyecto de pruebas, se han creado varios componentes definidos a través de valores literales. Lo ideal sería recibir estos valores de un objeto externo (por ejemplo un JSON que obtengamos de un servidor externo a través de websocket o petición HTTP).

### Estilos del botón

Los estilos del botón están definidos en los archivos SCSS:

* _botones.scss
* _variables.scss

De esta forma, se pueden importar fácilmente en un archivo SCSS para incluirlos con el resto de estilos del proyecto.

### Interacción con los botones

Se ha implementado un componente 'Modal' para lanzar una sencilla interfaz con la que interactuar con cada uno de los botones creados.

De esta forma, podremos subir o bajar la temperatura de consigna. Como este valor está almacenado en los 'estados' del componente, se actualizará de forma dinámica en mismo y podremos ver como cambian los estilos si se alcanza o rebasa el umbral de la temperatura ambiente.

Otra forma de interactuar con el botón será cambiando su estado de encendido/apagado, pulsando el icono para tal fin en la esquina superior derecha.

Para verlo todo en funcionamiento puede visitar: [http://jonsg.es/devs/aidoo](http://jonsg.es/devs/aidoo)

### Documentación de los métodos

En el código fuente se han incluído los correspondientes comentarios para documentarlo, indicando los parámetros de entrada (si los hay), la salida y una breve descripción de la función implementada.

