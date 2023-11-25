<template>
  <div>
    <div class="imageCircle">
      <img :src="imageUrl" alt="" />
    </div>
  </div>
</template>

<script setup>
import imageUrl from "../assets/Vector.png";
</script>

<style scoped>
div {
  background-color: rgba(179, 179, 179, 1);
  border-radius: 50%;
  width: 70px;
  height: 70px;
}

img {
  width: 10px;
  height: 10px;
}
</style>
