new Vue({
  el: "#app",

  data() {
    return {
      title: "",
      hours: "",
      courses: [],
    };
  },

  computed: {
    listOfCourse() {
      return `${this.courses}`;
    },
  },

  methods: {
    addCourse: function () {
      if (this.title && this.hours) {
        this.courses.push({
          title: this.title,
          hours: parseInt(this.hours),
        });
        console.log(this.courses);
        this.title = "";
        this.hours = "";
      }
      console.log(this.courses);
    },
  },
});
