<template>
  <div>
    <div class="main">
      <div
        class="left-panel"
        :style="{
          backgroundImage: `url(${Image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      ></div>
      <div class="right-panel">
        <NavBar :items="navItems" />
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "../components/NavBar/NavBar.vue";
import { defineProps } from "vue";

defineProps({
  Image: {
    type: String,
  },
  navItems: {
    type: String,
  },
});
</script>

<style scoped>
.main {
  display: flex;
  width: 100%;
  height: 100vh;
}

.left-panel {
  width: 50%;
  height: 100vh;
  background-color: rgba(2, 103, 255, 1);
}

img {
  width: 90%;
}

.right-panel {
  width: 50%;
  background-color: white;
  margin: 50px auto;
}
</style>
