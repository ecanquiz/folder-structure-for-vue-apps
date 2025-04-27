Por: [Ernesto Canquiz](https://github.com/ecanquiz)

# Cuando la Aplicación Crece

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

Tenga en cuenta que mientras que las vistas aumentan es probable que también aumentarán los componentes y componibles.

```sh{4,5,6,7,8,9,11,12,13,14,15,16,25,26,27}
└── src/
    ├── assets/
    ├── components/
    │   ├── FooCard.vue
    │   ├── FooForm.vue
    │   ├── BarCard.vue
    │   ├── BarForm.vue
    │   ├── BasCard.vue
    │   └── BasForm.vue
    ├── composables/
    │   ├── useFooOne.ts
    │   ├── useFooOther.ts
    │   ├── useBarOne.ts
    │   ├── useBarOther.ts
    │   ├── useBasOne.ts
    │   └── useBasOther.ts
    ├── layouts/
    ├── middleware/
    ├── router/
    ├── services/
    ├── store/
    ├── types/
    ├── utils/
    └── views/
        ├── Foo.vue
        ├── Bar.vue
        └── Bas.vue
```

## División de Carpetas

>Aunque podría parecer útil al principio, resulta incómodo a la larga. 

```sh{4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,21,22,31,32,33}
└── src/
    ├── assets/
    ├── components/
    │   ├── Foo/
    │   │   ├── Card.vue
    │   │   └── Form.vue
    │   ├── Bar/
    │   │   ├── Card.vue
    │   │   └── Form.vue
    │   └── Bas/
    │       ├── Card.vue
    │       └── Form.vue
    ├── composables/
    │   ├── Foo/
    │   │   ├── useOne.ts
    │   │   └── useOther.ts
    │   ├── Bar/
    │   │   ├── useOne.ts
    │   │   └── useOther.ts
    │   └── Bas/
    │       ├── useOne.ts
    │       └── useOther.ts
    ├── layouts/
    ├── middleware/
    ├── router/
    ├── services/   
    ├── store/
    ├── types/
    ├── utils/
    └── views/
        ├── Foo.vue
        ├── Bar.vue
        └── Bas.vue
```

:::tip
Tenga en cuenta que una de las ventajas de dividir carpetas es que elimina la necesidad de agregar prefijos o sufijos a los componentes secundarios para asociarlos con los componentes principales.
:::
