import React from 'react';
import '../custom.css'
import { Link } from 'react-router-dom';

const Header2 = () => {
  return (
    <div>
        <div className='flex justify-center items-center navyBlue text-white gap-x-4 py-2 text-lg'>
            <Link to='/home'>
              <div className='hover:underline hover:cursor-pointer'>Home</div>
            </Link>
            <Link to='/community'>
              <div className='hover:underline hover:cursor-pointer'>Community</div>
            </Link>
            <Link to='/map'>
            <div className='hover:underline hover:cursor-pointer'>Map</div>
            </Link>
            <div className='hover:underline hover:cursor-pointer'>Optional</div>
        </div>
    </div>
  )
}

export default Header2