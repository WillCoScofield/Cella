const router = require("express").Router();
const listsController = require("../../controllers/listsController");

// Matches with "/api/listings"
router.route("/")
    .get(listsController.findAll)
    .post(listsController.create);

// Matches with e.g.: "/api/listings/-84.38360373029151-33.7778105697085--84.3809057697085-33.7805085302915"
router.route("/:latSW-:lngSW-:latNE-:lngNE")
    .get(listsController.findByCoords)

// Matches with "/api/listings/:id"
router.route("/:id")
    .get(listsController.findById)
    .put(listsController.update)
    .delete(listsController.remove);

module.exports = router;
 
