<script>
import PxHeader from "@/components/PxHeader.vue";

export default {
  name: "App",
  components: {
    PxHeader,
  },
};

</script>

<template>
  <main>
    <px-header></px-header>

    <router-view container px-5 sm:px-20 py-20 flex justify-center />
  </main>
</template>



<style scoped></style>
