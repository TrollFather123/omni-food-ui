const {Router} = require("express");
const userController = require("../controllers/userController");

const router = Router();


router.post("/signup",userController.register)
router.post("/signin",userController.login)


module.exports = router