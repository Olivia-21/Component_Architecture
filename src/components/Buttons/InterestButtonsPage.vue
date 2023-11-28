<template>
  <div>
    <div class="butt">
      <button
        v-for="texts in buttTexts"
        :key="texts"
        @click="toggleButtonColor"
        :class="bgColor ? 'defaultColor' : 'blueColor'"
      >
        <!-- <img :src="plusIcon" alt="" /> -->
        <div><img :src="plusIcon" alt="" /></div>
        {{ texts }}
      </button>
    </div>
  </div>
</template>

<script setup>
import plusIcon from "../../assets/plusIcon.png";
import { defineProps } from "vue";
import { ref } from "vue";

defineProps({
  buttTexts: {
    type: Array,
  },
});

let bgColor = ref(true);

const toggleButtonColor = () => {
  bgColor.value;
};
</script>

<style scoped>
button {
  width: 232px;
  height: 36px;
  border-radius: 30px;
  background-color: transparent;
  border: 1px solid gray;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.defaultColor:focus {
  color: white;
  background-color: rgba(2, 103, 255, 1);
  border: none;
}

.blueColor {
  background-color: transparent;
  border: 1px solid gray;
}

.butt {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

img {
  margin-right: 15px;
}
</style>
