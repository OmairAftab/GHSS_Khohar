import React from 'react'

const About = () => {
  return (
    <div>

    <div id='upperpart' className=' '>
      Government Higher Secondary School Khohar (GHSS Khohar), established in 1856 in Tehsil Sarai Alamgir, District Gujrat, is one of the oldest and most trusted schools in the region. With a team of qualified and dedicated teachers, the school focuses on providing quality education, discipline and character building. For generations, GHSS Khohar has played a key role in shaping the future of students by offering free and accessible learning, earning respect and trust from the community.
    </div>

    <div id='lowerpart' className='flex justify-evenly'>

    <div id='leftpart' className=' text-black flex flex-col justify-around text-center'>

    <p className=' font-bold ' id='mission'>Mission</p>

    <p className='!px-4' id='ss'> To give quality education by building knowledge, character and confidence in students so they can do well in life.</p>




    </div>

    <div id='rightpart' className=' text-black flex flex-col justify-around text-center' >

      <p className=' font-bold ' id='vision'>Vision</p>

    <p className=' !px-4 flex flex-wrap' id='ss'> To shape individuals who achieve success in their lives and make a positive difference in society through ethics.</p>
      
       </div>

    
    

    </div>

    </div>
  )
}

export default About