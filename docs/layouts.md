Por: [Ernesto Canquiz](https://github.com/ecanquiz)

# Anidando Diseños de Temas

>En esta sección trataremos los componentes que están en la carpeta `.src/core/layouts/`.

::: tip
Tenga en cuenta que, por convención, la carpeta `layouts/` puede denominarse `themes/`. Esta variación en la nomenclatura es cuestión de predilección y no afecta la funcionalidad. El nombramiento será por su preferencia o consensuada por el equipo de desarrollo.
:::

```sh{6}
└──src/
   ├──core/
   │  ├──assets/
   │  ├──components/
   │  ├──composables/
   │  ├──layouts/
   │  ├──middleware/
   │  ├──router/
   │  ├──types/
   │  └──utils/
   └──modules/
```

Haremos un ejemplo práctico con la carpeta que alberga el diseño del tema de nuestra aplicación.

## A simple vista

Si desplegamos la carpeta `.src/core/layouts/` y nos preguntamos:

>**¿Cuantos tipos de temas diseñados hay aquí?**

```sh{7,8,9,10,11,12,13}
└──src/
   ├──core/
   │  ├──assets/
   │  ├──components/
   │  ├──composables/
   │  ├──layouts/
   │  │  ├──Custom.vue
   │  │  ├──Default.vue
   │  │  ├──Emtpy.vue
   │  │  ├──Footer.vue
   │  │  ├──Header.vue
   │  │  ├──Navbar.vue
   │  │  └──Sidebar.vue
   │  ├──middleware/
   │  ├──router/
   │  ├──types/
   │  └──utils/
   └──modules/
```

Luego de leer uno a uno los archivos que están en la carpeta `.src/core/layouts/`, semánticamente deducimos que son tres: `Custom.vue`, `Default.vue` y `Emtpy.vue`. 

>Además, no sabemos a simple vista cuáles de estos componentes principales importan los componentes secundarios `Footer.vue`, `Header.vue`, `Navbar.vue` y `Sidebar.vue`, respectivamente. A menos que editemos cada uno de los componentes principales.

```sh{7,8,9}
└──src/
   ├──core/
   │  ├──assets/
   │  ├──components/
   │  ├──composables/
   │  ├──layouts/
   │  │  ├──Custom.vue
   │  │  ├──Emtpy.vue
   │  │  └──Default.vue
   │  ├──middleware/
   │  ├──router/
   │  ├──types/
   │  └──utils/
   └──modules/
```

>¿A quién pertenecen los componentes hijos respectivamente?

Supongamos que todos los componentes hijos pertenecen a `Default.vue`.

```sh{9,10,11,12,13,14}
└──src/
   ├──core/
   │  ├──assets/
   │  ├──components/
   │  ├──composables/
   │  ├──layouts/
   │  │  ├──Custom.vue
   │  │  ├──Emtpy.vue
   │  │  └──Default/
   │  │     ├──Footer.vue
   │  │     ├──Header.vue
   │  │     ├──Index.vue
   │  │     ├──Navbar.vue
   │  │     └──Sidebar.vue
   │  ├──middleware/
   │  ├──router/
   │  ├──types/
   │  └──utils/
   └──modules/
```

:::tip 
Tenga en cuenta que aquí, en el ejemplo, los componentes hijos `Footer.vue`, `Header.vue`, `Navbar.vue` y `Sidebar.vue` solo pueden ser hijos del componente padre `Default/Index.vue`. 
:::

Si lo desea, podemos ser más disciplinados.

```sh{9,10,11,12,13,14,15}
└──src/
   ├──core/
   │  ├──assets/
   │  ├──components/
   │  ├──composables/
   │  ├──layouts/
   │  │  ├──Custom.vue
   │  │  ├──Emtpy.vue
   │  │  └──Default/
   │  │     ├──components/
   │  │     │  ├──Footer.vue
   │  │     │  ├──Header.vue
   │  │     │  ├──Navbar.vue
   │  │     │  └──Sidebar.vue
   │  │     └──Index.vue
   │  ├──middleware/
   │  ├──router/
   │  ├──types/
   │  └──utils/
   └──modules/
```

Entonces, se verá así.

```sh{9,10,11}
└──src/
   ├──core/
   │  ├──assets/
   │  ├──components/
   │  ├──composables/
   │  ├──layouts/
   │  │  ├──Custom.vue
   │  │  ├──Emtpy.vue
   │  │  └──Default/
   │  │     ├──components/
   │  │     └──Index.vue
   │  ├──middleware/
   │  ├──router/
   │  ├──types/
   │  └──utils/
   └──modules/
```

## Componentes Reutilizables

Los componentes hijos `Footer.vue` y `Header.vue` solo pueden ser reutilizados dentro de la carpeta `./src/core/layouts`.

>Por lo que no tiene sentido colocarlos dentro de la carpeta  `./src/core/components`.

Veamos un ejemplo.

```sh{7,8,10,11,15,16}
└──src/
   ├──core/
   │  ├──assets/
   │  ├──components/
   │  ├──composables/
   │  ├──layouts/
   │  │  ├──Footer.vue
   │  │  ├──Header.vue
   │  │  ├──Custom/
   │  │  │  ├──Navbar.vue
   │  │  │  ├──Sidebar.vue
   │  │  │  └──Index.vue
   │  │  ├──Emtpy.vue
   │  │  └──Default/
   │  │     ├──Navbar.vue
   │  │     ├──Sidebar.vue
   │  │     └──Index.vue
   │  ├──middleware/
   │  ├──router/
   │  ├──types/
   │  └──utils/
   └──modules/
```

En el ejemplo anterior, suponga que los componentes hijos `Footer.vue` y `Header.vue` son reutilizados por los componentes padres `Custom/Index.vue` y `Default/Index.vue` respectivamente.

>Sin embargo, cada uno posee sus componentes hijos `Navbar.vue` y `Sidebar.vue` que les corresponden.

:::tip
Tenga en cuenta que no hay necesidad de agregar prefijos o sufijos a los respectivos componentes `Navbar.vue` y `Sidebar.vue`, ya que cada uno de ellos está ubicado dentro de la carpeta a la cual pertenece.
:::


Si lo desea, podemos ser más disciplinados.

```sh{7,8,9,11,12,13,17,18,19}
└──src/
   ├──core/
   │  ├──assets/
   │  ├──components/
   │  ├──composables/
   │  ├──layouts/
   │  │  ├──components/
   │  │  │  ├──Footer.vue
   │  │  │  └──Header.vue
   │  │  ├──Custom/
   │  │  │  ├──components/
   │  │  │  │  ├──Navbar.vue
   │  │  │  │  └──Sidebar.vue
   │  │  │  └──Index.vue
   │  │  ├──Emtpy.vue
   │  │  └──Default/
   │  │     ├──components/
   │  │     │  ├──Navbar.vue
   │  │     │  └──Sidebar.vue
   │  │     └──Index.vue
   │  ├──middleware/
   │  ├──router/
   │  ├──types/
   │  └──utils/
   └──modules/
```

Entonces, se verá así.


```sh{7,8,9,11,15}
└──src/
   ├──core/
   │  ├──assets/
   │  ├──components/
   │  ├──composables/
   │  ├──layouts/
   │  │  ├──components/
   │  │  │  ├──Footer.vue
   │  │  │  └──Header.vue
   │  │  ├──Custom/
   │  │  │  ├──components/
   │  │  │  └──Index.vue
   │  │  ├──Emtpy.vue
   │  │  └──Default/
   │  │     ├──components/
   │  │     └──Index.vue
   │  ├──middleware/
   │  ├──router/
   │  ├──types/
   │  └──utils/
   └──modules/
```

>¡Genial! Ahora se ve más limpio.


```sh{7}
└──src/
   ├──core/
   │  ├──assets/
   │  ├──components/
   │  ├──composables/
   │  ├──layouts/
   │  │  ├──components/
   │  │  ├──Custom/
   │  │  ├──Emtpy.vue
   │  │  └──Default/
   │  ├──middleware/
   │  ├──router/
   │  ├──types/
   │  └──utils/
   └── modules/
```

::: tip
Los componentes hijos que están dentro de la carpeta `./src/core/layouts/components/` solo pertenecen a los componentes padres de la carpeta `./src/core/layouts/`.

**No tiene sentido colocarlos lejos creando una carpeta `./src/core/components/layouts/` para ese propósito.**
:::
