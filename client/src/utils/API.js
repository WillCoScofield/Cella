import axios from "axios";

// const key = process.env.GOOGLE_API;
const key = "AIzaSyAo3U3-CYQSA_L--3jjHzIIqBnngBiAMEU";
let queryURL = "https://maps.googleapis.com/maps/api/geocode/json?key=" + key;

export default {

    getGeo: function( address ){
        return axios.get(`${queryURL}&address=${address}`);
    }
}