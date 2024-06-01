import axios from "axios"
const BASE_URL = 'http://20.244.56.144/test';

//function to get token...
export default async function getToken () {
    const authResponse = await axios.post(`${BASE_URL}/auth`, {
        "companyName": "goMart",
        "clientID": "61951e0c-16d0-449f-bb2e-db28406d8483",
        "clientSecret": "WvWfvnxXiVNLZlVI",
        "ownerName": "Aryan Tiwari",
        "ownerEmail": "aryan.2125cs1071@kiet.edu",
        "rollNo": "2100290120051"
      });

    return authResponse.data.access_token;
};