import React from 'react'
import { experiences } from '../../constant'

const Experience = () => {
  return (
    <section
    id='experience'
    className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans skills-gradient clip-path-custom-2'>

      {/* Section Title */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text text-white'>EXPERIENCE</h2>
        <div className='h-1 w-32 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>A Collection of my experience and the roles i have taken in various organisation</p>
      </div>

      {/* Experience time line */}

      <div className='relative'>
        {/* Vertical Line */}
        <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 h-full bg-white'></div>

        {/* Experience Entries */}
        {
          experiences.map((experience, index) => (
            <div key={experience.id} className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}>
              {/* Timeline Circle */}

              <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-1/2 h-1/2 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10'>
                <img 
                  src={experience.img} 
                  alt={experience.company} 
                  className='w-full h-full object-cover rounded-full'
                />
              </div>

              {/* Content Section */}
              <div  className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}>

                {/* Flex container for image and text */}
                  <div className='flex items-center space-x-6'>
                    {/* Company logo  */}
                    <div className='w-16 h-16 bg-white rounded-md overflow-hidden'>
                      <img className='w-full h-full object-cover' src={experience.img} alt={experience.company} />
                    </div>

                    {/* Role, company name and date */}
                    <div className='flex flex-col justify-between'>
                      <div>
                        <h3 className='text-xl sm:text-2xl font-semibold text-white'>{experience.role}</h3>
                        <h4 className='text-md sm:text-sm text-gray-300'>{experience.company}</h4>
                      </div>

                        {/* Date */}
                        <p className='text-sm text-gray-500 mt-2'>{experience.date}</p>
                    </div>
                  </div>
                  <p className='mt-4 text-gray-400'>{experience.desc}</p>
                  <div className='mt-4'>
                    <h5 className='font-medium text-white'>Skills : </h5>
                    <ul className='flex flex-wrap mt-2'>
                      {
                        experience.skills.map((skill, index) => (
                          <li key={index} className='bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400'>
                            {skill}
                          </li>
                        ))
                      }
                    </ul>
                  </div>
              </div>
            </div>

          ))
        }

      </div>


    </section>
  )
}

export default Experience