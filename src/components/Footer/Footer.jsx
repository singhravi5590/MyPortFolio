import React from 'react'

const Footer = () => {

  const handleScroll = (sectionid) => {
    const section = document.getElementById(sectionid);
    if(section){
      section.scrollIntoView({behavior : "smooth"})
    }
  }

  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <div className='container mx-auto text-center'>
        <h2 className='text-xl font-semibold text-purple-500'>
          Ravi Singh
        </h2>

        {/* Navigation Links */}
        <nav className='flex flex-wrap justify-center gap-10 sm:space-x-6 mt-4'>
          {[
            { name : "About", id : "about"},
            { name : "Skills", id : "skills"},
            { name : "Experience", id : "experience"},
            { name : "Projects", id : "projects"},
            { name : "Education", id : "education"}
          ].map((item, index) => (
            <button key={index} onClick={() => handleScroll(item.id)} className='hover:text-purple-500 text-sm sm:text-base my-1'>
              {item.name}
            </button>
          ))
          }
        </nav>
      </div>
    </footer>
  )
}

export default Footer