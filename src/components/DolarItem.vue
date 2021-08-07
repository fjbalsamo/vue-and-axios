<template>
  <div class="list-group-item">
    <h4>{{ nombre }}</h4>
    <hr />
    <h5>Venta ${{ venta }}</h5>
    <h5>Compra ${{ compra }}</h5>
  </div>
</template>

<script>
export default {
  name: "DolarItem",
  props: {
    venta: {
      type: String,
      required: true,
    },
    compra: {
      type: String,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
  },
};
</script>
