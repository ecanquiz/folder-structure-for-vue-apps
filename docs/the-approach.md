# El Enfoque

Para nuestro enfoque, partiremo de un pequeña aplicación que solo tiene 3 vistas o páginas. Por lo que empezaremos creando dos correspondientes carpetas:

1. **`router/`**: Aquí configuraremos el sistema de rutas.
2. **`views/`**: Aquí crearemos las vistas o páginas de nuestra aplicación.

```sh{4,5,6}
└── src/
    ├── router/
    └── views/
        ├── Foo.vue
        ├── Bar.vue
        └── Baz.vue
```

## El componente `Foo.vue` empieza a crecer

Supongamos que necesitamos refactorizar la vista `Foo.vue`, creando un componente hijo que llamaremos `FooChildren.vue`. Dicho componente **no es reutilizable** ya que solo es de utilidad para el componente padre.

Igualmente, y como buena práctica, creamos el composable `useFoo.ts`, para separar la regla de negocio de la interfaz gráfica.

```sh{4,5,6,7}
└── src/
    ├── router/
    └── views/
        └── Foo/
        │   ├── FooChildren.vue
        │   ├── Index.vue
        │   └── useFoo.ts
        ├── Bar.vue
        └── Baz.vue
```

Tenga en cuenta que desde ahora `src/views/Foo.vue` será llamado `src/views/Foo/Index.vue`. Por lo que este cambio debe ser establecido en `src/router`.

## `Foo/Index.vue` continua aumentando

El componente padre necesita más componentes y composables hijos. 

```sh{6,7,10,11}
└── src/
    ├── router/
    └── views/
        └── Foo/
        │   ├── FooChildren.vue
        │   ├── FooChildrenAnother.vue
        │   ├── FooChildrenAnotherOne.vue
        │   ├── Index.vue
        │   ├── useFoo.ts
        │   ├── useFooAnother.ts
        │   └── useFooAnotherOne.ts
        ├── Bar.vue
        └── Baz.vue
```

¿Qué le parece si a continuación ponemos un poco más de orden?

```sh{5,9}
└── src/
    ├── router/
    └── views/
        ├── Foo/
        │   ├── components/
        │   │   ├── FooChildren.vue
        │   │   ├── FooChildrenAnother.vue
        │   │   └── FooChildrenAnotherOne.vue
        │   ├── composables/
        │   │   ├── useFoo.ts
        │   │   ├── useFooAnother.ts
        │   │   └── useFooAnotherOne.ts
        │   └── Index.vue
        ├── Bar.vue
        └── Baz.vue
```
Así lucirá desde afuera.

```sh{5,6}
└── src/
    ├── router/
    └── views/
        ├── Foo/
        │   ├── components/
        │   ├── composables/
        │   └── index.vue
        ├── Bar.vue
        └── Baz.vue
```

¡Genial! Ahora tenemos una estructura más organizada.

```sh{4}
└── src/
    ├── router/
    └── views/
        ├── Foo/
        ├── Bar.vue
        └── Baz.vue
```

```sh
└── src/
    ├── components/
    ├── composables/
    ├── router/
    └── views/
```

```sh
└── src/
    ├── components/
    │   ├── GlobalA.vue
    │   ├── GlobalB/
    │   │   ├── GlobalB1.vue
    │   │   ├── GlobalB2.vue
    │   │   └── Index.vue
    │   └── GlobalC.vue
    ├── composables/
    │   ├── useGlobal1.ts
    │   ├── useGlobal2.ts
    │   └── useGlobal3.ts
    ├── router/
    └── views/
```


```sh
└── src/
    ├── components/
    │   ├── SuperGlobalA.vue
    │   ├── SuperGlobalB/
    │   │   ├── SuperGlobalB1.vue
    │   │   ├── SuperGlobalB2.vue
    │   │   └── Index.vue
    │   └── SuperGlobalC.vue
    ├── composables/
    │   ├── useSuperGlobal1.ts
    │   ├── useSuperGlobal2.ts
    │   └── useSuperGlobal3.ts
    ├── router/
    └── modules/
        ├── ModuleA
        ├── ModuleB
        │    ├── components/
        │    │   ├── GlobalA.vue
        │    │   ├── GlobalB/
        │    │   │   ├── GlobalB1.vue
        │    │   │   ├── GlobalB2.vue
        │    │   │   └── Index.vue
        │    │   └── GlobalC.vue
        │    ├── composables/
        │    │   ├── useGlobal1.ts
        │    │   ├── useGlobal2.ts
        │    │   └── useGlobal3.ts
        │    ├── routes/
        │    └── views/
        │       ├── Foo/
        │       │   ├── components/
        │       │   │    ├── FooA.vue
        │       │   │    ├── FooB.vue
        │       │   │    └── FooC.vue
        │       │   ├── composables/
        │       │   │   ├── useFooA.ts
        │       │   │   ├── useFooB.ts
        │       │   │   └── useFooC.ts
        │       │   └── Index.vue
        │       ├── Bar.vue
        │       └── Baz.vue
        └── ModuleC


```

```sh
└── src/
    ├── router/
    └── views/
        ├── Foo/
        ├── Bar.vue
        └── Baz.vue
```

```sh
└── src/
    ├── components/ 
    ├── composables/
    └── views/
        ├── foo/
        ├── bar/
        └── baz/
```





```sh{3,4,5}
└── src/
    ├── core/
    │   ├── assets/
    │   │   ├── css/
    │   │   └── images/
    │   ├── components/
    │   ├── composables/
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

```sh{4,5,6,7,8,9,10,11,12,13}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   │   ├── app/
    │   │   │   ├── Input.vue
    │   │   │   ├── Pagination.vue
    │   │   │   ├── Select.vue
    │   │   │   └── Textarea.vue    
    │   │   ├── icons/
    │   │   │   ├── foo.vue
    │   │   │   └── bar.vue  
    │   │   └── layouts/ 
    │   ├── composables/
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

```sh{7,8,9,10,11,12,13,14,15}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   │   ├── app/
    │   │   ├── icons/
    │   │   └── layouts/
    │   │       ├── Emtpy.vue
    │   │       └── Default/
    │   │           └── components/
    │   │           │   ├── Footer.vue
    │   │           │   ├── Header.vue
    │   │           │   ├── Navbar.vue
    │   │           │   └── Sidebar.vue
    │   │           └── Index.vue
    │   ├── composables/
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

```sh{2,3,5,6,7}
└── Default/
    ├── Footer.vue
    ├── Header.vue
    ├── Index.vue
    ├── Navbar.vue
    └── Sidebar.vue
```

```sh{2,3,4,5,6}
└── Default/
    ├── components/
    │   ├── Footer.vue
    │   ├── Header.vue
    │   ├── Navbar.vue
    │   └── Sidebar.vue
    └── Index.vue
```

```sh{2}
└── Default/
    ├── components/
    └── Index.vue
```

```sh{6,7,8}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   │   ├── app/
    │   │   │   ├── Input/
    │   │   │   │   ├── __tests__/
    │   │   │   │   └── Index.vue 
    │   │   │   ├── Pagination.vue
    │   │   │   ├── Select.vue
    │   │   │   └── Textarea.vue    
    │   │   ├── icons/
    │   │   └── layouts/
    │   ├── composables/
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

```sh
├── Input/
│   ├── __tests__/
│   ├── composables/
│   │   └── useInput.ts
│   └── Index.vue 
```


```sh
├── Input
│   ├── __tests__/
│   ├── composables/
│   │   ├── __tests__/
│   │   └── useInput.ts
│   └── Index.vue 
```

```sh{6}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   ├── layouts/
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
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

```sh{7,8,9,11,12,14,15,16,18,19}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   ├── middleware/
    │   │   ├── admin.ts
    │   │   ├── auth.ts
    │   │   └── guest.ts
    │   ├── router/
    │   │   ├── index.ts
    │   │   └── middlewarePipeline.ts
    │   ├── types/
    │   │   ├── custom.ts
    │   │   ├── index.ts
    │   │   └── generic.ts
    │   └── utils/
    │   │   │   ├── helpers.ts
    │   │   │   └── libs.ts
    └── modules/
```

```sh{3,4,5}
└── src/
    ├── core/
    └── modules/
        ├── Auth/
        └── User/
```

```sh{4,5,6,7,8,9,10}
└── src/
    ├── core/
    └── modules/
        ├── Auth/
        │   ├── components/
        │   ├── router/
        │   ├── services/
        │   ├── stores/
        │   ├── types/
        │   └── views/
        └── User/
```

```sh{5,6,7,8,9}
└── src/
    ├── core/
    └── modules/
        ├── Auth/
        └── User/
            ├── router/
            ├── services/
            ├── types/
            └── views/
```



This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
