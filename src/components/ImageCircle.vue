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
  width: 100px;
  height: 100px;
}

img {
  width: 40px;
  height: 40px;
  margin: 20px 30px;
  text-align: center;
}
</style>
