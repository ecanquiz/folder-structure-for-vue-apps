# Componentes

En esta sección, realizaremos un ejemplo práctico con un componente genérico reutilizable que tiene un componente secundario que no es reutilizable por sí solo. Está ubicado en la carpeta `./src/core/components/`.

>Es el caso del componente `RadioGroup.vue`. Este componente tiene un componente `Radio.vue`, que por sí solo es inútil.

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

Dado que el componente `Radio.vue` es inútil por sí solo, lo encapsularemos en una carpeta llamada `./src/core/components/RadiGroup/`.

También moveremos el componente `RadiGroup.vue` dentro de esta carpeta y lo renombraremos `Index.vue`.

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
Asegúrese de realizar las actualizaciones respectivas donde se importó este componente.
```vue{3,4}
<script setup lang="ts">
// ...
// import AppRadioGroup from "./core/components/app/RadioGroup.vue"
import AppRadioGroup from "./core/components/app/RadioGroup/Index.vue"

// ...
</script>
```
:::

Ahora, veamos como luce cuando el componente `RadioGroup/` está cerrado.

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
