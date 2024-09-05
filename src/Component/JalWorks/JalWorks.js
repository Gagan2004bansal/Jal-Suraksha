import React from 'react'

const JalWorks = () => {
  return (
    <div>
        
        <div className='p-6 md:px-24 md:py-12 flex flex-col md:flex-row gap-y-8'>
            <div className='flex flex-col justify-evenly md:w-8/12 gap-y-4'>
                <div className='font-bold text-xl'>Welcome to Delhi Water Bodies Society</div>
                <div className='extralight'>Delhi Jal Board was constituted through an Act of Delhi Legislative Assembly on 6th April 1998. It has been meeting the needs of potable water in the National Capital Territory of Delhi for more than five decades. Delhi Jal Board has been able to supply pure and wholesome filtered water to the capital city of India which has grown phenomally to the present population of more than 160 lakh. Delhi Jal Board is committed for the augmentation of water supply in Delhi and has taken many steps in this direction. Delhi Jal Board has ensured average availability of 50 gallons per capita per day of filtered water through an efficient network of water treatment plants, booster pumping stations and about 9000 kms of water mains & distribution system.</div>
                <div className='font-bold bg-yellow-500 w-fit px-10 py-1 rounded-xl hover:bg-yellow-600 cursor-pointer'>Know More</div>
            </div>
            <div className='md:w-4/12 flex justify-end items-center'>
                <img src='https://pbs.twimg.com/media/F9lGMRiWcAAnL4R.jpg' alt='office' className='rounded-xl drop-shadow-xl md:h-[300px]'/>
            </div>
        </div>

    </div>
  )
}

export default JalWorks