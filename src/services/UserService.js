const BASE_URL = "https://18.217.188.192/"

export async function getAllUsers(params) {
    const response = await fetch(BASE_URL+ '/users/')
    return response.json();   
}