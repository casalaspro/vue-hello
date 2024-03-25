# Studio di Vue.js

[![Vue.js Introduction](./img/vue.png)](https://vuejs.org/guide/introduction.html)

# Introduzione

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

- Miglioramento dell'HTML statico (senza una fase di creazione **???** :question: )
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

## _Tipi di Api_

I componenti di Vue ossono essere di due tipi:

- Options API
- Composition API

**OPTIONS API**

La logica del componente è definita in un oggetto di opzioni come ```data```, ```methods``` e  ```mounted```. Le proprietà dell'oggetto sono esposte nella funzione mediante il "puntatore" ```.this```.

```js
<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

**COMPOSITION API**

Con le composition API definiamo la logica del componente importando le funzioni API.
```md
 <script setup>
 ```
 L'uso di ```<script setup>``` ci permette di usare le composition API, accedendo a variabili e funzioni di alto livello, con meno testo boilerplate (testo standard).

Per esempio:
 ```js
 <script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

**QUALE SCEGLIERE?**

Entrmbi i sistemi sono adatti a molteplici usi e le Options sono implementate sulle Api delle Composition.

_Le Options API_ hanno un aspetto più intuitivo per chi è avvezzo alla programazione ad oggetti (OOP).

_Le Composition API_ danno maggiore "libertà" ma a patto di comprendere bene il funzionamento della reactivity di Vue. Si prestano a progetti complessi e App a pagina singola.

#  La sintassi Template
[Vue.js](https://vuejs.org/guide/essentials/template-syntax.html) - Template Sintax

Vue sfrutta la sintassi dichiarativa dall'HTML e, sotto la scocca, trasforma le dichiarazioni in codice javaScript performante. Inoltre, possiamo accedere direttamente alle informazioni dei componenti, dentro le dichiarazioni.

## _Text Interpolation_

```md
<span>Message: {{ msg }}</span>
```

Si dichiara la variabile interessata all'interno delle doppie graffe (baffi).

Il contenuto della variabile, se modificato, verrà aggiornato automaticamente.

## _Raw HTML_





