Por: [Ernesto Canquiz](https://github.com/ecanquiz)

# Anidando Componentes

>En esta sección, realizaremos un ejemplo práctico utilizando un componente genérico reutilizable que contiene un componente secundario que no es útil por sí solo. Este ejemplo se encuentra en la carpeta `./src/core/components/`.

Consideremos el componente [`RadioGroup.vue`](https://ecanquiz.github.io/vue-forms-tuto/tuto/app-radiogroup.html), que incluye un componente [`Radio.vue`](https://ecanquiz.github.io/vue-forms-tuto/tuto/app-radio.html), el cual, por sí mismo, no tiene funcionalidad. La estructura inicial es la siguiente:

```sh{16,17}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   │   ├── app/
    │   │   │   ├── Avatar.vue
    │   │   │   ├── Button.vue
    │   │   │   ├── Card.vue
    │   │   │   ├── Checkbox.vue
    │   │   │   ├── ErrorMessage.vue
    │   │   │   ├── FlassMessage.vue
    │   │   │   ├── Header.vue
    │   │   │   ├── Input.vue
    │   │   │   ├── Link.vue
    │   │   │   ├── Pagination.vue
    │   │   │   ├── Radio.vue
    │   │   │   ├── RadioGroup.vue
    │   │   │   ├── Select.vue
    │   │   │   └── Textarea.vue    
    │   │   └── icons/ 
    │   ├── composables/
    │   ├── layouts/
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

>Dado que el componente `Radio.vue` es inútil por sí solo, lo encapsularemos en una nueva carpeta llamada `./src/core/components/RadioGroup/`. Además, moveremos el componente `RadioGroup.vue` a esta carpeta y lo renombraremos a `Index.vue` para mejorar la organización.

La nueva estructura será:

```sh{16,17,18}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   │   ├── app/
    │   │   │   ├── Avatar.vue
    │   │   │   ├── Button.vue
    │   │   │   ├── Card.vue
    │   │   │   ├── Checkbox.vue
    │   │   │   ├── ErrorMessage.vue
    │   │   │   ├── FlassMessage.vue
    │   │   │   ├── Header.vue
    │   │   │   ├── Input.vue
    │   │   │   ├── Link.vue
    │   │   │   ├── Pagination.vue
    │   │   │   ├── RadioGroup/
    │   │   │   │   ├── Index.vue
    │   │   │   │   └── Radio.vue
    │   │   │   ├── Select.vue
    │   │   │   └── Textarea.vue    
    │   │   └── icons/ 
    │   ├── composables/
    │   ├── layouts/
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

:::tip
Asegúrese de realizar las actualizaciones necesarias en los lugares donde se importó este componente.
```vue{3,4}
<script setup lang="ts">
// ...
// import AppRadioGroup from "./core/components/app/RadioGroup.vue"
import AppRadioGroup from "./core/components/app/RadioGroup/Index.vue"

// ...
</script>
```
:::

Ahora, veamos cómo luce la estructura cuando el componente `RadioGroup/` está cerrado:

```sh{16}
└── src/
    ├── core/
    │   ├── assets/
    │   ├── components/
    │   │   ├── app/
    │   │   │   ├── Avatar.vue
    │   │   │   ├── Button.vue
    │   │   │   ├── Card.vue
    │   │   │   ├── Checkbox.vue
    │   │   │   ├── ErrorMessage.vue
    │   │   │   ├── FlassMessage.vue
    │   │   │   ├── Header.vue
    │   │   │   ├── Input.vue
    │   │   │   ├── Link.vue
    │   │   │   ├── Pagination.vue
    │   │   │   ├── RadioGroup/
    │   │   │   ├── Select.vue
    │   │   │   └── Textarea.vue    
    │   │   └── icons/ 
    │   ├── composables/
    │   ├── layouts/
    │   ├── middleware/
    │   ├── router/
    │   ├── types/
    │   └── utils/
    └── modules/
```

>¡Genial! Ahora se ve más limpio.
