# No Anidamiento

>Como vimos en el [apartado anterior](./nesting.md), la **tecnica de anidamiento de carpetas** hace referencia solo a los tipos de carpetas `components/` y `composables/` incluidas dentro y fuera de las carpetas `views/` o `layouts/`, respectivamente.

Exploremos aquellas carpetas que no requieren anidación e indaguemos por qué:

## `assets/`

La carpeta `assets/` es donde se almacenan los recursos estáticos que se utilizarán en una aplicación frontend. Estos recursos pueden incluir imágenes, videos, audio, hojas de estilo, scripts, fuentes, entre otros. En nuestra estructura, podría lucir así:

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
Tenga en cuenta que la carpeta `css/` a veces suele ser llamada `styles/`, y la carpeta `img/` podría ser llamada `images/`. Siéntase libre de nombrarlas como prefiera o consúltelo antes con su equipo de desarrollo.
:::

Es poco común observar este tipo de carpetas dentro de un determinado módulo, a menos que algún módulo obedezca a un estilo particular. Sin embargo, no es una regla estricta.

## `helpers/`

La carpeta `helpers/` en una aplicación contiene funciones que facilitan el desarrollo, evitando la duplicación de código y facilitando su mantenimiento. Estas funciones permiten a los desarrolladores escribir menos código para realizar tareas comunes, compartiendo lógica entre vistas, componentes, layouts, etc.

```sh{4}
└── src/
    ├── core/
    │   ...
    │   └── helpers/
    │   ...
    └── modules/
```

Es poco común observar este tipo de carpetas dentro de un determinado módulo. Sin embargo, no es una regla estricta.

## `router/`

La carpeta `router/` es donde se permite gestionar la navegación entre las diferentes páginas de la aplicación.

>El enrutamiento es la tecnología que permite cambiar entre las diferentes vistas de la interfaz de usuario de una aplicación, en función de los cambios que se produzcan en la URL de la barra de navegación.

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

Al implementar una estructura modular, es buena idea que cada módulo defina sus propias rutas, las cuales pueden ser inyectadas en `./src/core/router/`. Al igual que en el caso anterior, el código que define las rutas del correspondiente módulo puede ser exportado desde un solo archivo, por lo que no es tan necesario crear una carpeta aparte. Sin embargo, a veces puede haber otros archivos que complementen su funcionalidad.

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

En la carpeta `services/` de una aplicación frontend, generalmente se establecen los _endpoints_ que permiten la comunicación con los respectivos servicios del servidor backend.

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

>A diferencia de Vuex, con Pinia es más fácil independizar la modularización del estado. Sin embargo, dentro de la carpeta `stores/` se puede subdividir por archivos.

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

La carpeta `types/` es el lugar adecuado para definir y agrupar el sistema de tipos de TypeScript (TS), que establece un conjunto de reglas para formalizar los tipos en JavaScript. En esta carpeta se centralizan los archivos que especifican las variables y funciones tipadas, facilitando así la gestión y el mantenimiento del código.

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
