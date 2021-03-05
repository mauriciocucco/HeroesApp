# HeroesApp

Éste proyecto corresponde a la cuarta app que desarrollé a través del curso de `Angular: de cero a experto (edición 2021)` de Fernando Herrera en Udemy. Es una app muy sencilla que muestra información sobre distintos héroes de Marvel y DC, permite agregar nuevos héroes, editarlos y eliminarlos (CRUD). Posee también un buscador con un autocomplete y un sencillo login con un Guard para la sección principal.

Se encuentra hecho con **Angular Material** (https://material.angular.io/), **JSON Server** (https://www.npmjs.com/package/json-server), el cual permite crear un servidor con la información precargada de los héroes en un JSON a modo de "base de datos", y **Angular CLI** (versión 11.0.4.), con un patrón de diseño **Lazyload**. Para su instalación:

```bash
npm install -g @angular/cli json-server
```

## Iniciar la aplicación

Primero se deben instalar las dependencias del proyecto con:

```bash
npm install
```

Luego, con una consola distinta, posicionarse dentro de la carpeta "heroes-server" y escribir:

```bash
json-server --watch db.json
```

> Esta consola debe permanecer abierta para realizar las peticiones CRUD.

Por último, para abrir la aplicación:

```bash
ng serve -o
```

Abrirá la página en la siguiente URL: `http://localhost:4200/`.

### Nota

> La página se actualizará automáticamente al realizar cambios y guardar.
