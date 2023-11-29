<template>
  <div class="clientdetails">
    <h1>User Biography</h1>
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
.userInfo {
  /* background-color: blue; */
  margin: 50px;
  display: flex;
  justify-content: center;
  gap: 80px;
  margin: 150px auto;
}

.name,
.address,
.company {
  background-color: white;
  padding: 10px 30px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.name {
  border-bottom: 8px solid aqua;
}
h1 {
  margin-bottom: 15px;
  text-align: center;
  text-decoration: underline;
}

p {
  margin: 15px;
}
.address {
  border-bottom: 8px solid wheat;
}

.company {
  border-bottom: 8px solid blue;
}

.clientdetails h1 {
  margin-top: 30px;
  text-decoration: none;
}
</style>
