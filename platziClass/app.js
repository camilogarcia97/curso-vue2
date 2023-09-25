Vue.component("coinDetail", {
  props: ["changePercent", "title", "img1", "name", "price", "toggleShowPrices"],

  data() {
    return {
      showPrices: false,
      value: 0,
      imgSrc: this.img1,
    };
  },

  computed: {
    convertdValue() {
      if (this.value === 0) {
        return 0;
      } else {
        return this.value / this.price;
      }
    },
  },

  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
    },

    // Emitir un evento cuando el mouse se coloca sobre la imagen
    emitImageMouseover() {
      this.imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdv_YPE5XKr4_2KlmIgIC9y47OnUY2FGljrg&usqp=CAU";
      this.$emit("changeImg", this.name);
    },

    // Emitir un evento cuando el mouse sale de la imagen
    emitImageMouseout() {
      this.imgSrc = this.img1; // Restauramos la variable de datos al valor original
      this.$emit("setMainImg", this.name);
    },
  },

  template: `
  <div>
    <img
    v-bind:src="imgSrc"
    v-on:mouseover="emitImageMouseover" 
    v-on:mouseout="emitImageMouseout" 
      class="img-btc"  
      v-bind:alt="name">
    <p># <strong>v-if, v-else, v-else-if</strong></p>
      <h1 v-bind:class="changePercent > 0 ? 'green' : (changePercent < 0 ? 'red' : 'black')">
        {{ title }}
        <span v-if="changePercent > 0">👍</span>
        <span v-else-if="changePercent < 0">👎</span>
        <span v-else>🤞</span>
      </h1>
      <br />
          <p>
            # <strong>v-show</strong>
            <br />
            siempre hay que usar la variable para hacer la comparacion a
            diferencia de v-if, v-else-if y v-else.
          </p>
          <h1 v-bind:class="changePercent > 0 ? 'green' : (changePercent < 0 ? 'red' : 'black')">
            {{ name }}  - {{ symbol }}
            <span v-show="changePercent > 0">👍</span>
            <span v-show="changePercent < 0">👎</span>
            <span v-show="changePercent === 0">🤞</span>
          </h1>
          <br />
          <p># <strong>operador ternario</strong></p>
          <h1 v-bind:class="changePercent > 0 ? 'green' : (changePercent < 0 ? 'red' : 'black')">
            {{ name }}  - {{ symbol }}
            <!--Esta es otra forma de imprimir los datos de pendiendo de su valor en DATA-->
            <span
              >{{changePercent > 0 ? '👍':changePercent < 0 ? '👎':'🤞'}}</span
            >
          </h1>
          <div>
        <h3>Ingresa la cantidad en dolares</h3>
        <input v-model="value" type="number" class="no-spinners">
        <br>
        <p>Cantidad en bitcoin que puedes comprar:</p>
        <span>{{ convertdValue }}</span>
      </div>
  </div>
   
  `,
});

new Vue({
  el: "#app",

  data() {
    return {
      name: "Bitcoin",
      symbol: "BTC",
      img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png",
      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdv_YPE5XKr4_2KlmIgIC9y47OnUY2FGljrg&usqp=CAU",
      changePercent: 10,
      price: 5000,
      prices: [8466, 7900, 3251, 5825, 7845, 5021, 4859],
      color: "F1F1F1",
      txtColor: "#000000",

      value: 0,

      pricesWithDays: [
        { day: "lunes", value: 1000 },
        { day: "martes", value: 2000 },
        { day: "miércoles", value: 3000 },
        { day: "jueves", value: 4000 },
        { day: "viernes", value: 5000 },
        { day: "sábado", value: 6000 },
        { day: "domingo", value: 7000 },
      ],

      showPrices: false,
    };
  },

  computed: {
    title() {
      return `${this.name} - ${this.symbol}`;
    },
  },

  watch: {
    //las funciones de los watchers siempre
    //deben llevar por nombre el nombre de propiedad
    showPrices(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },

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
