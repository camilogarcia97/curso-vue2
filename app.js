new Vue({
  el: "#app",

  data() {
    return {
      name: "Bitcoin",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png",
      changePercent: 0,
      prices: [8466, 7900, 3251, 5825, 7845, 5021, 4859],

      pricesWithDays: [
        { day: "lunes", value: 1234 },
        { day: "martes", value: 5678 },
        { day: "miércoles", value: 9012 },
        { day: "jueves", value: 3456 },
        { day: "viernes", value: 7890 },
        { day: "sábado", value: 2345 },
        { day: "domingo", value: 6789 },
      ],

      showPrices: false,
    };
  },

  methods: {
    toggleShowPrices(){
      this.showPrices = !this.showPrices;
    }
  }
});
