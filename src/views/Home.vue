<template>
  <div class="home">
    <h1 class="title">Cotizacion del dolar en Argentina</h1>
    <div class="my-3"></div>
    <div class="container">
      <div class="row mb-3">
        <div class="col">
          <button class="btn btn-primary" @click="loadDollarPrice()">
            recargar precios
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="alert alert-info" v-show="loading">
            <h2>cargando</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="list-group">
            <dolar-item
              v-for="(d, i) in listaDolar"
              :key="`${i}`"
              :nombre="d.casa.nombre"
              :compra="d.casa.compra"
              :venta="d.casa.venta"
            />
          </div>
        </div>
      </div>
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
