import React from 'react'
import Botanical from '../components/Botanical/Botanical'
import Cream from '../components/Cream/Cream'
import Davines from '../components/Davines/Davines'
import Featured from '../components/Featured/Featured'
import Latest from '../components/Latest/Latest'
import Popular from '../components/Popular/Popular'
import Product from '../components/Products/Product'
import SkinCare from '../components/SkinCare/SkinCare'

const Home = () => {
  return (
    <div>
      <Botanical />
      <Product />
      <Davines />
      <SkinCare />
      <Featured />
      <Cream />
      burda basqa sey var
      <Latest />
      <Popular />
    </div>
  )
}

export default Home