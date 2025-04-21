# Pruebas

>Muchos de nosotros hemos estado acostumbrados a organizar los archivos `*.spec.ts` y `*.test.ts` dentro de una carpeta denominada `./tests/` fuera de la carpeta `./src/`
```sh{4}
├── src/
│   ├── core/
│   └── modules/
└── tests/
```

En la medida que se van agregando archivos de pruebas automatizadas se va construyendo una estructura de carpetas muy parecida.

```sh{6,7,14,15}
└── src/
│   ├── core/   
│   └── modules/
│       ├── Auth/
│       │   └── views/
│       │       ├── Login.vue
│       │       └── Register.vue
│       └── User/
└── tests/
    ├── core/   
    └── modules/
        ├── Auth/
        │   └── views/
        │       ├── Login.spec.ts
        │       └── Register.spec.ts
        └── User/
```

Esta metodología se hace muy pesada cuando el proyecto crece ya que los archivos que se prueban están muy distantes de los archivos de pruebas.

## Alternativa

Existe otro método más flexible.

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

Quizá sea una carpeta extra que agregará a la estructura pero con la satisfacción de recordarle siempre que los componentes aledaños tienen sus correpondientes pruebas automatizadas. 

## Anidamiento

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

```sh
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