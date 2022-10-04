const { DataTypes } = require("sequelize")
const { sequelize } = require("../config/db")

const Jobs = sequelize.define("jobs", {
    job_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    facility_id: {
        type: DataTypes.INTEGER
    },
    nurse_type_needed: {
        type: DataTypes.STRING
    },
    total_number_nurses_needed: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});

module.exports = Jobs
