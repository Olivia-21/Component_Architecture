<template>
  <div>
    <div class="navtexts">
      <p v-for="(text, index) in items" :key="index">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  items: {
    type: Array,
  },
});
</script>

<style scoped>
span {
  /* margin-left: 30px;
  margin-right: 40px; */
}

.navtexts {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
}
</style>
