import React from 'react';
import WQI from '../images/WQI.png'

const Service = () => {
  return (
    <div className="flex flex-col bg-gray-100 px-2 py-4">
      <div className="text-center text-navyBlue text-2xl">Our Services</div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-top rounded-xl"
                  src="https://www.designboom.com/wp-content/dbsub/401565/2018-07-09/img_1_1531116282_3ca5a76708fd96b7e3a4615f04ccccbd.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-white opacity-80 md:opacity-0 md:hover:opacity-100 rounded-xl">
                  <h2 className="tracking-widest text-sm title-font font-extrabold text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Service */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-top rounded-xl"
                  src="https://www.shutterstock.com/image-photo/new-delhi-11-sep-2022-600nw-2201734957.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-white opacity-80 md:opacity-0 md:hover:opacity-100 rounded-xl">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            {/* Third Service */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="WQI"
                  className="absolute inset-0 w-full h-full object-cover object-top rounded-xl"
                  src={WQI}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-white opacity-80 md:opacity-0 md:hover:opacity-100 rounded-xl">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service
