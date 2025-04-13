# El Problema

Suponiendo que vamos a revisar la página de **Iniciar Sesión** para depurar nuestro código. Entramos en la carpeta `src/modules/Auth/views/` y seleccionamos el archivo `Login.vue`.

```sh{14}
└── src/
    ├── core/
    └── modules/
        ├── Auth/
        │   ├── components/
        │   ├── composables/
        │   ├── router/
        │   ├── services/
        │   ├── stores/
        │   ├── types/
        │   └── views/
        │       ├── Dashboard.vue
        │       ├── Home.vue
        │       ├── Login.vue
        │       ├── Profile.vue
        │       └── Register.vue
        └── User/
```
Al editarlo nos encontraremos con un [SFC](https://vuejs.org/guide/scaling-up/sfc) parecido a lo siguiente.

```vue
<script setup lang="ts">  
  import FormLogin from "../components/FormLogin.vue";
  import { useLogin } from '../composables/useLogin'  
  
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

Tenga en cuenta que `Login.vue` importa dos (2) archivos: el componente `LoginForm.vue` y el composable `useLogin.ts`, respectivamente.


```sh{7,25}
└── src/
    ├── core/
    └── modules/
        ├── Auth/
        │   ├── components/
        │   │   ├── About.vue
        │   │   ├── FormLogin.vue
        │   │   ├── FormRegister.vue
        │   │   ├── FormUpdatePassword.vue
        │   │   ├── FormUser.vue
        │   │   ├── FormVerifyEmail.vue
        │   │   ├── Logout.vue
        │   │   ├── ProfileFileUpload.vue
        │   │   ├── ProfileUpdatePassword.vue
        │   │   ├── ProfileUser.vue
        │   │   └── ProfileVerifyEmail.vue
        │   ├── composables/
        │   ├── router/
        │   ├── services/
        │   ├── stores/
        │   ├── types/
        │   └── views/
        │       ├── Dashboard.vue
        │       ├── Home.vue
        │       ├── Login.vue
        │       ├── Profile.vue
        │       └── Register.vue
        └── User/
```

Solo nos falta localizar y editar un archivo.


```sh{7,18,29}
└── src/
    ├── core/
    └── modules/
        ├── Auth/
        │   ├── components/
        │   │   ├── About.vue
        │   │   ├── FormLogin.vue
        │   │   ├── FormRegister.vue
        │   │   ├── FormUpdatePassword.vue
        │   │   ├── FormUser.vue
        │   │   ├── FormVerifyEmail.vue
        │   │   ├── Logout.vue
        │   │   ├── ProfileFileUpload.vue
        │   │   ├── ProfileUpdatePassword.vue
        │   │   ├── ProfileUser.vue
        │   │   └── ProfileVerifyEmail.vue
        │   ├── composables/
        │   │   ├── useLogin.ts
        │   │   ├── useProfileUpdatePassword.ts
        │   │   ├── useProfileUser.ts
        │   │   └── useRegister.ts
        │   ├── router/
        │   ├── services/
        │   ├── stores/
        │   ├── types/
        │   └── views/
        │       ├── Dashboard.vue
        │       ├── Home.vue
        │       ├── Login.vue
        │       ├── Profile.vue
        │       └── Register.vue
        └── User/
```

Afortunadamente nuestro código ya está ordenado por módulos. En este caso, todo lo que necesitamos revisar está ubicado en el módulo `Auth`.

>Pero, si este modulo tuviera más vistas, mas componentes, más composables y desplegáramos las otras correspondientes carpetas que lo conforman. No le parece demasiado abrumador la distante separación entre estos tres archivos que evidentemente conciernen a la misma funcionalidad. En este caso, iniciar sesión.

Tomando en cuenta que estos archivos no son reutilizables, nos preguntamos:

- En esta estructura de carpetas, prevalece el tipo de archivo por encima de la particular regla de negocio a la que concierne?

- Es suficiente agrupar los archivos por módulos y luego por el tipo de archivos? 
  > En este caso, para clasificarlos, nos obliga a colocarle un prefijo (o sufijo) para relacionarlo con el correspondiente componente padre.

- Es necesario que estén tan separados entre ellos, `Login.vue`, `FormLogin` y `useLogin.ts`, respectivamente? Qué sucederá cuando la aplicación empiece a escalar con más archivos y más módulos?

## A continuación

Exploraremos alternativas que pueden ser adoptadas para intentar lograr una estructura de carpetas más cómoda, flexible y escalable.


