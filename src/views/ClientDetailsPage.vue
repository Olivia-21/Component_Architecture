<template>
  <div class="clientdetails">
    <div class="profile">
      <div class="image">
        <!-- <img :src="Images" alt="" /> -->
        <img src="https://random.imagecdn.app/500/150" />
      </div>
      <p>
        I am {{ user?.name }} and I am Happy to meet You.<br />
        I am happy to know you that 300 + projects done successfully!
      </p>
    </div>
    <div class="userInfo">
      <div class="name">
        <h1>Bio</h1>
        <h2>
          <span><strong>name:</strong></span> {{ user?.name }}
        </h2>
        <p><strong>email:</strong> {{ user?.email }}</p>
        <p><strong>username:</strong> {{ user?.username }}</p>
        <p><strong>contact:</strong> {{ user?.phone }}</p>
      </div>
      <div class="address">
        <h1>Address</h1>
        <h3>
          <span><strong>Street:</strong></span> {{ user.address?.street }}
        </h3>
        <p>
          <span><strong>Zipcode:</strong></span> {{ user.address?.zipcode }}
        </p>
        <p>
          <span><strong>Suite:</strong></span> {{ user.address?.suite }}
        </p>
      </div>
      <div class="company">
        <h1>Company</h1>
        <h3>
          <span><strong>Name:</strong></span> {{ user.company?.name }}
        </h3>
        <p>
          <span><strong>CatchPhase:</strong></span>
          {{ user.company?.catchPhrase }}
        </p>
      </div>
      <div class="company">
        <h1>Company</h1>
        <h3>
          <span><strong>Name:</strong></span> {{ user.company?.name }}
        </h3>
        <p>
          <span><strong>CatchPhase:</strong></span>
          {{ user.company?.catchPhrase }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { user, getDetails } from "@/Composable/ApiCall";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
onMounted(() => {
  getDetails("https://jsonplaceholder.typicode.com/users/" + route.params.id);
});
</script>

<style scoped>
.clientdetails {
  display: flex;
  width: 100%;
}

.userInfo {
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.name,
.address,
.company {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  height: 35%;
  width: 35%;
  text-align: left;
  padding: 10px;
}

.name {
  border-bottom: 8px solid aqua;
  height: 330px;
}
h1 {
  margin-bottom: 10px;
  text-align: center;
  text-decoration: underline;
}

p {
  margin: 10px;
}
.address {
  border-bottom: 8px solid wheat;
  height: 330px;
}

.company {
  border-bottom: 8px solid blue;
  height: 330px;
}

.clientdetails h5,
h1 {
  text-align: center;
  margin: 30px;
}
.clientdetails #toptext {
  color: blue;
}

.profile {
  background-color: blue;
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}

.profile p {
  color: white;
  text-align: center;
  margin-top: 30px;
  font-weight: 600px;
  font-size: 30px;
  line-height: 39.16px;
}

img {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  /* background-image: url("../assets/profilePics/profile\ \(11\).jpg"); */
  background-size: cover;
  background-position: center;
}
</style>
