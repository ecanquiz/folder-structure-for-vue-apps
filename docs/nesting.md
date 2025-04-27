Por: [Ernesto Canquiz](https://github.com/ecanquiz)

# Anidamiento

>En este apartado exploraremos una técnica estructural de **anidamiento de carpetas** de componentes y componibles.

## Cuando el componente `Foo.vue` empieza a crecer

Supongamos que necesitamos refactorizar la vista `Foo.vue` porque el código fuente está empezando a crecer.

>Crearemos un componente hijo que llamaremos `Children.vue` para desacoplar parte del código. Dicho componente no es reutilizable, ya que solo es de utilidad para el componente padre `Foo.vue`.

Igualmente, como buena práctica, creamos el componible `useFoo.ts` para separar la regla de negocio de la interfaz gráfica.

```sh{4,5,6,7}
└── src/
    ├── router/
    └── views/
        └── Foo/
        │   ├── Children.vue
        │   ├── Index.vue
        │   └── useFoo.ts
        ├── Bar.vue
        └── Baz.vue
```

Tanto el componente `Children.vue` como el composable `useFoo.ts` pertenecen únicamente a la carpeta `./src/views/Foo/`, por lo que no tiene sentido separarlos en carpetas distintas.

:::tip
Tenga en cuenta que desde ahora `./src/views/Foo.vue` será llamado `./src/views/Foo/Index.vue`. Por lo tanto, este cambio debe ser actualizado en el archivo `./src/router/index.ts`.
:::

## `Foo/Index.vue` continúa aumentando

Ahora, el componente padre necesita más componentes y componibles hijos. Estos solo son utiles para `.src/views/Foo/Index.vue`.

```sh{6,7,10,11}
└── src/
    ├── router/
    └── views/
        └── Foo/
        │   ├── Children.vue
        │   ├── ChildrenAnother.vue
        │   ├── ChildrenAnotherOne.vue
        │   ├── Index.vue
        │   ├── useFoo.ts
        │   ├── useFooAnother.ts
        │   └── useFooAnotherOne.ts
        ├── Bar.vue
        └── Baz.vue
```

Entonces, ¿qué le parece si a continuación organizamos un poco más la estructura?

```sh{5,9}
└── src/
    ├── router/
    └── views/
        ├── Foo/
        │   ├── components/
        │   │   ├── Children.vue
        │   │   ├── ChildrenAnother.vue
        │   │   └── ChildrenAnotherOne.vue
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

>¡Genial! Ahora tenemos una estructura más organizada.

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

>Pero, ¿qué sentido le daremos ahora a las archiconocidas carpetas `./src/components` y `./src/composables`?

## Código Reutilizable Globalmente

En las carpetas `./src/components` y `./src/composables` colocaremos, respectivamente, solo los componentes y componibles que pueden ser reutilizados por cualquiera de las vistas.

```sh{3,4,5,6,7,9,10}
└── src/
    ├── components/
    │   ├── GlobalReusable/
    │   │   ├── Children.vue
    │   │   ├── ChildrenOther.vue
    │   │   └── Index.vue
    │   └── GlobalReusableOther.vue
    ├── composables/
    │   ├── useGlobalReusable.ts
    │   └── useGlobalReusableOther.ts
    ├── router/
    └── views/
```

>Tenga en cuenta que el componente principal `./src/components/GlobalReusable/Index.vue` posee dos componentes secundarios:

>- `./src/components/GlobalReusable/Children.vue`
>- `./src/components/GlobalReusable/ChildrenOther.vue`

>Estos dos componentes hijos solo tendrán sentido dentro de su componente padre.

## Un Paso Más Allá

>Ahora que hemos llegado aquí, usted se preguntará:
>
>**¿Cómo quedará todo esto con la estructura modular?**.

Echemos un vistazo a la siguiente estructura:

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
        │    │   │   ├── Children.vue
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

>**Este enfoque modular y anidado proporciona una base sólida para el desarrollo de aplicaciones Vue.**

>Al mantener los componentes y componibles secundarios dentro de sus respectivos componentes y componibles principales, se establece una exclusividad clara y se fomenta la reutilización de aquellos que son globales.