import React from 'react'
import data from '../data'

const CarCard = ({ car }) => {
    return (
        <div>
            
            <h5>{car.manufacturer} {car.carName}</h5> 
            <div style={setImage}>
             <img style={{ width: '100%', height: '100%'}} src={car.imageUrl} alt={car.name}/>
            
            </div>
            <button>add to saved</button>
            <hr/>
        </div>
    )
}

const ChooseCar = () => {
    return (
      <>
        <h1>Pick a car below</h1>
        {data && data.map(car => (
            <>
                <CarCard key={car.name} car={car}/>
            </>
        ))}
      </>
    )
}

const setImage = {
    width: '500px',
    height:' auto'
}

export default ChooseCar

