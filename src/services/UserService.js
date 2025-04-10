const BASE_URL = "https://3.145.97.1/"

export async function getAllUsers(params) {
    const response = await fetch(BASE_URL+ '/users/')
    return response.json();   
}