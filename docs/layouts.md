# Diseños

>Los componentes que están en la carpeta `.src/core/layouts/`.

Ahora, haremos un ejemplo práctico con la carpeta que alberga el layout de nuestra aplicación.

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

## A simple vista

Si desplegamos la carpeta `.src/core/layouts/` y nos preguntamos:

>**¿Cuantos diseños hay?**

```sh{7,8,9,10,11,12,13}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   ├── layouts/
    │   │   ├── Custom.vue
    │   │   ├── Default.vue
    │   │   ├── Emtpy.vue
    │   │   ├── Footer.vue
    │   │   ├── Header.vue
    │   │   ├── Navbar.vue
    │   │   └── Sidebar.vue
    │   ├── composables/
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

Después de leer uno a uno los archivos que están en la carpeta `.src/core/layouts/`, semánticamente deducimos que son tres: `Custom.vue`, `Default.vue` y `Emtpy.vue`.

```sh{7,8,9}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   ├── layouts/
    │   │   ├── Custom.vue
    │   │   ├── Emtpy.vue
    │   │   └── Default.vue
    │   ├── composables/
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

>¿A quién pertenecen los componentes hijos respectivamente?

Supongamos que todos los componentes hijos pertenecen a `Default.vue`.

```sh{9,10,11,12,13,14}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   ├── layouts/
    │   │   ├── Custom.vue
    │   │   ├── Emtpy.vue
    │   │   └── Default/
    │   │       ├── Footer.vue
    │   │       ├── Header.vue
    │   │       ├── Index.vue
    │   │       ├── Navbar.vue
    │   │       └── Sidebar.vue
    │   ├── composables/
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

:::tip 
Tenga en cuenta que los componentes hijos `Footer.vue`, `Header.vue`, `Navbar.vue` y `Sidebar.vue` solo pueden ser hijos del componente `Default/Index.vue`. 
:::

Si lo desea, podemos ser más disciplinados.

```sh{8,9,10,11,12,13,14}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   ├── layouts/
    │   │   ├── Emtpy.vue
    │   │   └── Default/
    │   │       ├── components/
    │   │       │   ├── Footer.vue
    │   │       │   ├── Header.vue
    │   │       │   ├── Navbar.vue
    │   │       │   └── Sidebar.vue
    │   │       └── Index.vue
    │   ├── composables/
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

Entonces, se verá así.

```sh{8,9,10}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   ├── layouts/
    │   │   ├── Emtpy.vue
    │   │   └── Default/
    │   │       ├── components/
    │   │       └── Index.vue
    │   ├── composables/
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

## Componentes Reutilizables

Los componentes hijos `Footer.vue`, `Header.vue`, `Navbar.vue` y `Sidebar.vue` solo pueden ser hijos compartidos dentro de la carpeta `./src/core/layouts`. Por lo que no tiene sentido colocarlos dentro de la carpeta  `./src/core/components`. Veamos un ejemplo.


```sh{7,8,10,11,15,16}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   ├── layouts/
    │   │   ├── Footer.vue
    │   │   ├── Header.vue
    │   │   ├── Custom/
    │   │   │   ├── Navbar.vue
    │   │   │   ├── Sidebar.vue
    │   │   │   └── Index.vue
    │   │   ├── Emtpy.vue
    │   │   └── Default/
    │   │       ├── Navbar.vue
    │   │       ├── Sidebar.vue
    │   │       └── Index.vue
    │   ├── composables/
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

>En el ejemplo anterior, los componentes hijos `Footer.vue` y `Header.vue` son reutilizados por los componentes padres `Custom/Index.vue` y `Default/Index.vue` respectivamente.

Sin embargo, cada uno posee sus correspondientes hijos `Navbar.vue` y `Sidebar.vue` que les corresponden.

Si lo desea, podemos ser más disciplinados.

```sh{7,8,9,11,12,13,17,18,19}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   ├── layouts/
    │   │   ├── components/
    │   │   │   ├── Footer.vue
    │   │   │   └── Header.vue
    │   │   ├── Custom/
    │   │   │   ├── components/
    │   │   │   │   ├── Navbar.vue
    │   │   │   │   └── Sidebar.vue
    │   │   │   └── Index.vue
    │   │   ├── Emtpy.vue
    │   │   └── Default/
    │   │       ├── components/
    │   │       │   ├── Navbar.vue
    │   │       │   └── Sidebar.vue
    │   │       └── Index.vue
    │   ├── composables/
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

Entonces, se verá así.


```sh{7,8,9,11,15}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   ├── layouts/
    │   │   ├── components/
    │   │   │   ├── Footer.vue
    │   │   │   └── Header.vue
    │   │   ├── Custom/
    │   │   │   ├── components/
    │   │   │   └── Index.vue
    │   │   ├── Emtpy.vue
    │   │   └── Default/
    │   │       ├── components/
    │   │       └── Index.vue
    │   ├── composables/
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```
Y así.

```sh{7}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   ├── composables/
    │   ├── layouts/
    │   │   ├── components/
    │   │   ├── Custom/
    │   │   ├── Emtpy.vue
    │   │   └── Default/
    │   ├── composables/
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

::: tip
Los componentes hijos que están dentro de la carpeta `./src/core/layouts/componentes/` solo pertenecen a los componentes padres de la carpeta `./src/core/layouts/`.

No tiene sentido colocarlos lejos creando una carpeta `./src/core/components/layouts/` para ese propósito.
:::
