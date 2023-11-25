<template>
    <LayOut :Image="Imageurl" :navItems="['Back', 'Step 3 of 4', 'Exit']">
     <div class="content">
        <h2>Hey there! What brings you here?</h2>
        <p>This will help us make great recommendations</p>
     </div>
     <div class="signups">
   <SignupButton v-for="texts in buttonContent" :key="texts"  :buttonText="texts" :style="{borderRadius:'30px'}"/>
</div>
    </LayOut>
</template>

<script setup>
import LayOut from "@/LayOut/LayOut.vue";
import Imageurl from '../assets/InterestPageImage.png'
import SignupButton from "@/components/Buttons/SignupButton.vue";
import { ref } from "vue";

const buttonContent = ref(['Social Interaction', 'Personal development', 'Entertainment and Fun ', 'Rewards and recognition'])
</script>

<style scoped>
.signups{
    width: 50%;
    margin: 90px auto;
}


</style>