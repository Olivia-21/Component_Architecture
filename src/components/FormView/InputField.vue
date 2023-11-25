<template>
  <div>
    <div class="form-content">
      <label :for="label">{{ label }}</label>
      <input v-bind="$attrs" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  label: {
    type: String,
  },
});
</script>

<style scoped>
input {
  padding: 10px;
  border: 1px solid rgba(153, 153, 153, 1);
  border-radius: 3px;
  margin-top: 2px;
}

.form-content {
  display: flex;
  flex-direction: column;
}

.form-content label {
  margin-left: 1px;
  margin-top: 15px;
}
</style>
