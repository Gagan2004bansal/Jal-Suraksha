import React from 'react';
import emblem from '../images/emblem.png';
import DelhiGovt from '../images/DelhiGovt.png';
import '../custom.css'

const Header = () => {
  return (
    <>
        <div className='fiftenVH flex px-4  md:px-10 md:py-4 justify-between items-center gap-x-[6px] border-b-2'>
            <div className='flex gap-x-2 md:gap-x-4 items-center justify-between'>
                <img src={emblem} alt='error' className='h-[60px] md:h-[80px]'/>
                <div className='text-[13px] md:text-[18px] font-bold'>
                    <p>Delhi Water Bodies Society</p>
                    <p>Government of NCT of Delhi</p>
                </div>
            </div>
            <div>
                <img src={DelhiGovt} alt='error' className='w-[100px] md:w-[180px]'/>
            </div>
        </div>
    </>
  )
}

export default Header