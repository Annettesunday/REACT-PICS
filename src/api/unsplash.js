import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 6629ef94a85a23b9fb7e046d26d0d148b594ab49e32078e0923a3126a630aff8"
  }
});
