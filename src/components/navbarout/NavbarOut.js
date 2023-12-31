import React from 'react'
import Searchbar from '../../app/search/page'
import Settingout from '../outsetting/Setting'
function NavbarOut() {
  return (
    <div className=' w-screen z-50 fixed top-0  h-16 border rounded-lg bg-zinc-300 flex flex-row  gap-12 items-center ' >
    <div className=' float-left pl-24 w-1/3  ' >logo</div>
    <div className=' w-1/3 bg-black h-12 border rounded-xl text-center justify-center '> 

    <Searchbar/>
</div>
    <div  className='  flex flex-row float-right gap-12 right-0 ml-auto pr-24 '>


<div>
  <button className=' border border-blue-600 rounded-xl w-24 h-12'>  LOG In  </button>
 </div>

<div>

    <Settingout/>
</div>
</div>
    </div>
  )
}

export default NavbarOut