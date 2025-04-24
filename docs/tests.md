# Anidamiento de Pruebas

>Muchos de nosotros hemos estado acostumbrados a organizar los archivos `*.spec.ts` y `*.test.ts` dentro de una carpeta denominada `./tests/` fuera de la carpeta `./src/`
```sh{2}
├── src/
└── tests/
```

## El Problema

>En la medida que se van agregando archivos de pruebas automatizadas a la aplicación se va construyendo una estructura de carpetas muy parecida una de la otra.

```sh{7,8,16,17}
└── src/
│   ├── core/   
│   └── modules/
│       ├── Auth/
│       │   ...
│       │   └── views/
│       │       ├── Login.vue
│       │       └── Register.vue
│       └── User/
└── tests/
    ├── core/   
    └── modules/
        ├── Auth/
        │   ...
        │   └── views/
        │       ├── Login.spec.ts
        │       └── Register.spec.ts
        └── User/
```

Esta prática se vuelve muy pesada cuando el proyecto crece, ya que los archivos que se están probando están muy distantes de los archivos que corren las pruebas.

## Alternativa

>Existe otra manera más ligera.

En **el mismo sitio** donde están los archivos que serán probados se crea una carpeta para colocar los archivos que se probarán.

```sh{6,7,8}
└── src/
    ├── core/   
    └── modules/
        ├── Auth/
        │   └── views/
        │       ├── __tests__/
        │       │   ├── Login.spec.ts
        │       │   └── Register.spec.ts
        │       ├── Login.vue
        │       └── Register.vue
        └── User/
```

Cuando la carpeta `__tests__/` está cerrada se verá así.

```sh{6}
└── src/
    ├── core/   
    └── modules/
        ├── Auth/
        │   └── views/
        │       ├── __tests__/
        │       ├── Login.vue
        │       └── Register.vue
        └── User/
```

:::tip
Cuando vea este tipo de carpetas dentro de la aplicación misma, le complacerá recordar que su respectivo código ya cuenta con su prueba automatizada correspondiente. Esta práctica lo motivará a continuar haciendo sus pruebas automáticas de lo que se va desarrollando.
:::

## Anidamiento de Composables

>Al igual que sucede con los componentes, los composables también se podrían anidar.

Imagine que tiene tres composables genéricos reutilizables con sus respectivos archivos de pruebas automáticas.

```sh{6}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   │   ├── __tests__/
    │   │   ├── useFoo.ts
    │   │   ├── useBar.ts
    │   │   └── useBaz.ts
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

Al abrir la correspondiente carpeta `__tests__/` deberá ver algo como lo siguiente.

```sh{6,7,8,9}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   │   ├── __tests__/
    │   │   │   ├── useFoo.spec.ts
    │   │   │   ├── useBar.spec.ts
    │   │   │   └── useBaz.spec.ts
    │   │   ├── useFoo.ts
    │   │   ├── useBar.ts
    │   │   └── useBaz.ts
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

Ahora, imagine que necesitamos dividir el composable `useBar.ts` en varios composables.

```sh{8}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   │   ├── __tests__/
    │   │   ├── useFoo.ts
    │   │   ├── useBar/
    │   │   └── useBaz.ts
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

Luciría así.

```sh{9}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   │   ├── __tests__/
    │   │   ├── useFoo.ts
    │   │   ├── useBar/
    │   │   │   ├── __tests__/
    │   │   │   ├── useBarA.ts
    │   │   │   ├── useBarA.ts
    │   │   │   └── index.ts
    │   │   └── useBaz.ts
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

Y al desplegar su correspondiente carpeta `__tests__/`, entonces se verá algo así.

```sh{9,10,11}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   │   ├── __tests__/
    │   │   ├── useFoo.ts
    │   │   ├── useBar/
    │   │   │   ├── __tests__/
    │   │   │   │   ├── useBarA.spec.ts
    │   │   │   │   └── useBarB.spec.ts
    │   │   │   ├── useBarA.ts
    │   │   │   ├── useBarA.ts
    │   │   │   └── index.ts
    │   │   └── useBaz.ts
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

Ejemplo de las dos carpetas `__tests__/` desplegadas.

```sh{7,8,9,13,14}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   │   ├── __tests__/
    │   │   │   ├── useFoo.spec.ts
    │   │   │   ├── useBar.spec.ts
    │   │   │   └── useBaz.spec.ts
    │   │   ├── useFoo.ts
    │   │   ├── useBar/
    │   │   │   ├── __tests__/
    │   │   │   │   ├── useBarA.test.ts
    │   │   │   │   └── useBarB.test.ts
    │   │   │   ├── useBarA.ts
    │   │   │   ├── useBarA.ts
    │   │   │   └── index.ts
    │   │   └── useBaz.ts
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

Cerrémolas.

```sh{6,9}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   │   ├── __tests__/
    │   │   ├── useFoo.ts
    │   │   ├── useBar/
    │   │   │   ├── __tests__/
    │   │   │   ├── useBarA.ts
    │   │   │   ├── useBarA.ts
    │   │   │   └── index.ts
    │   │   └── useBaz.ts
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

Cerremos `useBar/`.

```sh{8}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   │   ├── __tests__/
    │   │   ├── useFoo.ts
    │   │   ├── useBar/
    │   │   └── useBaz.ts
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```