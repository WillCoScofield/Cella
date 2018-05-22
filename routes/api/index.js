const router = require("express").Router();
const listingRoutes = require("./listings");

// Listing routes
router.use("/listings", listingRoutes);

module.exports = router;
