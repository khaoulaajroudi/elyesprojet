import React from 'react'
import Promos from './Toppromos/Promos'
import Categori from './Toppromos/Categories'
import Banier from './Banniere/Banier'

const Acceuil = ({data}) => {
  console.log(data)
  return (
    <div>
      <Banier />
     <Promos  data={data}/>
    <Categori />
    </div>
  )
}

export default Acceuil