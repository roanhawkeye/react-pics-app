import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID zRgVCEPljwNwlcyXEaJAIgd3Qn-8p9btKD3X4BQAGTY",
  },
});
