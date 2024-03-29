import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    const newTours = tours.filter((tour ) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const resp = await fetch(url);
      const tours = await resp.json();
      setTours(tours)
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false)
  }

  useEffect(() => {
    fetchTours()
  },[])

  if(isLoading) {
    return <main>
      <Loading />
    </main>
  }

  if(tours.length === 0 ) {
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button className="btn" onClick={fetchTours}>refresh</button>
      </div>
    </main>
  }

  return <main>
    <Tours tours={tours} removeTours={removeTours} />
  </main>
}

export default App
