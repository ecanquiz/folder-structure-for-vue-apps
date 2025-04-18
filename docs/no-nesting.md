# No Anidamiento

>Como vimos en el [apartado anterior](./nesting.md), la **tecnica de anidamiento de carpetas** hace referencia solo a los tipos de carpetas `components/` y `composables/` incluidas dentro y fuera de las carpetas `views/` o `layouts/`.

Exploremos aquellas carpetas que no requieren anidación e indaguemos por qué...

## `assets/`

La carpeta `assets/` es la carpeta que contiene los recursos estáticos que se van a utilizar en una aplicación frontend. Estos recursos pueden ser imágenes, videos, audio, hojas de estilo, scripts, fuentes, entre otros. En nuestra estructura podría lucir así.

```sh{3,4,5,6}
└── src/
    ├── core/
    │   └── assets/
    │       ├── css/
    │       ├── img/
    │       ...
    │   ...
    └── modules/
```

:::tip
Tenga encuenta que la carpeta `css/` aveces suele ser llamada `styles/`. Al igual que la carpeta `img/` podría se llamada `images/`. Siéntase libre de llamarla como guste o consúltelo antes con su equipo de desarrollo.
:::

Es poco común observar este tipo de carpetas dentro de un determinado módulo, por ejemplo si algún módulo obedece a un estilo particular. Sin embargo, no es una regla.

## `helpers/`

La carpeta `helpers/` en una aplicación contiene funciones que facilitan el desarrollo, evitando duplicar código, lo que facilita su mantenimiento. Permiten a los desarrolladores escribir menos código para realizar tareas comunes, ya que facilitan tareas típicas en el desarrollo. Se pueden usar en diversos sitios de la aplicación, compartiendo lógica entre vistas, componentes, layouts, etc.


```sh{4}
└── src/
    ├── core/
    │   ...
    │   └── helpers/
    │   ...
    └── modules/
```

Es poco común observar este tipo de carpetas dentro de un determinado módulo. Sin embargo, no es una regla.

## `router/`

La carpeta `router/` permite gestionar la navegación entre las diferentes páginas de la aplicación.

>El enrutamiento es la tecnología que permite cambiar entre las diferentes vistas de la interfaz de usuario de una aplicación. Esto se hace en función de los cambios que se produzcan en la URL de la barra de navegació.

Normalmente, todo el código que define la lógica de enrutamiento se puede almacenar en un solo archivo, por lo que no es tan necesario crear una carpeta aparte. Sin embargo, a veces puede haber otros archivos que complementen su funcionalidad.

```sh{5}
└── src/
    ├── core/
    │   ...
    │   ├── router/
    │   │   ├── index.ts
    │   │   └── middlewarePipeline.ts
    │   ...
    └── modules/
```

## `routes/`

Al estar implementando una estructura modular es buena idea que la misma defina sus propias rutas y estas sean injectadas al `core/router/`. Al igual, el código que define las rutas del correspondiente módulo, facilmente se puede exportar desde un solo archivo, por lo que no es tan necesario crear una carpeta aparte. Sin embargo, a veces puede haber otros archivos que complementen su funcionalidad.

```sh{6,7,8}
└── src/
    ├── core/
    └── modules/
        ├── auth/
        │   ...
        │   ├── routes/
        │   │   ├── index.ts
        │   │   └── middleware.ts
        │   ...
        ├── user/
        ...     
```

## `services/`

En la carpeta `services/` de una aplicación frontend generalmente se establecen los _endpoint_ que permiten la comunicación con los respectivos servicios del servidor backend.

```sh{6,7,8}
└── src/
    ├── core/
    └── modules/
        ├── product/
        │   ...
        │   ├── services/
        │   │   ├── index.ts
        │   │   └── presentation.ts
        │   ...
        ├── inventory/
        ...     
```

## `stores/`

La carpeta `stores/` contiene archivos relacionados con el almacén de estados. El almacén de estados centraliza la información para que cualquier parte de la aplicación pueda acceder a ella.

>A diferencia de Vuex, con el Pinia es más fácil independizar la modularización del estado. Sin embargo, dentro de la carpeta `stores/` se puede subdividir por achivos.

```sh{6,7,8,9,10}
└── src/
    ├── core/
    └── modules/
        ├── auth/
        │   ...
        │   ├── stores/
        │   │   ├── actions.ts
        │   │   ├── getters.ts        
        │   │   ├── index.ts
        │   │   └── state.ts
        │   ├──
        │   ...         
        ├── 
        ...     
```

## `types/`

La carpeta `types/` es el lugar indicado para establecer y agrupar el sistema de tipos de TypeScript (TS), los cuales conforman el conjunto de reglas que formalizan los tipos de JavaScript. En esta carpeta se centralizan los archivos que definen variables y funciones tipadas.


```sh{6,7,8,9,10,11}
└── src/
    ├── core/
    └── modules/
        ├── product/
        │   ...
        │   ├── types/
        │   │   ├── category.ts
        │   │   ├── index.ts
        │   │   ├── mark.ts
        │   │   ├── presentation.ts
        │   │   └── product.ts
        │   ...
        ├── inventory/
        ...     
```