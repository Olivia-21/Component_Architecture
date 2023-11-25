<template>
  <div>
    <LayOut :Image="ImageUrl" :navItems="navBarItems">
      <div><FormView /></div>
    </LayOut>
  </div>
</template>

<script setup>
import LayOut from "../LayOut/LayOut.vue";
import ImageUrl from "../assets/register1.png";
import FormView from "../components/FormView/FormView.vue";
import { ref } from "vue";

const navBarItems = ref(["Step 1 of 4", "Exit"]);
</script>

<style scoped></style>
