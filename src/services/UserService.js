const BASE_URL = "https://3.129.72.234/"

export async function getAllUsers(params) {
    const response = await fetch(BASE_URL+'users/')
    return response.json();   
}