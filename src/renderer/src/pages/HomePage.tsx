import RoadsTable from "@renderer/components/table"
import axios from "axios"
import { useEffect, useState } from "react"

function HomePage(): JSX.Element {
  const [roads, setRoads] = useState([])
  const [total, setTotal] = useState(0)
  const [limit, _] = useState(5)
  const [offset, setOffset] = useState(0)

  const getRoadsFromApi = async () => {
    await axios
      .get(`http://localhost:8000/api/v1/roads?limit=${limit}&offset=${offset}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      .then((response) => {
        setRoads(response.data.roads)
        setTotal(response.data.total)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getRoadsFromApi()
  }, [])

  useEffect(() => {
    getRoadsFromApi()
  }, [offset])

  return (
    <>
      {/* TODO: set header component here */}

      { total > 0 ? (
        <RoadsTable
          roads={roads}
          total={total}
          inOnePage={limit}
          offset={offset}
          setOffset={setOffset}
        />
        // TODO: think about set pagination component here
      ) : (
        // TODO: validate empty response
        <div>There are no roads</div>
      )}
    </>
  )
}

export default HomePage
