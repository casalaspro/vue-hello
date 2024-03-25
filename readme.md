# Studio di Vue.js

[![Vue.js Introduction](./img/vue.png)](https://vuejs.org/guide/introduction.html)

[Vue.js](https://vuejs.org/guide/introduction.html) - Introduction

## _Cos'è Vue_

  - Vue è un framework usato per realizzare interfacce.
  - Sfrutta JavaScript per offrire un modello di programmazione dichiarativo e basato sui componenti.

  L'esempio mostra un semplice contatore. Premendo il bottone si incrementa la variabile.

```js
import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')
```
_#1/2_

```js
<div id="app">
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>
```
_#2/2_

L'esempio indica due caratteristiche importanti:

- La reattività (_#1/2_) - il contatore si aggiorna _in diretta_.
- Il rendering dichirativo (_#2/2_) - la sintassi è l'HTML con l'aggiunta di elementi che vue.js riconosce.

## _Il Framework Progressivo_

Alecune potenzialità di Vue

- Miglioramento dell'HTML statico (senza una fase di creazione **???**)
- Incorporamento come componenti Web in qualsiasi pagina
- Applicazione a pagina singola (SPA)
- Full Stack/Rendering lato server (SSR)
- Jamstack/Generazione di siti statici (SSG) **???**
- Targeting per desktop, dispositivi mobili, WebGL e persino terminale **???**

## _Componenti file-singolo_

```js
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```

I componenti a file singolo (**SFC**), sono file che contengono incapsulato tutto ciò che interessa il componente che vogliamo includere, ovvero, JavaScript/Vue all'interno del tag **script**, HTML nel **template** e CSS nel tag **style**.  Saranno file con estensione ***.vue**.


