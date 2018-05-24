const db = require("../models");

// Defining methods for the listsController
module.exports = {
  findAll: function(req, res) {
    db.List
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCoords: function (req, res) {
    const { lngSW, latSW, lngNE, latNE } = req.params;
    db.List.find({
      location: { $geoWithin: { $box:  [ [ lngSW, latSW ], [ lngNE, latNE ] ] } }
    })
    .then(listings => {
      res.json( listings );
    })
    .catch(err => {
      console.log( "List.findByCoords: ", err );
      res.json( err );
    });
  },
  findById: function(req, res) {
    db.List
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.List
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.List
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.List
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
