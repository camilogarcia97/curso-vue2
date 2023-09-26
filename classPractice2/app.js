Vue.component('modal', {
  props: ['title'],

  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },

  template: `
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h3>{{ title }}</h3>
          <div> 
            <slot name="body"></slot> 
          </div>
          <footer>
            <button v-on:click="closeModal">Cerrar</button>
          </footer>
        </div>
      </div>
    </div>`
})

/*-----------------------------------------------*/

new Vue({
  el: '#app',

  data(){
    return {
      title: "Titulo Del Modal",
      showModal: false,
    }
  },

  methods: {
    toggleModal(){
      this.showModal = !this.showModal;
      console.log(this.showModal);
    },
  },



})