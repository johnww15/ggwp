const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.post("/", usersController.userSignup);
router.post("/login", usersController.userLogin);

//to be removed when app is completed
router.get("/login", (req, res) => {
  res.json({ msg: "/login get url is running" });
});

module.exports = router;
