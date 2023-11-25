<template>
  <LayOut :Image="ImageUrl" :navItems="['Back', 'Step 2 of 4', 'Exit']">
    <div class="content">
      <h3>Add Photo</h3>
      <p>Add a photo so other members know who you are</p>
      <ImageCircle />
    </div>
    <div></div>
  </LayOut>
</template>

<script setup>
import LayOut from "@/LayOut/LayOut.vue";
import ImageUrl from "../assets/page2-image.png";
import ImageCircle from "../components/ImageCircle.vue";
</script>

<style scoped>
.content {
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

h3 {
  margin-bottom: 5px;
}

p {
  margin-bottom: 30px;
}
</style>
