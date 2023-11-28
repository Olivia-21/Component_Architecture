<template>
  <LayOut :Image="photoUrl" :navItems="['Back', 'Step 4 of 4', 'Exit']">
    <div class="right-content">
      <div class="head">
        <h3>Let's get started by picking some interests</h3>
        <p>
          Alright, let's pick something we're interested in and get started!
        </p>
      </div>
      <div class="containers">
        <div
          class="boxes"
          v-for="(texts, index) in boxFolder"
          :key="index"
          :style="styleCard(index)"
        >
          <h5>{{ texts.h3text }}</h5>
          <button @click="buttCheck">{{ texts.butTexts }}</button>
        </div>
      </div>
    </div>
    <div class="signup">
      <SignupButton buttonText="Continue" @click="pageNavigate" />
    </div>
  </LayOut>
</template>

<script setup>
import LayOut from "@/LayOut/LayOut.vue";
import photoUrl from "../assets/interestPhoto.png";
import SignupButton from "@/components/Buttons/SignupButton.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const pageNav = useRouter();
const pageNavigate = () => {
  pageNav.push("/congrats");
};

const boxFolder = ref([
  { h3text: "Gaming", butTexts: "Add" },
  { h3text: "Fashion", butTexts: "Add" },
  { h3text: "Music", butTexts: "Add" },
  { h3text: "Reading", butTexts: "Add" },
]);

// A style Function to style 4 different colors based on their index
const styleCard = (index) => {
  return {
    backgroundColor:
      index === 0
        ? "rgba(223, 155, 224, 1)"
        : index === 1
        ? "rgba(204, 255, 204, 1)"
        : index === 2
        ? "rgba(255, 194, 153, 1)"
        : index === 3
        ? "rgba(37, 117, 209, 1)"
        : "yellow",
    width: "172px",
    height: "168px",
    borderRadius: "1px solid rgba(179, 179, 179, 1)",
    opacity: "50%",
  };
};
</script>

<style scoped>
.right-content {
  width: 400px;
  margin: 20px auto;
  /* display: flex;
  left: 880px;
  justify-content: center;
  align-items: center; */
}

.head h3 {
  font-weight: 600px;
  font-size: 30.18px;
  line-height: 30.16px;
  text-align: center;
}

.head p {
  font-weight: 400px;
  font-size: 16px;
  line-height: 19.36px;
  text-align: center;
  margin: 15px 0;
}
.containers {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.boxes h5 {
  font-weight: 600px;
  font-size: 23.04px;
  line-height: 27.88px;
  margin: 20px 0 60px 30px;
}

.boxes button {
  width: 73px;
  height: 36px;
  margin-left: 30px;
  cursor: pointer;
}

.signup {
  width: 52%;
  margin-left: 145px;
}
</style>
