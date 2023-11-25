<template>
  <div>
    <LayOut :Image="ImageUrl" :navItems="['Back', 'Step 2 of 4', 'Exit']">
      <div class="imgTexts">
        <div class="texts">
        <h3>Add Photo</h3>
        <p>Add a photo so other members know who you are</p>
    </div>
        <span><img :src="imageUrl" alt="" /></span>
      </div>
      <div class="signup"><SignupButton buttonText="Continue" @click="navigateToInterestPage"/></div>
    </LayOut>
  </div>
</template>

<script setup>
import imageUrl from "../assets/Ellipse 32.png";
import LayOut from "@/LayOut/LayOut.vue";
import ImageUrl from "../assets/page2-image.png";
import SignupButton from "@/components/Buttons/SignupButton.vue";
import { useRouter } from "vue-router";

const navigate = useRouter();

const navigateToInterestPage = () =>{
  navigate.push("/interestpage");
}

</script>

<style scoped>
.imgTexts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.texts{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    gap: 10px;
}

img{
    margin-top: 40px;

}

.signup {
  margin: 200px auto;
  width: 38%;
}
</style>