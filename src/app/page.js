import React from 'react'
import Sidebar from '@/components/sidebar/Sidebar'
import Profile from './profile/page'
import Video from './videos/page'
export default function Homepage() {
  return (
    <div className=' flex flex-row pt-16 w-screen h-screen justify-center '>
      <div className='h-screen w-1/6 bg-black text-white'>  <Sidebar/></div>
     <div className=' flex  items-center flex-col w-screen h-screen gap-5 overflow-y-scroll'> 
     <div className=' w-1/4 h-1/4'>
     <Profile/>
     </div>
     <div className=' flex flex-row w-full justify-center h-full'>
     <div className=' w-1/4 h-full flex flex-col'>
     <div className='  justify-center object-cover bg-black w-full h-full  '>

     <Video />
     
    
     </div>
     <div className=' text-blue-600 flex  items-end '>  <snap> Play </snap></div>
   
     </div>
     
     <div className=' flex flex-col gap-14 self-end  '>
  <snap> aaaa</snap> 
  <snap> aaaa</snap> 
  <snap> aaaa</snap> 
  <snap> aaaa</snap> 
  <snap> aaaa</snap> 
</div>
</div>
     
     </div>

     
      

      </div>
  )
}
