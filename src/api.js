import axios from "axios";

axios.defaults.baseURL = "https://63f793b8e8a73b486afb43d3.mockapi.io/"

// export const getFilms = async( text,page )=>{
//     try {
//       const response = await axios.get(`3/search/movie?api_key=d2b1f43b135f5d6f20df0dc93193eaa3&language=en-US&query=${text}&page=${page}&include_adult=false`)
//       return response
//     } catch (error) {
//       console.error(error)
//     }
// }


export const getContacts = async () =>{
    try {
        const response = await axios.get('contacts')
        return response
    } catch (error) {
        console.error(error)

    }
}