import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 3f4383507fc5a5dc9d4f8628512685661b7750320ba3fed27673eb9d0fb460e0 "
  }
});
