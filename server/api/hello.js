
import axios from "axios";

const config = useRuntimeConfig()


export default defineEventHandler(async (event) => {
    const { data } = await axios({
        method: 'get',
        url: 'https://api.github.com/users/emaurel/repos',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
            'Accept-Encoding': 'Identify',
            
        },
    })
    return data;
});

