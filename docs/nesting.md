# Anidamiento

>En este apartado exploraremos una técnica estructural de **anidamiento de carpetas** de componentes y composables.

## Cuando el componente `Foo.vue` empieza a crecer

Supongamos que necesitamos refactorizar la vista `Foo.vue` porque el código fuente está empezando a crecer.

>Crearemos un componente hijo que llamaremos `Children.vue` para desacoplar parte del código. Dicho componente no es reutilizable, ya que solo es de utilidad para el componente padre `Foo.vue`.

Igualmente, como buena práctica, creamos el composable `useFoo.ts` para separar la regla de negocio de la interfaz gráfica.

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

Tanto `Children.vue` como `useFoo.ts` pertenecen únicamente a `./src/views/Foo/`, por lo que no tiene sentido separarlos en carpetas distintas.

:::tip
Tenga en cuenta que desde ahora `./src/views/Foo.vue` será llamado `./src/views/Foo/Index.vue`. Por lo tanto, este cambio debe ser actualizado en el archivo `./src/router/index.ts`.
:::

## `Foo/Index.vue` continúa aumentando

Ahora, el componente padre necesita más componentes y composables hijos.

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

>Pero, ¿qué sentido le daremos ahora a las archiconocidas carpetas `./src/components` y `./src/composables`?

## Código Reutilizable Globalmente

En las carpetas `./src/components` y `./src/composables` colocaremos, respectivamente, solo los componentes y composables que pueden ser reutilizados por cualquiera de las vistas.

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

>Ahora que hemos llegado aquí, usted se preguntará...
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

## Análisis de Pros y Contras

### Pros

- **Agrupación de Archivos Relacionados**: Los archivos que están estrechamente relacionados quedan todos juntos en la misma carpeta. Esto reduce la necesidad de navegar por múltiples carpetas para revisarlos, lo que mejora la eficiencia en el desarrollo.
- **Nombres de Archivos Más Intuitivos**: Si la vista se llama `../views/Login/Index.vue`, su componente hijo puede llamarse directamente `../views/Login/components/Form.vue`. En comparación con la estructura tradicional, donde se utilizarían nombres como `../../components/FormLogin.vue` o `../../components/Login/Form.vue`, la nueva nomenclatura es más clara y directa.
- **Claridad en la Exclusividad**: Los componentes y composables anidados dentro de la vista son de exclusividad de la misma, lo que facilita la comprensión de su propósito y uso.
- **Reutilización Clara**: Los componentes y composables que no están anidados dentro de las carpetas `views/` son reutilizables dentro de la jerarquía, lo que fomenta la modularidad y la reutilización del código.



### Contras

- **Necesidad de Refactorización**:  Es necesario estar pendiente de refactorizar la estructura según la jerarquía cada vez que se encuentre un componente hijo que pueda ser reutilizado por otro padre. Cuando esto suceda, es necesario moverlo a una carpeta `components/` en algún lugar superior según la jerarquía, pero fuera de cualquier carpeta `views/`. Lo mismo sucede con los composables respectivamente.

- **Posible Complejidad en Proyectos Grandes**: A medida que el proyecto crece, la anidación de componentes puede llevar a una estructura más compleja, lo que podría dificultar la navegación y la comprensión de la jerarquía de componentes y composables. Sin embargo, cuando esto suceda, simplemente se pueden cerrar todas las carpetas de las vistas que no le interesen y centrarse solo en la vista del momento en cuestión.

- **Dependencia de la Estructura**: La organización de los componentes y composables depende en gran medida de la estructura de las vistas. Si se realizan cambios en la estructura de las vistas, puede ser necesario realizar ajustes en distintos lugares.


## Resumen

Este enfoque propuesto para la organización de un proyecto Vue.js va más allá de la simple estructura modular, incorporando la anidación de componentes y composables dentro de las vistas según su propósito. Esta metodología permite una agrupación lógica de archivos relacionados, facilitando la navegación y la comprensión del código. Al mantener los componentes y composables específicos dentro de sus respectivas vistas, se establece una clara exclusividad y se fomenta la reutilización de aquellos que son globales.

Sin embargo, este enfoque también presenta desafíos, como la necesidad de refactorizar la estructura cuando se identifican componentes reutilizables y la posible complejidad en proyectos grandes. A pesar de estos contras, la capacidad de centrarse en una vista específica y cerrar las carpetas no relevantes ayuda a mitigar la complejidad.

>En resumen, este enfoque modular y anidado proporciona una base sólida para el desarrollo de aplicaciones Vue.js, promoviendo la organización y la claridad en el código, mientras que también requiere una atención cuidadosa a la estructura a medida que el proyecto evoluciona.
