const Facilities = require("../models/Facilities")

module.exports.fetchFacilities = async (req, res) => {

    const facilities = await Facilities.findAll();

    res.send(facilities)
}