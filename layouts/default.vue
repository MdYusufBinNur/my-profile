<template>
  <div class="overflow-x-hidden">
    <Header />
    <nuxt-page />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "default",
  components: {Footer, Header}
}
</script>

<style scoped>

</style>
