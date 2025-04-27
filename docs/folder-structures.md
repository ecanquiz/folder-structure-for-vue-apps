Por: [Ernesto Canquiz](https://github.com/ecanquiz)

# Estructuras de Carpetas

La estructura de carpetas es fundamental para organizar los archivos y componentes de una aplicación. 

>Aunque no influye directamente en la funcionalidad del proyecto, que depende de la lógica del código fuente, una estructura bien definida mejora notablemente la legibilidad y escalabilidad del mismo.



## Estructuras Básica

A continuación, se presenta un ejemplo de la estructura básica de carpetas de un proyecto [Vue](https://vuejs.org/), siguiendo convenciones comunes:

```sh
└── src/
    ├── assets/
    ├── components/
    ├── router/
    ├── store/
    └── views/
```

::: tip
Es importante señalar que la carpeta `views/` también puede denominarse `pages/`. Estas variaciones en la nomenclatura son cuestiones de preferencia y no afectan la funcionalidad. La decisión sobre el nombre a utilizar debe ser consensuada por el equipo de desarrollo.
:::

>Tenga en cuenta que solo haremos referencia a la carpeta `src/`, que significa "source" y contiene el código fuente del proyecto, como archivos de código, componentes y otros recursos necesarios para el desarrollo de la aplicación. Por lo tanto, no se considerarán las carpetas `node_module/`, `dist/`, `build/` ni otras.