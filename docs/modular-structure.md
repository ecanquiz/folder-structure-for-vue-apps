# Estructura Modular

Con la inevitable escalada del proyecto es recomendable que sus carpetas sean transformadas en una **estructura modular**.


```sh{4,5,6,7,8,9,10}
├── src/
    └── modules/
        ├── moduleA/
        │   ├── components/
        │   ├── composables/
        │   ├── router/
        │   ├── services/
        │   ├── stores/
        │   ├── types/
        │   └── views/
        ├── ModuleB/
        └── ModuleC/
```

>Una **estructura modular** de carpetas organiza el proyecto en módulos independientes, cada uno con su propia base de código fuente. Esto facilita la organización del programa. 

## Ejemplo Real

Organicemos nuestro código fuente en dos módulos con lo concerniente a la lógica de **Autenticación** separada del CRUD de **Usuarios**.


```sh{19,20,21,22,23,32,33}
├── src/
│   ├── assets/
│   ├── components/
│   ├── composables/
│   ├── layouts/
│   ├── middleware/
│   ├── router/
│   ├── types/
│   ├── utils/
│   └── modules/
│       ├── Auth/
│       │   ├── components/
│       │   ├── composables/
│       │   ├── routes/
│       │   ├── services/
│       │   ├── store/
│       │   ├── types/
│       │   └── views/
│       │       ├── Dashboard.vue
│       │       ├── Home.vue
│       │       ├── Login.vue
│       │       ├── Profile.vue
│       │       └── Register.vue
│       ├── User/
│       │   ├── components/
│       │   ├── composables/
│       │   ├── routes/
│       │   ├── services/
│       │   ├── store/
│       │   ├── types/
│       │   └── views/
│       │       ├── Datagrid.vue
│       │       └── CreateOrEdit.vue
│       ...
└── tests/
```

Tenga en cuenta como podemos visualizar claramente la ubicación de los archivos según su funcionalidad separando la estructura del código fuente por módulos.

::: info Tenga en cuenta
En la carpeta `tests/` se crean los archivos de pruebas, es factible que estos archivos sean organizados con una estructura parecida a la carpeta `src/`.
:::

## Código Genérico

>Como habrá notado, aún hay una parte de nuestro código que continua desagrupado. Se trata del nuestro código general reutilizable, el que necesariamente importamos para muchos casos de uso.

El código genérico lo colocaremos en una carpeta al mismo nivel de la carpeta `modules/` y esta carpeta será denominada `core/`.

```sh{3,4,5,6,7,8,9}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

>Siéntase libre de llamar esta carpeta como usted o su equipo guste. Por ejemplo, `main/`, `base/`, `centra/`, `general/`, etc. Recuerde: _"Las distintas denominaciones son cuestiones de forma más no de fondo"_. Aunque, es recomendable siempre consultar estas convenciones con su equipo de desarrollo.

## Código Organizado

Indudablemente que ahora nuestro código luce más organizado.

```sh
└── src/
    ├── core/ 
    └── modules/
```

::: warning Pero, surge una pregunta
¿Es la **estructura modular** una práctica suficiente para eliminar toda la complejidad de organizar tantos archivos facilitando el desarrollo, depuración, mantenimiento y la escalabilidad del proyecto?
:::