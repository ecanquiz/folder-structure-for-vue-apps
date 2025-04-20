# Pruebas

```sh{4}
├── src/
│   ├── core/
│   └── modules/
└── tests/
```

```sh{5,6,7,8,9}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   │   ├── __tests__/
    │   │   ├── useFoo/
    │   │   ├── useBar.ts
    │   │   └── useBaz.ts
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

```sh{7,8,9,10}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   │   ├── __tests__/
    │   │   ├── useFoo/
    │   │   │   ├── useFooA.ts
    │   │   │   ├── useFooB.ts
    │   │   │   └── index.ts
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
    │   │   ├── useFoo/
    │   │   ├── useBar.ts
    │   │   └── useBaz.ts
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

```sh{8,9,10,11,12}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   │   ├── __tests__/
    │   │   ├── useFoo/
    │   │   │   ├── __tests__/
    │   │   │   │   ├── useFooA.spec.ts
    │   │   │   │   └── useFooB.spec.ts
    │   │   │   ├── useFooA.ts
    │   │   │   ├── useFooB.ts
    │   │   │   └── index.ts
    │   │   ├── useBar.ts
    │   │   └── useBaz.ts
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

