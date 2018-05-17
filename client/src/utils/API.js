import React from "react";
import axios from "axios";

const key = process.env.GOOGLE_API;
let queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + props.address + "&key=" + key;

export default {

    getGeo: function(){
        return axios.get(queryURL).then(function (response){
            var lat = response.data.results[0].geometry.location.lat;
            var lng = response.data.results[0].geometry.location.lng;
        })
    }
}