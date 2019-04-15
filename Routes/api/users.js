const express = require("express");
const router = express.Router();

// @route GET api/users/tests
// @description Tests users route
//@access   Public Route
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

module.exports = router;
