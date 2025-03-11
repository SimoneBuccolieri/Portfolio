<script>
export default {
  data(){
    return{
      partita:false,
      numColori:12,
      numCarte:6,
      arrCarte:[],//id,colore,cliccata,indovinata
      clickedCarta:null,
      vittoria:false,
      wait:false,
      tentativi:0,
    };
  },
  methods:{
    play(){
      this.partita=true;
      let coloriUsati = [];
      while (this.arrCarte.length < this.numCarte*2) {

        let colore = Math.floor(Math.random() * this.numColori) + 1; // Scegli un colore casuale tra 1 e maxColori
        if (!coloriUsati.includes(colore)) { // Se il colore non è già stato usato
          coloriUsati.push(colore);
          this.arrCarte.push(
              {
                colore:colore,
                indovinata: false,
                cliccata: false,
              },
              {
                colore:colore,
                indovinata: false,
                cliccata: false,
              }); // Aggiungi la coppia di carte per il colore
        }
      }
      this.arrCarte = this.shuffle(this.arrCarte);
      for(let i=0;i<this.arrCarte.length;i++){
        this.arrCarte[i].id=i;
      }

    },
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    clickCarta(carta){


      if (this.clickedCarta==null){
        this.arrCarte[carta.id].cliccata=true; //carta.cliccata=true;
        this.clickedCarta=carta;
      }
      else{ //secondo round
        this.tentativi++;
        if (this.clickedCarta.id != carta.id && this.clickedCarta.colore === carta.colore ){//se azzecco
          this.arrCarte[carta.id].cliccata=true; //carta.cliccata=true;
          this.arrCarte[this.clickedCarta.id].indovinata=true;//this.clickedCarta.indovinata=true;
          this.arrCarte[carta.id].indovinata=true;//carta.indovinata=true;

          this.clickedCarta=null; //reset carta cliccata
          this.checkvittoria();

        }
        else{//se non azzecco
          this.arrCarte[carta.id].cliccata=true;//carta.cliccata=true
          this.wait=true;
          setTimeout(() => {
            this.arrCarte[carta.id].cliccata=false; //carta.cliccata=false;
            this.arrCarte[this.clickedCarta.id].cliccata=false; //this.clickedCarta.cliccata=false;
            this.clickedCarta=null;
            this.wait=false;
          }, 1000);

        }
      }

    },
    checkvittoria(){
      if (this.arrCarte.every(obj => obj.indovinata)){ //checkvittoria
        this.vittoria=true;
      }
    },
    reset(){
      this.partita=false;
      this.vittoria=false;
      this.tentativi=0;
      this.arrCarte=[];
    },
    backgroundStyle(carta) {
      // Mapping dei colori (puoi personalizzarlo)
      const colorMap = {
        1: '#FF5733', // Rosso
        2: '#33FF57', // Verde
        3: '#33c9ff', // Blu
        4: '#F3FF33', // Giallo
        5: '#FF33A1', // Rosa
        6: '#A133FF', // Viola
        7: '#33FFF6', // Azzurro
        8: '#FF8C33', // Arancione
        9: '#326c00', // Verde Scuro
        10: '#FF3333', // Rosso scuro
        11: '#3333FF', // Blu scuro
        12: '#532c2c', // Marrone
      };

      if (carta.cliccata || carta.indovinata) {
        // Mostra il colore associato se la carta è cliccata o indovinata
        return {
          backgroundColor: colorMap[carta.colore] || 'grey', // Usa il colore dal mapping, default a 'grey'
        };
      } else {
        // Mostra un colore grigio se la carta non è né cliccata né indovinata
        return {
          backgroundColor: 'grey',
        };
      }
    },


  }
}
</script>
<script setup>
const blockTyping = (event) => {
  if (!['ArrowUp', 'ArrowDown', 'Tab', 'Backspace'].includes(event.key)) {
    event.preventDefault(); // Blocca l'input manuale, permettendo solo frecce su/giù
  }
};
</script>

<template>
  <div class="flex flex-col items-center container mx-auto py-8">
    <div v-if="!partita && !vittoria" class="text-center space-y-4">
      <h1 class="text-4xl font-bold uppercase">Memory Game</h1>
      <div class="flex items-center gap-2">
        <label class="text-lg font-semibold">Numero di Carte (max {{ numColori }}):</label>
        <input type="number" v-model="numCarte" min="1" :max="numColori" @keydown.prevent="blockTyping" class="w-20 p-2 rounded bg-gray-200">
      </div>
      <button class="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600" @click="play">
        Gioca
      </button>
    </div>

    <div v-if="vittoria" class="text-center space-y-4">
      <h1 class="text-3xl font-bold text-green-500">Hai vinto!</h1>
      <h3 class="text-lg">Numero di mosse: <span class="font-semibold">{{ tentativi }}</span></h3>
      <button class="bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600" @click="reset">
        Ricomincia
      </button>
    </div>

    <div v-if="partita" class="text-center mt-6">
      <h1 class="text-xl font-semibold">Mosse: <span class="text-blue-500">{{ tentativi }}</span></h1>
      <div class="grid grid-cols-4 md:grid-cols-6 gap-4 mt-6">
        <div v-for="carta in arrCarte" :key="carta.id"
             class="w-16 h-16 flex justify-center items-center rounded-lg shadow-md border"
             :style="backgroundStyle(carta)" @click="clickCarta(carta)" :class="{ waiting: wait }">
          <span v-if="carta.cliccata || carta.indovinata" class="text-white font-bold text-lg"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid div {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  font-size: 18px;
  font-weight: bold;
  color: white;
}
.waiting {
  pointer-events: none;
}
</style>