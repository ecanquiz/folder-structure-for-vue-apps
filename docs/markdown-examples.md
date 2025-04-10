# Markdown Extension Examples


```sh{2,3}
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
