import axios from "axios";

export const geoCoding = async ( name: string ) => {
    const url = "https://geocoding-api.open-meteo.com/v1/search";

    const res = await axios.get(url, {
        params: {
            name: name,
            count: 1, 
            language: "en",
        }
    })
    console.log("geo coding: ",res.data)
    return res.data;
};

