import API from "../../utils/API.js"

db.places.find( {
    loc: { $geoWithin: { $box:  [ [ API.boundSWlng, API.boundSWlat ], [ APIboundNElng, API.boundNElat ] ] } }
 } )

