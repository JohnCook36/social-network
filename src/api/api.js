import axios from "axios";
import {API_KEY, FOLLOW_URL, USERS_URL} from "../constants";

const instance = axios.create({
    withCredentials: true,
    headers:{
        "API-KEY": API_KEY,
    }
})


export const getUsers = (currentPage = 1,pageSize = 10 ) => {
    return instance.get(USERS_URL, {
        params: {
            page: currentPage,
            count: pageSize,
        }
    })
}
