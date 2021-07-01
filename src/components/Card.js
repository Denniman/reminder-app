import React, {useState} from 'react'
import {peopleData} from '../data'

 const Card = () => {

    const [people, setPeople] = useState(peopleData)


    return (
        <div className="card">
        <h1 className="main-header">{people.length} Birthdays Today</h1>
            {people.map(({name, img, age, id}) => {
             return (
                <div key={id} className="card-list">
                    <img src={img} alt="" className="img"/>
                    <div className="name">
                        <h3>{name}</h3>
                        <p>{age} years</p>
                    </div>
                </div>
             )  
            })}

            <button className="btn" onClick={() => setPeople([])}>Clear All Birthdays</button>
        </div>
    
    )
}

export default Card
