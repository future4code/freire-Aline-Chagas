import axios from "axios";
import { BASE_URL } from "../constants/url";
import { goToRecipesListPage } from '../routes/Coordinator';


export const login = (body, clear, navigate, setRightButtonText, setIsLoading) => {
 

    setIsLoading(true)
    axios.post(`${BASE_URL}/user/login`, body)
        .then((res) => {
            console.log(res.data.token)
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            goToRecipesListPage(navigate)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            setIsLoading(false)
            
        })
}

export const signUp = (body, clear, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/user/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            goToRecipesListPage(navigate)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data.message)
        })
}