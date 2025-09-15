import React from 'react'

const Academics = () => {
  return (
    <div className='flex flex-col justify-around !p-10' id='bigbox'>
      
    <div id='academicsfirstblock' className='flex justify-center gap-27 '>

      <div id='firstblockleftside' className='flex flex-col justify-around !p-2'>

    <p id='heading'  className='text-center font-bold'>Elementary Classes (6-8)</p>

    <p className=' text-center' id='para1'>Elementary Classes focus on strengthening the basic concepts learned in primary school and preparing students for higher studies. Subjects taught include English, Urdu, Mathematics, General Science, Social Studies, and Islamiat.</p>
    

      </div>

      <div id='firstblockrightside'>

    <img src='./Pics/midddle.jpg' id='middleschoolpic' alt="element"  />

      </div>

    </div>



     <div id='academicssecondblock' className='flex justify-center gap-27'>

      <div id='secondblockleftside' className='flex flex-col justify-around !py-2 !px-4'>

    <p id='heading'  className=' text-center font-bold'>Higher Secondary (9-12)</p>

    <p className=' text-center 'id='para1'>Higher Secondary level offers  ICS, Humanities and Commerce groups. The curriculum is designed to equip students with in-depth knowledge of their chosen subjects and prepare them for professional colleges and universities.</p>
    

      </div>

      <div id='secondblockrightside'>

    <img src='./Pics/big.jpg' id='highchoolpic' alt="element" />

      </div>

    </div>
    </div>
  )
}

export default Academics