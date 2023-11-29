<template>
  <LayOut :Image="photoUrl">
    <div class="container">
      <div class="clientList" v-for="client in clientDetails" :key="client">
        <DetailsPage :clientdetails="client" />
      </div>
      <div class="signup">
        <SignupButton buttonText="Continue" />
      </div>
    </div>
  </LayOut>
</template>

<script setup>
import LayOut from "@/LayOut/LayOut.vue";
import photoUrl from "../assets/congratsImage.png";
import SignupButton from "@/components/Buttons/SignupButton.vue";
import DetailsPage from "../components/DetailsCard.vue";
// import Image from "../assets/profilePics/profile (1).jpg";
// import ClientDetails from "../views/ClientDetails.vue";
import { onMounted } from "vue";
import { getDetails, clientDetails } from "../Composable/ApiCall";

//onMounting the API fetched(receives a callback function)
onMounted(() => {
  getDetails("https://jsonplaceholder.typicode.com/users");
});
</script>

<style scoped>
h2 {
  font-weight: 300px;
  font-size: 30px;
  text-align: center;
}

.signup {
  width: 50%;
  margin: auto;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: fit-content;
}
</style>
