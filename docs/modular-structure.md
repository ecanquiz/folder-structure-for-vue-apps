# Estructura Modular

>Con la inevitable escalada del proyecto es recomendable que sus carpetas sean transformadas en una **estructura modular**.


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

Una **estructura modular** de carpetas organiza el proyecto en módulos independientes, cada uno con su propia base de código. Esto facilita la organización del código. 

## Ejemplo Real

Organicemos nuestro código en dos módulos, lo concerniente a la lógica de **Autenticación** separada del CRUD de **Usuarios**.


```sh{12,13,14,15,16,17,18}
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
│       │   ├── router/
│       │   ├── services/
│       │   ├── stores/
│       │   ├── types/
│       │   └── views/
│       ├── User/
│       ...
└── tests/
```



::: info Tenga en cuenta
En la carpeta `tests/` se crean los archivos de pruebas, es factible que estos archivos sean organizados con una estructura parecida a la carpeta `src/`.
:::

## Código Genérico

Como habrá notado, aún hay una parte de nuestro código que continua desagrupado. Se trata del nuestro código general reutilizable, el que necesariamente importamos para muchos casos de uso.

Lo colocaremos en una carpeta al mismo nivel de la carpeta `modules/` y esta carpeta será denominada `core/`.

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

>Sientase libre de llamarla como usted o su equipo guste. Por ejemplo, `main/`, `base/`, `centra/`, `general/`, etc. 

## Código Organizado

Indudablemente que ahora nuestro código luce más organizado.

```sh
└── src/
    ├── core/ 
    └── modules/
```

::: warning Pregunta
¿Es la **estructura modular** suficiente para eliminar la complejidad de organizar tantos archivos y facilitar el desarrollo, la depuración y la escalabilidad del proyecto?
:::