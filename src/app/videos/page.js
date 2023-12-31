import React from 'react'
import Image from "next/image"
import Myphoto from '../../../public/myphoto.png'

export default function Video() {

  return (
    <div className=' flex  bg-black justify-center '> 
    <div className='   '>
     <Image className=' w-full h-full object-cover' src={Myphoto}  />
    </div>
    
    </div>
  )
}
