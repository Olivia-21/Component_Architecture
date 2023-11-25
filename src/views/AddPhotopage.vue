<template>
  <LayOut :Image="ImageUrl" :navItems="['Back', 'Step 2 of 4', 'Exit']" :texts="ImageTexts">
    <div class="content">
      <h3>Add Photo</h3>
      <p>Add a photo so other members know who you are</p>
      <ImageCircle />
      <div class="uploadphoto">
      <SignupButton buttonText="Upload a Photo" @click="navigateToPhotoPage"/>
    </div>
    <span>Skip</span>
    </div>
    <div></div>
  </LayOut>
</template>

<script setup>
import LayOut from "@/LayOut/LayOut.vue";
import ImageUrl from "../assets/page2-image.png";
import ImageCircle from "../components/ImageCircle.vue";
import SignupButton from "@/components/Buttons/SignupButton.vue";
import { useRouter } from "vue-router";

const navigate = useRouter();
const navigateToPhotoPage = () =>{
  navigate.push("/addphotos");
}

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

.uploadphoto{
  margin-top: 150px;
  width: 38%;
}
</style>
