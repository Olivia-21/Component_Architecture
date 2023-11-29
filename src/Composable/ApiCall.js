import axios from "axios";
import { ref } from "vue";
const clientDetails = ref([]);
const user = ref({});

//function to fetch API
const getDetails = async (url) => {
  try {
    const details = await axios.get(url);
    clientDetails.value = details?.data;
    user.value = details?.data;
    console.log(clientDetails.value);
  } catch (error) {
    console.log(error);
  }
};

export { getDetails, clientDetails, user };
