// import { useState } from 'react'
import '../../styles/Home.css'
import Card from '../../components/Card'
import { logements } from '../../datas/logements'

function Home() {


  // const [data, setData] = useState(logements)

  // useEffect(() => {
  //   async function fetch() {
  //     try {
  //       const response = await fetch(`http://localhost:8000/logements`)
  //       const { data } = await response.json()
  //       data(data)
  //     } catch (err) {
  //       console.log(err)
  //     } finally {
  //     }
  //   }
  //   fetch()
  // }, [])
  
  return (
    <div className="home">
      <div className='home-banner'>
        <img src={require('../../assets/beach.png')} alt="" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className='home-cards'>
        {logements.map((logement) => (<Card key={logement.id} idLogement={logement.id} imagePath={logement.pictures[0]} title={logement.title} />) )}
        {logements.length % 2 === 0 ? <div className='fakeCard'> </div> : null}
      </div>
    </div>
  );
}

export default Home;
