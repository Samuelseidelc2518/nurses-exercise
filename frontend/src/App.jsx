import { useState, useEffect } from 'react'
import './App.css'
import { axiosInstance as instance } from './axios'

function App() {

  const [facilities, setFacilities] = useState([])
  const [selectedFacility, setSelectedFacility] = useState("")
  const [nurses, setNurses] = useState([])

  useEffect(() => {
    const fetchFacilitites = async () => {
      const { data } = await instance.get("/facilities")
      setFacilities(data)
      console.log(data)
    }
    fetchFacilitites()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()

    if(selectedFacility === "") {
      setNurses([])
      return;
    }

    const { data } = await instance.get(`nurses/hiring?facility_id=${selectedFacility}`)

    setNurses(data)

    console.log("Nurses: ", data)
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select name="select" id="select" onChange={e => setSelectedFacility(e.target.value)}>
          <>
            <option value="">-- Select --</option>
          </>
          {facilities.map(({ facility_id, facility_name }, ind) => (
              <option value={facility_id} key={ind}>{facility_name}</option>
          ))}
        </select>

        <button type="submit">Submit</button>
      </form>

      <div>
        Nurses: <br />
        {nurses.map((nurse, ind) => (
          <div className='nurse' key={ind}>{nurse}</div>
        ))}
      </div>
    </div>
  )
}

export default App
