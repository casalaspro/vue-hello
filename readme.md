# Studio di Vue.js

[![Vue.js Introduction](./img/vue.png)](https://vuejs.org/guide/introduction.html)

[Vue.js](https://vuejs.org/guide/introduction.html) - Introduction

## _Cos'è Vue_

  - Vue è un framework usato per realizzare interfacce.
  - Sfrutta JavaScript per offrire un modello di programmazione dichiarativo e basato sui componenti.

  L'esempio mostra un semplice contatore. Premendo il bottone si incrementa la variabile.

```sh
import { createApp, ref } from 'vue'

createApp({
  setup() {
    return {
      count: ref(0)
    }
  }
}).mount('#app')
```
_#1/2_

```sh
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

