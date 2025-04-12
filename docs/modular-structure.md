# Estructura Modular

>Con la inevitable escalada del proyecto es recomendable que sus carpetas sean transformadas en una **estructura modular**.

Una **estructura modular** de carpetas organiza el proyecto en módulos independientes, cada uno con su propia base de código. Esto facilita la organización del código. 

```sh{10,11,12,13,14,15,16,17,18,19,20}
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

::: warning Pregunta
¿Es la **estructura modular** suficiente para eliminar la complejidad de organizar tantos archivos y facilitar el desarrollo, la depuración y la escalabilidad del proyecto?
:::

::: info Tenga en cuenta
En la carpeta `tests/` se crean los archivos de pruebas, es factible que estos archivos sean organizados con una estructura parecida a la carpeta `src/`.
:::

