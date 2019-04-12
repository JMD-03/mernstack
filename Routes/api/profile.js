const express = require("express");
const router = express.Router();

// @route GET api/profile/tests
// @description Tests Profile route
//@access   Public Route
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
