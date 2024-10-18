import axios from "axios";
import {jwtDecode} from "jwt-decode";


const isDevelopment = window.location.hostname.includes("localhost");

const getServer = () =>{
   return isDevelopment ? "https://eshop-439007.uc.r.appspot.com" : "https://eshop-439007.uc.r.appspot.com";
}
const decodeUser = () => {
   const token = localStorage.getItem("token");
   return jwtDecode(token);
 };
 
 export { getServer, decodeUser };