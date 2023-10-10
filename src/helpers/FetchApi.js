import axios from "axios"


export const fetchAllContacts = async() => {
const {data} = await axios('https://646e5b9f9c677e23218b923f.mockapi.io/contacts')
return data
}

export const createNewContact = async(user) => {
    const {data} = await axios.post('https://646e5b9f9c677e23218b923f.mockapi.io/contacts', user)
    return data
}

export const deleteContact = async(id) => {
    const {data} = await axios.delete(`https://646e5b9f9c677e23218b923f.mockapi.io/contacts/${id}`)
    return data
}