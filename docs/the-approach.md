# El Enfoque

Para nuestro enfoque, partiremo de un pequeña aplicación que solo tiene 3 vistas o páginas. Por lo que empezaremos creando dos correspondientes carpetas:

1. **`router/`**: Aquí configuraremos el sistema de rutas.
2. **`views/`**: Aquí crearemos las vistas o páginas de nuestra aplicación.

```sh{5,6,7}
└── src/
    ├── router/
        └── index.ts
    └── views/
        ├── Foo.vue
        ├── Bar.vue
        └── Baz.vue
```

:::tip Por ahora
No necesitamos más carpetas, otras serán creadas en el momento que sea necesario.
:::

## Cuando el componente `Foo.vue` empieza a crecer

Supongamos que necesitamos refactorizar la vista `Foo.vue` porque está empezando a crecer de tamaño el código fuente. Crearemos un componente hijo que llamaremos `FooChildren.vue` para desacoplar parte del ćodigo. Dicho componente **no es reutilizable** ya que solo es de utilidad para el componente padre.

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

Tenga en cuenta que desde ahora `./src/views/Foo.vue` será llamado `./src/views/Foo/Index.vue`. Por lo que este cambio debe ser actualizado en el archivo `./src/router/index.ts`.

## `Foo/Index.vue` continua aumentando

Ahora, el componente padre necesita más componentes y composables hijos. 

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

Entonces, ¿qué le parece si a continuación ponemos un poco más de orden?

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

## Estructura Clásica

La estructura clásica de un proyecto Vue.js es la siguiente:

```sh{2,3}
└── src/
    ├── components/
    ├── composables/
    ├── router/
    └── views/
```

>¿Pero, qué sentido le daremos ahora a las carpetas`./src/components` y `./src/composables`?

## Código Reutilizable Globálmente

En las carpetas`./src/components` y `./src/composables` colocaremos respectivamente solo los componentes y composables que pueden ser reutilizados por cualquiera de las vistas.

```sh{3,4,5,6,7,9,10}
└── src/
    ├── components/
    │   ├── GlobalReusable/
    │   │   ├── GlobalReusableChildren.vue
    │   │   ├── GlobalReusableChildrenOther.vue
    │   │   └── Index.vue
    │   └── GlobalReusableOther.vue
    ├── composables/
    │   ├── useGlobalReusable.ts
    │   └── useGlobalReusableOther.ts
    ├── router/
    └── views/
```

## Un Paso Más Allá

>Ahora que hemos llegado aquí, se preguntará...
>
>**¿Cómo quedará con la estructura modular?**.

Echemos un vistazo a lo siguiente.

```sh{4,5,7,8,14,15,16,17,19,20}
└── src/
    ├── core/
    │   ├── components/
    │   │   ├── GlobalReusable/
    │   │   └── GlobalReusableOther.vue
    │   ├── composables/
    │   │   ├── useGlobalReusable.ts
    │   │   └── useGlobalReusableOther.ts
    │   └── router/    
    └── modules/
        ├── ModuleA
        ├── ModuleB
        │    ├── components/
        │    │   ├── OnlyReusableByModuleB/
        │    │   │   ├── OnlyReusableByModuleBChildren.vue
        │    │   │   └── Index.vue
        │    │   └── OnlyReusableByModuleBOther.vue
        │    ├── composables/
        │    │   ├── useOnlyReusableByModuleB.ts
        │    │   └── useOnlyReusableByModuleBOther.ts
        │    ├── routes/
        │    └── views/
        │       ├── Foo/
        │       ├── Bar.vue
        │       └── Baz.vue
        └── ModuleC
```

Analizaremos los pros y los contras...

