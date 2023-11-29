import axios from "axios";
import { ref } from "vue";
const clientDetails = ref([]);

//function to fetch API
const getDetails = async (url) => {
  try {
    const details = await axios.get(url);
    clientDetails.value = details?.data;
    console.log(details);
  } catch (error) {
    console.log(error);
  }
};

export { getDetails, clientDetails };
