const Nurses = require("../models/Nurses")
const clinician_work_history = require("../models/clinician_work_history")

module.exports.fetchNurses = async (req, res) => {

    const nurses = await Nurses.findAll();

    res.send(nurses)
}

module.exports.hiringPriorities = async (req, res) => {

    const { facility_id } = req.query
    
    const nurses = await Nurses.findAll();

    let data = [];

    for(let i = 0; i < nurses.length; i++){
        let nurse = {
            points: 0,
            nurseId: nurses[i].nurse_id
        }
        const fetchedData = await clinician_work_history.findAll({
            where: {
                nurse_id: nurses[i].nurse_id-1000,
                facility_id: parseInt(facility_id)
            }
        })

        if(fetchedData.length === 0){
            nurse.points = 0;
            data.push(nurse)
            continue;
        }

        let worked_shift_counter = 0
        let call_out_counter = 0;
        let no_call_no_show = 0;

        fetchedData.forEach(el =>{
            if(el.worked_shift){
                worked_shift_counter++
            }
            if(el.call_out){
                call_out_counter++
            }
            if(el.no_call_no_show){
                no_call_no_show++
            }
        })

        nurse.points = worked_shift_counter - (call_out_counter) - (no_call_no_show*3)
        data.push(nurse)

    }

    data.sort((bf, af) => af.points-bf.points)

    res.send(data.map(el => el.nurseId-1000))

}