const API_URL = ("https://api.quotable.io/random")


export const getquote = async()=>{
const response = await fetch ("https://api.quotable.io/random")
const data =  await response.json()
return data
}