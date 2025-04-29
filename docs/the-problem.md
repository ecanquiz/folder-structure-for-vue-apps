Por: [Ernesto Canquiz](https://github.com/ecanquiz)

# El Problema

>Supongamos que vamos a revisar la página de Iniciar Sesión para depurar nuestro código. Entramos en la carpeta `src/modules/Auth/views/` y seleccionamos el archivo `Login.vue`.

```sh{14}
└──src/
   ├──core/
   └──modules/
      ├──Auth/
      │  ├──components/
      │  ├──composables/
      │  ├──router/
      │  ├──services/
      │  ├──stores/
      │  ├──types/
      │  └──views/
      │     ├──Dashboard.vue
      │     ├──Home.vue
      │     ├──Login.vue
      │     ├──Profile.vue
      │     └──Register.vue
      └──User/
```

Al editar el archivo `Login.vue`, nos encontramos con un [SFC](https://vuejs.org/guide/scaling-up/sfc) _(Single File Component)_ parecido al siguiente:

📃`Login.vue`
```vue{2,3}
<script setup lang="ts">  
import FormLogin from "../components/FormLogin.vue";
import { useLogin } from '../composables/useLogin'  
  
// omitted for brevity ...
const {erro, sending, login} = useLogin();
// omitted for brevity ...
</script>

<template>
    <!-- omitted for brevity ... -->
    <FormLogin
      @submit='login($event)'
      :sending='sending'
      :error='error'
    />
    <!-- omitted for brevity ... -->
</template>
```

Tenga en cuenta que el archivo `Login.vue` importa dos (2) archivos: 

1) El componente `LoginForm.vue`.
```sh{7,25}
└──src/
   ├──core/
   └──modules/
      ├──Auth/
      │  ├──components/
      │  │  ├──About.vue
      │  │  ├──FormLogin.vue
      │  │  ├──FormRegister.vue
      │  │  ├──FormUpdatePassword.vue
      │  │  ├──FormUser.vue
      │  │  ├──FormVerifyEmail.vue
      │  │  ├──Logout.vue
      │  │  ├──ProfileFileUpload.vue
      │  │  ├──ProfileUpdatePassword.vue
      │  │  ├──ProfileUser.vue
      │  │  └──ProfileVerifyEmail.vue
      │  ├──composables/
      │  ├──router/
      │  ├──services/
      │  ├──stores/
      │  ├──types/
      │  └──views/
      │     ├──Dashboard.vue
      │     ├──Home.vue
      │     ├──Login.vue
      │     ├──Profile.vue
      │     └──Register.vue
      └──User/
```

2) El componible `useLogin.ts`.
```sh{7,18,29}
└──src/
   ├──core/
   └──modules/
      ├──Auth/
      │  ├──components/
      │  │  ├──About.vue
      │  │  ├──FormLogin.vue
      │  │  ├──FormRegister.vue
      │  │  ├──FormUpdatePassword.vue
      │  │  ├──FormUser.vue
      │  │  ├──FormVerifyEmail.vue
      │  │  ├──Logout.vue
      │  │  ├──ProfileFileUpload.vue
      │  │  ├──ProfileUpdatePassword.vue
      │  │  ├──ProfileUser.vue
      │  │  └──ProfileVerifyEmail.vue
      │  ├──composables/
      │  │  ├──useLogin.ts
      │  │  ├──useProfileUpdatePassword.ts
      │  │  ├──useProfileUser.ts
      │  │  └──useRegister.ts
      │  ├──router/
      │  ├──services/
      │  ├──stores/
      │  ├──types/
      │  └──views/
      │     ├──Dashboard.vue
      │     ├──Home.vue
      │     ├──Login.vue
      │     ├──Profile.vue
      │     └──Register.vue
      └──User/
```

Afortunadamente nuestro código ya está ordenado por módulos. En este caso, todo lo que necesitamos revisar está ubicado en el módulo `Auth`.

>Sin embargo, si este módulo tuviera más vistas, más componentes y más componibles, la separación entre estos tres archivos que evidentemente conciernen a la misma funcionalidad podría resultar abrumadora.

## Preguntas

Tomando en cuenta que estos archivos no son reutilizables, nos preguntamos:

- ¿En esta estructura de carpetas, prevalece el tipo de archivo por encima de la particular regla de negocio a la que concierne?

- ¿Es suficiente agrupar los archivos por módulos y luego por el tipo de archivos?
> En este caso, para clasificarlos, nos obliga a colocarles un prefijo (o sufijo) para relacionarlos con el correspondiente componente padre, y así no confundir, por ejemplo, `FormLogin.vue` con `FormRegister.vue`.

- ¿Es necesario que estén tan separados entre ellos, `Login.vue`, `FormLogin` y `useLogin.ts`, respectivamente?

- ¿Qué sucederá cuando la aplicación empiece a escalar con más archivos y más módulos?

---

>**A continuación**, exploraremos alternativas para intentar mejorar una estructura de carpetas de archivos más cómoda, flexible y escalable.
