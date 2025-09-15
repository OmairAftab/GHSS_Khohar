 import React from 'react'
 
 const Home = () => {
   return (
     <div className='flex h-[calc(100vh-5rem)]'>


{/* left wala */}
    <div className="flex flex-col w-6/12 justify-center " id='leftpartofhome'>

      <div className="flex flex-col text-center !px-8 justify-evenly h-[calc(100vh-80px)]" id='firstleft'>
          <h1 className="text-5xl font-bold"  id='mainheading'>
           <span className='sp'>GHSS Khohar</span>  – Inspiring Minds, Changing Future
          </h1>

          <h4 className="mt-4 font-medium text-lg" id='line'>
            Welcome to  <span className='sp font-bold'>GHSS Khohar</span>, a place of learning, growth and success. Where students are encouraged to explore their potential, build strong values and prepare for a brighter future through quality education and guidance.
          </h4>

          


       <div className='flex flex-wrap justify-around' id='picsathomepage'>

          <div className='flex flex-col w-25 h-25'>
            <img src="https://cdn-icons-png.flaticon.com/128/171/171322.png" alt="" />
             <h1  className='font-bold text-center'>Quality Education</h1>
          </div>

          <div className='flex flex-col  w-25 h-25'>
            <img src="https://cdn-icons-png.flaticon.com/128/185/185578.png" alt="" />
             <h1 className='font-bold text-center'>Experienced Teachers</h1>
          </div>

          <div className='flex flex-col  w-25 h-25'>
            <img src="https://cdn-icons-png.flaticon.com/128/8907/8907406.png" alt="" />
             <h1 className='font-bold text-center'>Modern Facilities</h1>
          </div>

        </div>


        </div>

       

    </div>

    <div className="w-6/12  flex justify-center " id='rightpartofhome'>
    
    <img id='std' src='/Pics/std.png' alt="student" srcset="" />
    
    </div>
    

     </div>
   )
 }
 
 export default Home