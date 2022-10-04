const express = require("express")
const router = express.Router()

const {
    fetchFacilities
} = require("../controllers/facilities.controllers")

const {
    fetchNurses,
    hiringPriorities
} = require("../controllers/nurses.controllers")

router.get("/", (req, res) => {
    res.send({ msg: "It's working!" })
})

router.get("/facilities", fetchFacilities);

router.get("/nurses", fetchNurses)
router.get("/nurses/hiring", hiringPriorities)

module.exports = router;