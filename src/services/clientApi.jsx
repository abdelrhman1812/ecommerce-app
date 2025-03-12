import axios from "axios";

// Create a new instance of axios with the base URL of your API endpoint
const clientApi = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default clientApi;
