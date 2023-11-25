<template>
  <div>
    <form action="">
      <h1>{{ textOnForm }}</h1>
      <InputField
        :label="input.label"
        v-for="(input, index) in inputItems"
        :key="index"
        :placeholder="input.Placeholder"
        :type="input.type"
        :id="input.label"
      />
      <div class="button">
        <SignupButton buttonText="Create Account" />
        <TransparentButton />
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputField from "../FormView/InputField.vue";
import SignupButton from "../Buttons/SignupButton.vue";
import TransparentButton from "../Buttons/TransparentButton.vue";

const inputItems = ref([
  { Placeholder: "John Doe", type: "text", label: "Name" },
  { Placeholder: "johndoe@gmail.com", type: "email", label: "E-mail" },
  { Placeholder: "*****", type: "password", label: "Passowrd" },
]);

const textOnForm = ref("Create Account");
</script>

<style scoped>
form {
  width: 50%;
  margin: 20px auto;
}
.button {
  margin-top: 15px;
}
</style>
