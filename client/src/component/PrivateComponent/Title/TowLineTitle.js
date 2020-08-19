import React from 'react'

const TowLineTitle = ({h1,h2 ,p}) => {
    return (
        <div className="listHeader">
            <h1>{h1} <i className='fas fa-heart'></i> {h2}</h1>
            <p > {p} </p>
        </div>
    )
}

export default TowLineTitle
