Vue.component("coinDetail", {
  props: ["coinData"],

  data() {
    return {
      showPrices: false,
      value: 0,
      imgSrc: this.coinData.img1,
    };
  },

  computed: {
    title() {
      return `${this.coinData.name} - ${this.coinData.symbol}`;
    },
    convertdValue() {
      if (this.value === 0) {
        return 0;
      } else {
        return this.value / this.coinData.price;
      }
    },
  },

  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
    },

    // Emitir un evento cuando el mouse se coloca sobre la imagen
    emitImageMouseover() {
      this.imgSrc =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdv_YPE5XKr4_2KlmIgIC9y47OnUY2FGljrg&usqp=CAU";
      this.$emit("changeImg", this.coinData.name);
    },

    // Emitir un evento cuando el mouse sale de la imagen
    emitImageMouseout() {
      this.imgSrc = this.coinData.img1; // Restauramos la variable de datos al valor original
      this.$emit("setMainImg", this.coinData.name);
    },
  },

  template: `
  <div>
    <img
    v-bind:src="imgSrc"
    v-on:mouseover="emitImageMouseover" 
    v-on:mouseout="emitImageMouseout" 
      class="img-btc"  
      v-bind:alt="coinData.name">
    <p># <strong>v-if, v-else, v-else-if</strong></p>
      <h1 v-bind:class="coinData.changePercent > 0 ? 'green' : (coinData.changePercent < 0 ? 'red' : 'black')">
        {{ title }}
        <span v-if="coinData.changePercent > 0">👍</span>
        <span v-else-if="coinData.changePercent < 0">👎</span>
        <span v-else>🤞</span>
      </h1>
      <br />
          <p>
            # <strong>v-show</strong>
            <br />
            siempre hay que usar la variable para hacer la comparacion a
            diferencia de v-if, v-else-if y v-else.
          </p>
          <h1 v-bind:class="coinData.changePercent > 0 ? 'green' : (coinData.changePercent < 0 ? 'red' : 'black')">
          {{ title }}
            <span v-show="coinData.changePercent > 0">👍</span>
            <span v-show="coinData.changePercent < 0">👎</span>
            <span v-show="coinData.changePercent === 0">🤞</span>
          </h1>
          <br />
          <p># <strong>operador ternario</strong></p>
          <h1 v-bind:class="coinData.changePercent > 0 ? 'green' : (coinData.changePercent < 0 ? 'red' : 'black')">
          {{ title }}
            <!--Esta es otra forma de imprimir los datos de pendiendo de su valor en DATA-->
            <span
              >{{coinData.changePercent > 0 ? '👍':coinData.changePercent < 0 ? '👎':'🤞'}}</span
            >
          </h1>
          <div>
        <h3>Ingresa la cantidad en dolares</h3>
        <input v-model="value" type="number" class="no-spinners">
        <br>
        <p>Cantidad en bitcoin que puedes comprar:</p>
        <span>{{ convertdValue }}</span>
      </div>
      <button v-on:click="toggleShowPrices">
        {{ showPrices ? 'Ocultar precios' : 'Mostrar precios'}}
      </button>
      <ul v-show="showPrices">
              <li
                v-bind:class="{orange: p.value === coinData.price, green: p.value > coinData.price, red: p.value < coinData.price}"
                v-for="(p, i) in coinData.pricesWithDays"
                v-bind:key="p.day">
                {{ i }} - {{ p.day }} - {{ p.value }}
              </li>
            </ul>
  </div>
  
  `,
});

new Vue({
  el: "#app",

  data() {
    return {
      coinData: {
        name: "Bitcoin",
        symbol: "BTC",
        img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png",
        img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdv_YPE5XKr4_2KlmIgIC9y47OnUY2FGljrg&usqp=CAU",
        changePercent: 10,
        price: 5000,
        pricesWithDays: [
          { day: "lunes", value: 1000 },
          { day: "martes", value: 2000 },
          { day: "miércoles", value: 3000 },
          { day: "jueves", value: 4000 },
          { day: "viernes", value: 5000 },
          { day: "sábado", value: 6000 },
          { day: "domingo", value: 7000 },
        ],
      },
      color: "F1F1F1",
      txtColor: "#000000",
    };
  },

  /*watch: {
    //las funciones de los watchers siempre
    //deben llevar por nombre el nombre de propiedad
    showPrices(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },*/

  methods: {
    darkMode() {
      this.color = this.color.split("").reverse().join("");
      if (this.txtColor === "#000000") {
        this.txtColor = "#FFFFFF";
      } else {
        this.txtColor = "#000000";
      }
    },

    changeImg() {
      if (
        this.img1 ===
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png"
      ) {
        this.img2 =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdv_YPE5XKr4_2KlmIgIC9y47OnUY2FGljrg&usqp=CAU";
      } else {
        this.img1 =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png";
      }
    },

    setMainImg() {
      if (
        this.img1 ===
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png"
      ) {
        this.img2 =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdv_YPE5XKr4_2KlmIgIC9y47OnUY2FGljrg&usqp=CAU";
      } else {
        this.img1 =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png";
      }
    },

    created() {
      // Escuchar el evento 'image-mouseover' y 'image-mouseout'
      this.$on("changeImg", this.handleImageMouseover);
      this.$on("setMainImg", this.handleImageMouseout);
    },
  },
});
