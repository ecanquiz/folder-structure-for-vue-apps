Por: [Ernesto Canquiz](https://github.com/ecanquiz)

# Anidando Pruebas

>Muchos de nosotros hemos estado acostumbrados a organizar los archivos `*.spec.ts` y `*.test.ts` dentro de una carpeta `./tests/`, fuera de la carpeta `./src/`.

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

>Esta prática se vuelve pesada cuando el proyecto crece, ya que los archivos que se están probando están muy distantes de los archivos que corren las pruebas.

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

:::details ¿Incluir codigo de pruebas dentro de la carpeta `src/`?
Si le preocupa incluir codigo de pruebas dentro de la carpeta `src/`, tome en cuenta que [Vite](https://vite.dev/) cuenta con una [opción](https://vite.dev/config/build-options#build-rollupoptions) para excluir archivos que no desea generar a la distribución de producción.

```ts
// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        'src/exclude/this-file.ts',
      ]
    }
  }
})
```

Ejemplo.

```ts
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html', // or the entry point of your application
        // ... other entry points, if any
      },
      inputOptions: {
        input: [
          "./index.html",
          "./src/app.js",
        ],
        exclude: ['**/__tests__/**/*'],
      }
    },
  },
});
```


:::

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
Cuando vea este tipo de carpetas dentro de la aplicación misma, le complacerá recordar que su respectivo código ya cuenta con su prueba automatizada correspondiente. Esta práctica lo motivará a continuar [haciendo sus pruebas automáticas](https://ecanquiz.github.io/vue-tdd/) de lo que va desarrollando.
:::

## Anidando Componibles

>Al igual que sucede con [los componentes](./components.html), los componibles también se podrían anidar.

Imagine que tiene tres componibles genéricos reutilizables con sus respectivos archivos de pruebas automáticas.

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

Ahora, imagine que necesitamos dividir el composable `useBar.ts` en varios componibles de su propia exclusividad.

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
    │   │   │   ├── useBarB.ts
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

Lo siguiente es el ejemplo de las dos carpetas `__tests__/` desplegadas.

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
    │   │   │   │   ├── useBarA.spec.ts
    │   │   │   │   └── useBarB.spec.ts
    │   │   │   ├── useBarA.ts
    │   │   │   ├── useBarB.ts
    │   │   │   └── index.ts
    │   │   └── useBaz.ts
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

Ahora, las carpetas `__tests__/` cerradas.

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
    │   │   │   ├── useBarB.ts
    │   │   │   └── index.ts
    │   │   └── useBaz.ts
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

Y ahora, `useBar/` cerrada.

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

**¡Genial!**

>Siéntase libre de apoderarse de la flexibilidad que le brinda la programación orientada a componentes y componibles para crear una estructura de carpetas diseñada a su favor,

>Pero antes, discútelo con tu equipo de desarrollo.

