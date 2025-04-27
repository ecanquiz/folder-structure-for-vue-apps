Por: [Ernesto Canquiz](https://github.com/ecanquiz)

# Estructura Modular

Con el inevitable crecimiento del proyecto, es recomendable adoptar una **estructura modular** para las carpetas.

```sh{4,5,6,7,8,9,10}
└── src/
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

>Una **estructura modular** organiza el proyecto en módulos independientes, cada uno con su propia base de código. Esto facilita la gestión y organización del programa.

## Ejemplo Real

Imaginemos que organizamos nuestro código en dos módulos, separando la lógica de **autenticación** del CRUD de **usuarios**:


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

Esta organización permite visualizar claramente la ubicación de los archivos según su funcionalidad, separando la estructura del código en módulos.

::: tip 
Es importante mencionar que, si bien se puede crear una carpeta `tests/` para los archivos de prueba, existen objeciones a esta práctica. Muchos desarrolladores están prefiriendo crear carpetas dentro de `src/`, como `__tests__/` o `__mocks__/`, tema que se abordará [más adelante](./tests.html).
:::

## Código Genérico

>Aún hay una parte de nuestro código que permanece desagrupada: el **código genérico** reutilizable, que se importa en múltiples casos de uso.

Para organizarlo, podemos crear una carpeta al mismo nivel que `modules/`, denominada `core/`.

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

>Siéntase libre de nombrar esta carpeta como prefiera usted o su equipo de desarrollo, por ejemplo, `main/`, `base/`, `central/`, `general/`, etc. Recuerde: _"Las distintas denominaciones son cuestiones de forma más no de fondo"_. Es recomendable consultar estas convenciones con su equipo de desarrollo.

## Código Organizado

Con esta estructura, nuestro código se ve mucho más organizado:

```sh
└── src/
    ├── core/ 
    └── modules/
```

## Ok pero, surge una pregunta

>**¿Es la estructura modular una práctica suficiente para eliminar toda la complejidad de organizar tantos archivos, facilitando el desarrollo, la depuración, el mantenimiento y la escalabilidad del proyecto?**