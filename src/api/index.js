import axios from "axios"

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async (sw,ne) => {
    try{
      const options = {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': '99784ff8e6msh9e7ea7ae686d47ep161914jsn732daf8a002b'
        }
      };
        const {data:{data}} = await axios.get(URL,options);
        return data;
    }catch(error){
        console.log(error)
    }
};