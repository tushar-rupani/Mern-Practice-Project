import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
export const createOrGetUser = async(res) => {
    // const navigate = useNavigate();
    const decoded = jwt_decode(res.credential);
    localStorage.setItem("profile", JSON.stringify({...decoded}))
    window.location.href = "/"
}