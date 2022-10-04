const { DataTypes } = require("sequelize")
const { sequelize } = require("../config/db")

const Nurses = sequelize.define("nurses", {
    nurse_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nurse_name: {
        type: DataTypes.STRING
    },
    nurse_type: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

module.exports = Nurses
