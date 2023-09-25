new Vue({
  el: "#app",

  data() {
    return {
      title: '',
      hours: '',
      courses: [],
    };
  },

  computed: {
    totalTime: function() {
      return this.courses.reduce((total, course) => total + course.hours, 0);
    },
  },

  methods: {
    addCourse: function () {
      if (this.title && this.hours) {
        this.courses.push({
          title: this.title,
          hours: parseInt(this.hours),
        });
        //console.log(this.courses);
        this.title = "";
        this.hours = "";
      }
    },
  },
});
