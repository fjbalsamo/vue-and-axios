<template>
  <div>
    <h4>{{ nombre }}</h4>
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
