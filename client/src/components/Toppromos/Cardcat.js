import React from 'react'

const Cardcat = ({data}) => {
  return (
    <div className='box-content' style={{backgroundImage:`url(${data.img})`,backgroundSize:'cover'}}>
       <h1 className='cat-title'>{data.name}</h1>

    </div>
  )
}

export default Cardcat