<template>
  <div class="clientdetails">
    <div v-for="clients in clientDetails" :key="clients">
      <h3>{{ clients.name }}</h3>
    </div>
  </div>
</template>

<script setup>
import { clientDetails, getDetails } from "@/Composable/ApiCall";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.params.name);
onMounted(() => {
  getDetails(`https://jsonplaceholder.typicode.com/`);
  console.log(route.params.name);
});
</script>

<style scoped></style>
