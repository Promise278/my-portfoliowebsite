import React from 'react'

const App = () => {
  return (
    <div className='bg-gradient-to-r from-gray-200 to-gray-800'>
      <nav className='fixed inset-x-0 top-0 left-0 flex justify-between ml-12 mr-12 pt-4'>
        <div>
          <h3 className='text-2xl'>Promise Obi</h3>
        </div>
        <div className='gap-8 flex'>
          <ul className='flex gap-10 md:flex hidden'>
            <li><a className='cursor-pointer hover:uppercase' href="#projects">Projects</a></li>
            <li><a className='cursor-pointer hover:uppercase' href="#">Skills</a></li>
            <li><a className='cursor-pointer hover:uppercase' href="#">About</a></li>
            <li><a className='cursor-pointer hover:uppercase' href="#">Contact</a></li>
          </ul>
          <button className='bg-[#0f172a] text-white w-28 h-8 p-1 rounded-md shadow-md hover:bg-blue-500 cursor-pointer'>Get in Touch</button>
        </div>
        <ion-icon className='text-black text-4xl md:hidden' name="reorder-two-outline"></ion-icon>
      </nav>
      <div data-aos="fade-up" className='mt-24 flex justify-around md:flex-row flex-col'>
        <div className='md:ml-0 ml-4'>
          <h3 className='text-5xl text-slate-900 font-bold pt-8'>Hi, I'm Promise Obi</h3>
          <p data-aos="flip-up" className='pt-8 text-1xl text-gray-100'>Frontend Developer specializing in React, Javascript, Tailwindcss <br /> and mordern UI frameworks, i also create modern & responsive websites.</p>
          <div data-aos="zoom-in-right" className='flex gap-8 mt-8 mb-8'>
            <button className='bg-[#0f172a] w-44 h-12 rounded-md gap-2 pl-2.5  pt-2.5 flex text-white hover:bg-blue-500 cursor-pointer'>View My Projects
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
            </button>
            <button className='bg-white text-black w-48 h-12 rounded-md gap-2 pl-2.5 pt-2.5 flex hover:bg-purple-500 cursor-pointer'>Download Resume
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
            </button>
          </div>
          <div data-aos="zoom-in-left" className='flex gap-6 mb-8'>
            <a href="https://github.com/Promise278">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-black hover:text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M12 .5C5.59.5.5 5.59.5 12c0 5.08 3.29 9.38 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.69-3.87-1.44-3.87-1.44-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.33.96.1-.73.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.67 0-1.25.44-2.27 1.18-3.07-.12-.29-.52-1.46.12-3.04 0 0 .98-.31 3.22 1.17.93-.26 1.92-.39 2.91-.39s1.98.13 2.91.39c2.24-1.48 3.22-1.17 3.22-1.17.64 1.58.24 2.75.12 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.7 5.38-5.27 5.66.42.36.79 1.08.79 2.17v3.22c0 .31.21.68.8.56A10.514 10.514 0 0023.5 12C23.5 5.59 18.41.5 12 .5z" clip-rule="evenodd"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/promise-obi-9a6878328/">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-black hover:text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 2.12 6.1 1 7.48 1s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5zM2 7h5v14H2V7zm7 0h4.77v2.09h.06c.66-1.25 2.27-2.57 4.67-2.57 5 0 5.92 3.29 5.92 7.57V21h-5V14.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.69-2.5 3.44V21H9V7z"/>
              </svg>
            </a>
            <a href="https://x.com/promise_pi10664">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-black hover:text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.15 4.15 0 001.82-2.27 8.36 8.36 0 01-2.64 1 4.14 4.14 0 00-7.05 3.77 11.75 11.75 0 01-8.53-4.32A4.14 4.14 0 004.08 9a4.13 4.13 0 01-1.87-.52v.05a4.14 4.14 0 003.32 4.06c-.34.09-.7.14-1.07.14-.26 0-.52-.02-.77-.07a4.14 4.14 0 003.86 2.87A8.34 8.34 0 012 18.5a11.74 11.74 0 006.29 1.85c7.54 0 11.67-6.25 11.67-11.67 0-.18-.01-.37-.02-.55A8.35 8.35 0 0022.46 6z"/>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex items-center justify-center p-4">
          <img class="w-60 h-60 rounded-full border-4 border-gray-500 shadow-lg" src="/src/assets/bl-_11_.png" alt="Profile Picture" />
        </div>
      </div>
      <div className='mt-32 flex items-center justify-center pb-4 animate-bounce cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
      </div>

      <div id='projects' className='mt-24'>
        <h2 className='font-bold text-4xl text-center'>My Projects</h2>
        <p className="text-center pt-4 text-white">A showcase of my recent works and personal projects.</p>
      </div>
    </div>
  )
}

export default App
