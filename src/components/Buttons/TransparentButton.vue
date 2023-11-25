<template>
  <div>
    <button>
      <img :src="Image" alt="" /><span class="text">Sign up with Google</span>
    </button>
  </div>
</template>

<script setup>
import Image from "../../assets/Google logo.png";
</script>

<style scoped>
div {
  display: flex;
}
button {
  padding: 7px;
  border: none;
  border: 1px solid rgba(153, 153, 153, 1);
  border-radius: 5px;
  background-color: transparent;
  text-align: center;
  width: 100%;
}

button img {
  width: 16px;
  margin-right: 65px;
}

.text {
  margin-right: 50px;
}
</style>
