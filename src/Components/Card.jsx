import React from 'react'

const Card = (props) => {
  return (
    
    <div className='w-60 h-60 !mr-3 !my-3 text-center flex flex-col justify-around' id='picbg'>
  <img src={props.photo} alt=""  className='h-32 w-32 rounded-full   !mt-5 '/>
  <h1 className='text-3xl font-bold !mb-2'>{props.name}</h1>
  <h3 className='text-2xl !mb-2'>{props.position}</h3>

</div> 
  )
}

export default Card