const { Signup ,Login } = require("../controllers/AuthController");
const { Holdings, Positions, Orders,NewOrder } = require("../controllers/AuthController");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/allHoldings", Holdings);
router.get("/allPositions", Positions);
router.get("/allOrders", Orders);
router.post("/newOrder", NewOrder);

module.exports = router;

