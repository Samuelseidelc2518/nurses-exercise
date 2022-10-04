const { DataTypes } = require("sequelize")
const { sequelize } = require("../config/db")

const Facilities = sequelize.define("facilities", {
    facility_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    facility_name: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

module.exports = Facilities
