<template>
  <div class="home">
    <h1 class="title">Cotizacion del dolar en Argentina</h1>
    <button @click="loadDollarPrice()">recargar precios</button>
    <div class="alert" v-show="loading">
      <h2>cargando</h2>
    </div>
    <div class="div-repetido" v-for="(d, i) in listaDolar" :key="`${i}`">
      <dolar-item
        :nombre="d.casa.nombre"
        :compra="d.casa.compra"
        :venta="d.casa.venta"
      />
    </div>
  </div>
</template>

<script>
import { precioDolar } from "../axios";
import DolarItem from "../components/DolarItem.vue";

export default {
  name: "Home",
  components: {
    DolarItem,
  },
  data() {
    return {
      loading: true,
      listaDolar: [],
    };
  },
  methods: {
    async loadDollarPrice() {
      try {
        this.listaDolar = [];
        this.loading = true;
        this.listaDolar = await precioDolar();
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
  async created() {
    this.loadDollarPrice();
  },
};
</script>

<style scoped>
h1.title {
  text-transform: uppercase;
  text-align: center;
  color: green;
}
div.div-repetido {
  background-color: aquamarine;
  padding: 5px;
  border-radius: 15px;
  margin-bottom: 15px;
}
</style>
