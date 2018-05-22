import React from "react";
import axios from "axios";

const key = process.env.GOOGLE_API;
let queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=Atlanta&key=" + key;

export default {

    getGeo: function () {
        return axios.get(queryURL).then(function (response) {
            let lat = response.data.results[0].geometry.location.lat;
            let lng = response.data.results[0].geometry.location.lng;

            let boundNElat = response.data.results[0].geometry.viewport.northeast.lat;
            let boundNElng = response.data.results[0].geometry.viewport.northeast.lng;
            let boundSWlat = response.data.results[0].geometry.viewport.southwest.lat;
            let boundSWlng = response.data.results[0].geometry.viewport.southwest.lng;

        })
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
    }
}