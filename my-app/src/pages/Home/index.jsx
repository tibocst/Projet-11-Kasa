// import { useState } from 'react'
import '../../styles/Home.css'
import Card from '../../components/Card'
import { logements } from '../../datas/logements'

function Home() {
  
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
