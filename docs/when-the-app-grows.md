#  Cuando la Aplicación Crece

A medida que un proyecto avanza, es común que surja la necesidad de crear carpetas adicionales para organizar mejor los archivos y componentes. Una estructura más compleja puede verse así:

```sh{5,,6,8,9,10,11}
└── src/
    ├── assets/
    ├── components/
    ├── composables/
    ├── layouts/
    ├── middleware/
    ├── router/
    ├── services/
    ├── store/
    ├── types/
    ├── utils/
    └── views/
```

::: tip
Es importante tener en cuenta que, por convención, la carpeta `layouts/` puede denominarse `themes/`, la carpeta `services/` puede ser llamada `apis/`, y `utils/` puede ser conocida como `libs/`. Estas variaciones en la nomenclatura son cuestiones de preferencia y no afectan la funcionalidad. La elección del nombre debe ser consensuada por el equipo de desarrollo.
:::
