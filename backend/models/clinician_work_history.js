const { DataTypes } = require("sequelize")
const { sequelize } = require("../config/db")

const clinician_work_history = sequelize.define("clinician_work_history", {
    work_history_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    facility_id: {
        type: DataTypes.INTEGER
    },
    nurse_id: {
        type: DataTypes.INTEGER
    },
    worked_shift: {
        type: DataTypes.BOOLEAN
    },
    call_out: {
        type: DataTypes.BOOLEAN
    },
    no_call_no_show: {
        type: DataTypes.BOOLEAN
    }
}, {
    timestamps: false,
    tableName: "clinician_work_history"
});


module.exports = clinician_work_history
