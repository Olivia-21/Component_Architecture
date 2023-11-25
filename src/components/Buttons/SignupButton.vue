<template>
  <div>
    <button @click="navigatePage">{{ buttonText }}</button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
defineProps({
  buttonText: {
    type: String,
  },
});

const navigate = useRouter();

const navigatePage = () => {
  navigate.push("/addphoto");
};
</script>

<style scoped>
button {
  width: 100%;
  border: 1px solid rgba(153, 153, 153, 1);
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: white;
  background: linear-gradient(0deg, #0267ff, #0267ff);
}
</style>
