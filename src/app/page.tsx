import Gamegrid from '@/components/Gamegrid'
import Navbar from '@/Navbar'
import React from 'react'


const Page = () => {
  return (
    <div className=' flex-col justify-between '>
      <Navbar />
      < Gamegrid />
    </div>
  )
}

export default Page