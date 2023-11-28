<template>
  <LayOut :Image="ImageUrl" :navItems="['Back', 'Step 2 of 4', 'Exit']">
    <div class="content">
      <h3>Add Photo</h3>
      <p>Add a photo so other members know who you are</p>

      <!-- <ImageCircle
        :imageLink="imageUrl"
        :style="{ width: '30px', height: '40px', margin: '20px 30px' }"
      /> -->
      <div><img :src="imageLink" alt="" /></div>
      <slot></slot>
      <div class="uploadphoto">
        <SignupButton
          buttonText="Upload a Photo"
          @click="navigateToPhotoPage"
        />
      </div>
      <span>Skip</span>
    </div>
    <div></div>
  </LayOut>
</template>

<script setup>
import LayOut from "@/LayOut/LayOut.vue";
import ImageUrl from "../assets/page2-image.png";
import SignupButton from "@/components/Buttons/SignupButton.vue";
import imageLink from "../assets/Ellipse32.png";
import { useRouter } from "vue-router";
const navigate = useRouter();
const navigateToPhotoPage = () => {
  navigate.push("/addphotos");
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

img {
  width: 80px;
  height: 80px;
  margin: 20px 30px;
  text-align: center;
}
</style>
