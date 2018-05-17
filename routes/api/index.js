const router = require("express").Router();
const listRoutes = require("./lists");

// Listing routes
router.use("/lists", listRoutes);

module.exports = router;
