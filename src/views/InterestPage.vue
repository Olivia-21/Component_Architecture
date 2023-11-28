<template>
  <LayOut :Image="Imageurl" :navItems="['Back', 'Step 3 of 4', 'Exit']">
    <div class="content">
      <h3>Hey there! What brings you here?</h3>
      <p>This will help us make great recommendations</p>
    </div>
    <InterestButtonsPage :buttTexts="buttonContent" />
    <div class="signup">
      <SignupButton buttonText="Continue" @click="pageNavigate" />
    </div>
  </LayOut>
</template>

<script setup>
import LayOut from "@/LayOut/LayOut.vue";
import Imageurl from "../assets/InterestPageImage.png";
import InterestButtonsPage from "@/components/Buttons/InterestButtonsPage.vue";
import SignupButton from "@/components/Buttons/SignupButton.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const buttonContent = ref([
  "Social Interaction",
  "Personal development",
  "Entertainment and Fun ",
  "Rewards and recognition",
]);

const pageNav = useRouter();
const pageNavigate = () => {
  pageNav.push("/interestpage2");
};
</script>

<style scoped>
.content {
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 10px;
}

h3 {
  margin-bottom: 5px;
}

p {
  margin-bottom: 50px;
}

.uploadphoto {
  margin-top: 100px;
  width: 38%;
}

.signup {
  width: 232px;
  height: 40px;
  margin: 55px auto 0px auto;
}
</style>
