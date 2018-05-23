
import axios from "axios";

// const key = process.env.GOOGLE_API;
const key = "AIzaSyAo3U3-CYQSA_L--3jjHzIIqBnngBiAMEU";
let queryURL = "https://maps.googleapis.com/maps/api/geocode/json?key=" + key;

export default {

    getGeo: function (address) {
        return axios.get(`${queryURL}&address=${address}`);
    },

    getListings: function () {
        return axios.get("/api/listings");
    },

    getListing: function (id) {
        return axios.get("/api/listings/" + id);
    },

    deleteListing: function (id) {
        return axios.delete("/api/listings/" + id);
    },
    saveListing: function (listingData) {
        return axios.post("/api/listings", listingData);
    },

    login: function (userData) {
        return axios.post("/api/user/login", userData);

    }
}