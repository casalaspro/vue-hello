/*

Descrizione:
Creare la nostra prima app utilizzando Vue.js
Usiamo vue dalla cdn, usate le slide per aitutarvi o la documentazione: https://vuejs.org/guide/quick-start.html#using-vue-from-cdn
MILESTONE 1:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
MILESTONE 2:
Leggete queste due pagine della documentazione, dall’inizio alla fine:
Introduction: https://vuejs.org/guide/introduction.html
Template Syntax: https://vuejs.org/guide/essentials/template-syntax.html
Poi aggiungete un file README.md alla repo e in questo file scrivete, per ognuna di queste due pagine un breve testo (7/8 righe ciascuno, circa 100 parole per ogni testo)
In questi testi potete scrivere quello che volete, per esempio:
fare un riassunto di quello che avete capito
segnare le cose che avete letto e che non avete capito
scrivere un elenco di domande che vi sono venute in mente da chiedermi domani a lezione
oppure un elenco di link che avete trovato per approfondire alcune delle cose che avete letto in queste pagine…
appunti sulle funzionalità che avete letto
…
Insomma scrivete qualsiasi cosa possa esservi di aiuto per accompagnarvi nello studio di queste due paginette.
Buon lavoro
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.

*/

const { createApp } = Vue;

createApp({
  data: function(){
    return{
      milestoneText : "Godmorning Vue.js!"
    }
  },

  methods: {

  },
}).mount('#app');