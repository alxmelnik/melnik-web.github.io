import axios from 'axios';
// const baseUrl = "https://webdev-api.loftschool.com";
// const baseUrl = "http://localhost:8080";
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// axios.defaults.baseURL = baseUrl;
// axios.defaults.headers ['Autorization'] = `Bearer ${token}`;


const requests = axios.create({
  baseUrl: "https://webdev-api.loftschool.com"
})



export default requests;