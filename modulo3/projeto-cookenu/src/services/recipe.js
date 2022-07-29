import axios from "axios"

export const createRecipe = (form, clear, setIsLoading) => {
  setIsLoading(true)
    axios.post(`https://cookenu-api.herokuapp.com/recipe`, form, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        console.log("ok")
        alert(res.data.message)
        clear()
        setIsLoading(false)
      })
      .catch((err) => {
        console.log("deu merda")
        alert(err.response.message)
        setIsLoading(false)
      })
  }