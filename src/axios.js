import axios from "axios";

const instance = axios.create({
  // baseURL: heroku url
  baseURL: "https://tiktokclone-mernbackend.herokuapp.com/",
})

export default instance;