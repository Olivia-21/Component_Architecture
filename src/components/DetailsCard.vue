<template>
  <div class="container">
    <div class="circle"></div>
    <router-link :to="`/details${clientdetails.name}`">
      <div class="content">
        <h3>{{ clientdetails.name }}</h3>
        <span><strong>Email:</strong>{{ clientdetails.email }}</span>
        <span><strong>Contact:</strong>{{ clientdetails.phone }}</span>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  clientdetails: {
    type: Object,
  },
});
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
