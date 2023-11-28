<template>
  <div>
    <div class="navtexts">
      <p
        v-for="(text, index) in items"
        :key="index"
        @click="navigatePage(text)"
      >
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

defineProps({
  items: {
    type: Array,
  },
});

const navigate = useRouter();
const navigatePage = (texts) => {
  if (texts.toLowerCase().includes("back")) {
    navigate.back();
  } else if (texts.toLowerCase().includes("exit")) {
    navigate.push("/");
  }
};
</script>

<style scoped>
.navtexts {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
}
</style>
