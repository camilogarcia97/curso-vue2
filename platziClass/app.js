new Vue({
  el: "#app",

  data() {
    return {
      name: "Bitcoin",
      symbol: "BTC",
      img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png",
      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdv_YPE5XKr4_2KlmIgIC9y47OnUY2FGljrg&usqp=CAU",
      changePercent: -1,
      price: 5000,
      prices: [8466, 7900, 3251, 5825, 7845, 5021, 4859],
      color: 'F1F1F1',
      txtColor: '#000000',

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
    title(){
      return `${this.name} - ${this.symbol}`;
    },

    convertdValue(){
      if(this.value === 0){
        return 0;
      }else{
        return this.value / this.price;
      }
    },
  },

  watch: {
    //las funciones de los watchers siempre
    //deben llevar por nombre el nombre de propiedad 
    showPrices(newValue, oldValue){
      console.log(newValue, oldValue);
    },
  },

  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
    },

    darkMode() {
      this.color = this.color.split('').reverse().join('');
      if (this.txtColor === '#000000') {
        this.txtColor = '#FFFFFF';
      } else {
        this.txtColor = '#000000';
      }
    },

    ChangeImg() {
      if (this.img1 === "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png") {
        this.img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdv_YPE5XKr4_2KlmIgIC9y47OnUY2FGljrg&usqp=CAU";
      } else {
        this.img1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png";
      }
    },

    setMainImg() {
      if (this.img1 === "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png") {
        this.img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdv_YPE5XKr4_2KlmIgIC9y47OnUY2FGljrg&usqp=CAU";
      } else {
        this.img1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png";
      }
    },
  },
});