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

```md
<p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

La ```v-html``` viene definita _direttiva_ ed è un attributo speciale, interpretato da Vue, per l'inserimento di stringhe di HTML senza che, appunto, vengano interpretate come una stringa. Le direttive hanno tutte il prefisso ```v-```.

## _Attribute Bindings (associazioni di attributi)_

I baffi non possono essere usati all'interno degli attributi. In alternativa si userà una direttiva ```v-bind```.

```md
<div v-bind:id="dynamicId"></div>
```

Nell'esempio si interviene sull'id dell'elemento modificando dinamicamente la variabile ```dynamicId```.

**ABBREVIAZIONE**

```md
<div :id="dynamicId"></div>
```

***quando la variabile ha lo stesso nome dell'attributo***

```md
<!-- same as :id="id" -->
<div :id></div>

<!-- this also works -->
<div v-bind:id></div>
```

**ATTRIBUTI BOOLEANI**

```md
<button :disabled="isButtonDisabled">Button</button>
```

In questo caso il ```v-bind``` va ad inserire il contenuto della variabile solo se è ```TRUE``` o se la stringa è vuota ```:disabled=""```.

**DYNAMICALLY BINDING MULTIPLE ATTRIBUTE (associazione dinamica di più attributi)**

```js
data() {
  return {
    objectOfAttrs: {
      id: 'container',
      class: 'wrapper'
    }
  }
}
```
>_Con un oggetto JavaScript così, ```v-bind``` può accompagnare solo_
  
>_-Motociclista Palestrato_

```md
<div v-bind="objectOfAttrs"></div>
```

**USARE ESPRESSIONI JAVASCRIPT**

```js
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div :id="`list-${id}`"></div>
```
Possono essere usate
- all'interno dei baffi
- all'interno dei ```v-bind```

**UNA SOLA ESPRESSIONE**

```md
<!-- questa è una dichiarazione, non un'espressione: -->
{{ var a = 1 }}

<!-- il controllo di flusso non funzionerà, usare un'espressione ternaria -->
{{ if (ok) { return message } }}
```
**RICHIAMO DELLE FUNZIONI**

```md
<time :title="toTitleDate(date)" :datetime="date">
  {{ formatDate(date) }}
</time>
```

Ricordarsi che la funzione viene invocata ogni volta che qualcosa cambia, perciò non dovrebbero avere effetti collaterali.

**ACCESSO GLOBALE LIMITATO**

Le espressioni del modello sono sandbox ***??*** e hanno solo un elenco limitato di globali, come ```Math``` e ```Date```. Le altre vanno inserite qui ```app.config.globalProperties```.

**DIRETTIVE**

Le direttive accettano solo un'espressione ad eccezione di ```v-on```, ```v-for```, ```v-slot```.

```md
<p v-if="seen">Now you see me</p>
```
Qui la direttiva inserisce/rimuove il p a seconda della veridicità della viariabile ```seen```.

**ARGOMENTI**

Alcune direttive accettano un argomento a seguito dei due punti: ```:href``` ad esempio. 

```md
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>
```
In questo caso il contenuto della variabile ```url``` viene inserita nell'attributo ```href``` dall'attributo speciale di Vue ```v-bind```.

```md
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>
```
Qui invece ```v-on``` è l'attributo speciale che inserisce un eventListener all'elemento ed il suo argomento è il tipo di evento ```click```. Si può notare l'abbreviazione con la ```@```.

**ARGOMENTI DINAMICI**

```MD
<!--
Note that there are some constraints to the argument expression,
as explained in the "Dynamic Argument Value Constraints" and "Dynamic Argument Syntax Constraints" sections below.
-->
<a v-bind:[attributeName]="url"> ... </a>

<!-- shorthand -->
<a :[attributeName]="url"> ... </a>
```

Così possiamo far ricevere il contenuto della variabile ```attributeName```.























