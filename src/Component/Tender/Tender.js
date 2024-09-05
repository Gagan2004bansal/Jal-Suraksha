import React from 'react';
import '../custom.css'

const Tender = () => {
  return (
    <div className='p-2 md:p-10'>
        <div className='flex flex-col md:flex-row justify-between'>
            <div className='md:w-8/12'>
                <div className='navyBlue px-4 py-1 m-2 text-white rounded-md'>Notifications</div>
                <div className='flex flex-col p-4 gap-y-4 m-2 bg-gray-100 rounded-md overflow-y-scroll max-h-[300px]'>
                    <div>
                        <div className='font-medium'>Holidays 2024 GNCTD_231019_163824</div>
                        <div className='text-navyBlue'>View</div>
                    </div>
                    <div>
                        <div className='font-medium'> Water Conservation at large in Public Interest and reduce the load on portable water.</div>
                        <div className='text-navyBlue'>View</div>
                    </div>
                    <div>
                        <div className='font-medium'> Public notice of Vasant kunj Enclave B- Block UnderDivision EE (M) 36.</div>
                        <div className='text-navyBlue'>View</div>
                    </div>
                    <div>
                        <div className='font-medium'> Public Notice of Somesh Vihar under Devision EE(M)-34 Near Dwarka WTP</div>
                        <div className='text-navyBlue'>View</div>
                    </div>
                    <div>
                        <div className='font-medium'> Public Notice regarding RWH</div>
                        <div className='text-navyBlue'>View</div>
                    </div>
                    <div>
                        <div className='font-medium'> The internal sewerage system along with House Sewer Connections have been completed and made functional for collection, under EE (C) DR -XII</div>
                        <div className='text-navyBlue'>View</div>
                    </div>
                    <div>
                        <div className='font-medium'> Technical and Financial Eligibility Criteria of Tender</div>
                        <div claWssName='text-navyBlue'>View</div>
                    </div>
                    <div>
                        <div className='font-medium'> Water Conservation at large in Public Interest and reduce the load on portable water.</div>
                        <div className='text-navyBlue'>View</div>
                    </div>
                </div>
            </div>
            <div className='md:w-4/12'>
                <div className='flex flex-col p-4 gap-y-4 drop-shadow-lg m-2 border-2 rounded-md'>
                    <div className='flex gap-x-4 items-center'>
                        <img src='https://dpgs.delhi.gov.in/sites/default/files/DKS/profile/shri-vinai-kumar-saxena11_1.jpg' alt='error' className='w-[80px] h-[80px] rounded-full'/>
                        <div>
                            <p>Lieutenant Governor</p>
                            <h1 className='font-bold'>Shri Vinai Kumar Saxena</h1>
                        </div>
                    </div>
                    <div className='flex gap-x-4 items-center'>
                        <img src='https://dpgs.delhi.gov.in/sites/default/files/DKS/profile/shri-arvind-kejriwal_2.jpg' alt='error' className='w-[80px] h-[80px] rounded-full'/>
                        <div>
                            <p>Chief Minister</p>
                            <h1 className='font-bold'>Shri Arvind Kejriwal</h1>
                        </div>
                    </div>
                    <div className='flex gap-x-4 items-center'>
                        <img src='https://delhijalboard.delhi.gov.in/sites/default/files/DCPCR/profile/ms.-atishi-marlena.jpg' alt='error' className='w-[80px] h-[80px] rounded-full' />
                        <div>
                            <p>Minister</p>
                            <h1 className='font-bold'>Ms. Atishi</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tender