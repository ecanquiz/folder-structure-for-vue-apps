# Estructuras Básica de Carpetas

La estructura de carpetas organiza los archivos y componentes de la aplicación. Una estructura clara mejora la legibilidad y escalabilidad del proyecto.

A continuación se muestra una estructura básica de un proyecto Vue.

```sh
└── src/
    ├── assets/
    ├── components/
    ├── router/
    ├── store/
    └── views/
```

::: tip Tenga en cuenta
Por convensión, la carpeta `views` puede que sea llamada `pages`.
:::

## Cuando el Proyecto Empieza a Crecer


A medida que el proyecto avanza comenzamos a necesitar carpetas adicionales de agrupación.

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

::: tip Tenga en cuenta
Por convensión, la carpeta `layouts/` puede que sea llamada `themes/`. Así como la carpeta `services/` puede ser llamada `apis/`. Y también, la carpeta `utils/` puede ser llamada `libs`. Las distintas denominaciones son cuestiones de forma más no de fondo.
:::

## Estructura Modular


La inevitable escalada del proyecto puede que se transforme en una **estructura modular**.

>Una **estructura modular** de carpetas organiza el proyecto en módulos independientes, cada uno con su propia base de código. Esto facilita la organización del código. 

```sh{10,11,12,13,14,15,16,17,18,19,20}
├── src/
│   ├── assets/
│   ├── components/
│   ├── composables/
│   ├── layouts/
│   ├── middleware/
│   ├── router/
│   ├── types/
│   ├── utils/
│   └── modules/
│       ├── Auth/
│       │   ├── components/
│       │   ├── composables/
│       │   ├── router/
│       │   ├── services/
│       │   ├── stores/
│       │   ├── types/
│       │   └── views/
│       ├── User/
│       ...
└── tests/
```

::: warning Advertencia
Tenga en cuenta que en la carpeta `tests/` se crean los archivos de pruebas, es factible que estos archivos sean organizados con una estructura parecida a la carpeta `src`.
:::


    







# El Problema

Suponiendo que vamos a revisar la página de **Iniciar Sesión** para depurar nuestro código. Entramos en la carpeta `src/modules/Auth/views/` y seleccionamos el archivo `Login.vue`.

![the-problem](./img/the-problem-01.png)

Tenga en cuenta que `Login.vue` importa dos (2) archivos: el componente `LoginForm.vue` y el composable `useLogin.ts`, respectivamente.

![the-problem](./img/the-problem-02.png)

Afortunadamente nuestro código ya está ordenado por módulos. En este caso, todo lo que necesitamos revisar está ubicado en el módulo `Auth`.

![the-problem](./img/the-problem-03.png)

Tomando en cuenta que estos archivos no son reutilizables, nos preguntamos:

- Es suficiente agrupar los archivos por módulos y luego por el tipo de archivos? En este caso, para clasificarlos nos obliga a colocarle un prefijo (o sufijo) para relacionarlo con el correspondiente componente padre.
- En esta estructura de carpetas, prevalece el tipo de archivo por encima de la particular regla de negocio a la que concierne?
- Es necesario que estén tan separados entre ellos, `Login.vue`, `FormLogin` y `useLogin.ts`, respectivamente? Qué sucederá cuando la aplicación empiece a escalar con más archivos y más módulos?

A continuación, exploremos alternativas que pueden ser adoptadas para intentar lograr una estructura de carpetas más cómoda, flexible y escalable.


# Solución


```sh
└── src/
    ├── core/ 
    └── modules/
```


```sh{2,3,4,5,6,7,8,9}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
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
