const { DataTypes } = require("sequelize")
const { sequelize } = require("../config/db")

const nurse_hired_jobs = sequelize.define("nurse_hired_jobs", {
    job_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nurse_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    timestamps: false
});

module.exports = nurse_hired_jobs
