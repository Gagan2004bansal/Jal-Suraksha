import React from 'react';
import '../custom.css'

const Footer1 = () => {
    return (
        <div className='footerBack'>
            <div className='flex flex-col md:flex-row jusify-evenly p-4 md:p-8 gap-y-4'>
                <div className='md:w-4/12'>
                    <div className='text-yellow-500 text-lg'>Quick Links</div>
                    <div className='flex flex-row mt-4'>
                        <div className='w-6/12 text-white md:flex md:flex-col md:gap-y-2'>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                        </div>
                        <div className='w-6/12 text-white md:flex md:flex-col md:gap-y-2'>
                            <div>5</div>
                            <div>6</div>
                            <div>7</div>
                        </div>
                    </div>
                </div>
                <div className='md:w-4/12'>
                    <div className='text-yellow-500 text-lg'>Address</div>
                    <div className='text-white font-extralight mt-2'>⚲ Delhi Jal Board (HQ),
                        Public Relations Office,
                        Room No.306, 3rd Floor,
                        Varunalaya Ph-II,
                        Jhandewalan, Karol Bagh,
                        New Delhi-110005
                    </div>
                </div>
                <div className='flex items-center justify-center md:w-4/12'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6701.789827598435!2d77.19317078590397!3d28.649439100964848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0290b748ea31%3A0x3262145d8635b05a!2sDelhi%20Jal%20Board!5e1!3m2!1sen!2sin!4v1725388513420!5m2!1sen!2sin"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className='rounded-xl'
                    />
                </div>
            </div>

            <div className='text-center text-white mt-4 font-light px-8 pb-2'>
                Copyright © 2024 - All Right Reserved - Website of Government of National Capital Territory of Delhi, India.
            </div>
        </div>
    )
}

export default Footer1