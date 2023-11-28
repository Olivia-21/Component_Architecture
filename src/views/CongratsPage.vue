<template>
  <LayOut :Image="photoUrl">
    <h2>Wohoo!</h2>
  </LayOut>
</template>

<script setup>
import LayOut from "@/LayOut/LayOut.vue";
import photoUrl from "../assets/congratsImage.png";
</script>

<style scoped>
h2 {
  font-weight: 600px;
  font-size: 39.81px;
  text-align: center;
}
</style>
