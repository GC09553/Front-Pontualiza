import { useContext } from "react"
import { AuthContext } from "../context/authContextObject";

export default function useAuth(){
    return useContext(AuthContext);
}