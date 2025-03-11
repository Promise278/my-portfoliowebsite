import React from 'react'


const App = () => {
  return (
    <div className='bg-gradient-to-r from-gray-200 to-gray-800 overflow-hidden'>
      <nav className='fixed inset-x-0 top-0 left-0 z-30 flex justify-between pt-6 pl-12 pr-12 h-20 backdrop-blur-sm'>
        <div>
          <h3 className='md:text-3xl md:pr-0 pr-6 text-white text-1xl'>Promise Obi</h3>
        </div>
        <div className='gap-8 flex'>
          <ul className='gap-10 md:flex hidden text-white'>
            <li><a className='cursor-pointer hover:uppercase' href="#home">Home</a></li>
            <li><a className='cursor-pointer hover:uppercase' href="#projects">Projects</a></li>
            <li><a className='cursor-pointer hover:uppercase' href="#services">Skills</a></li>
            <li><a className='cursor-pointer hover:uppercase' href="#about">About</a></li>
          </ul>
          <button className='bg-[#0f172a] text-white w-28 h-8 p-1 rounded-md shadow-md md:hover:bg-blue-500 cursor-pointer'><a href="#contact">Get in Touch</a></button>
        </div>
        <ion-icon id="menu-open" className='text-white text-4xl md:hidden' name="reorder-two-outline"></ion-icon>
      </nav>
      <div id='home' data-aos="fade-up" className='pt-36 flex justify-around md:flex-row flex-col'>
        <div className='md:ml-0 ml-4'>
          <h3 className='text-6xl text-slate-900 font-bold pt-8'>Hi, I'm Promise Obi</h3>
          <p data-aos="flip-up" className='pt-8 text-1xl text-gray-100'>Frontend Developer specializing in React, Javascript, Tailwindcss <br /> and mordern UI frameworks, i also create modern & responsive websites.</p>
          <div data-aos="zoom-in-right" className='flex gap-2 mt-8 mb-8'>
            <button className='bg-[#0f172a] w-28 h-12 rounded-md gap-2 pl-3.5 pt-2.5 flex text-white md:hover:bg-blue-500 cursor-pointer'><a href="#contact">Contact Me</a></button>
            <button className='bg-white text-black w-48 h-12 rounded-md gap-2 pl-2 pt-2.5 flex md:hover:bg-purple-500 cursor-pointer'>Download Resume
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
            </button>
          </div>
          <div data-aos="zoom-in-right" className='flex gap-6 mb-8'>
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
          <img class="w-72 h-72 rounded-full border-4 border-gray-500 shadow-lg" src="/public/img/profile.png" alt="Profile Picture" />
        </div>
      </div>
      <div className='mt-32 flex items-center justify-center pb-4 animate-bounce cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
      </div>

      <div id='about' className='mt-24 md:flex-row flex-col'>
        <h3 className="text-5xl text-center font-bold text-white">About Me</h3>
        <div data-aos="zoom-out-down" className='flex gap-8 rounded-md md:w-[80%] w-[90%] md:h-76 md:ml-32 ml-4 mt-8 bg-black md:flex-row flex-col'>
          <div>
            <img data-aos="zoom-in-right" className='md:w-60 w-72 rounded-md md:h-72 h-72 ml-8 mt-6 mb-6' src="/public/img/IMG_7263.JPG" alt="Profile image" />
          </div>
          <div>
            <p data-aos="zoom-in-up" className='text-white text-1xl md:pt-8 pt-2 pb-4 md:pl-0 pl-3'>Hi, I'm Promise, a web Developer passionate about crafting clean, functional and responsive websites. <br />  I specialize in creating  responsive and user-friendly designs with a strong focus on performance, accessibility, <br /> and seamless interaction. My approach blends simplicity with modern aesthetics, ensuring every project is <br /> intuitive and efficient. I enjoy turning ideas into reality, whether designing from scratch or improving existing <br /> layouts, I always aim for high-quality results. Staying ahead of trends and continuously learning new <br /> techniques helps me push creative boundaries and refine my skills.</p>
          </div>
        </div>
      </div>

      <div id='projects' className='mt-24'>
        <h2 className='font-bold text-4xl text-center'>My Projects</h2>
        <p className="text-center pt-4 text-white">A showcase of my recent works and personal projects.</p>
      </div>
      <div id='services' data-aos="zoom-in-down" className='flex justify-between gap-8 border-2 rounded-md md:w-[80%] w-[90%] md:h-76 md:ml-32 ml-4 mt-12 bg-black text-white md:flex-row flex-col'>
        <div>
          <h3 data-aos="zoom-in-right" className='md:text-5xl text-3xl text-center md:pl-24 pl-2 pt-12'><i>Skills & <br /> Ability</i></h3>
        </div>
        <div data-aos="zoom-in-left" className='flex gap-6 pt-8 pb-8 mr-12 md:flex-row flex-col'>
          <div className='flex gap-6'>
            <div className='bg-red-500 rounded-md w-32 h-32 md:ml-12 ml-6'>
              <svg className='bg-red-500 rounded-md w-32 h-32 pt-4' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
            </div>
            <div className='bg-blue-500 rounded-md w-32 h-32'>
              <svg className='bg-blue-500 rounded-md w-32 h-28 pt-6' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M376.3 32L0 32 0 408.3c0 19 7.6 37.2 21 50.7s31.7 21 50.7 21l304.6 0c19 0 37.2-7.6 50.7-21s21-31.7 21-50.7l0-304.6c0-19-7.6-37.2-21-50.7s-31.7-21-50.7-21zM332.4 431.4c-7.7-8.5-11.7-20.7-12-36.6l31.3 0c.2 14.1 5.1 21.1 14.8 21.1c4.9 0 8.4-1.6 10.5-4.7c2-3.1 3-8 3-14.8c0-5.4-1.3-9.9-4-13.4c-3.5-4.2-8.1-7.5-13.2-9.5L351.2 368c-10.3-4.9-17.8-10.8-22.5-17.6c-4.5-6.8-6.7-16.3-6.7-28.4c0-13.6 4-24.6 11.8-33.1c8.1-8.5 19.1-12.7 33.2-12.7c13.6 0 24.1 4.2 31.5 12.5c7.5 8.4 11.5 20.3 11.8 35.9l-30.1 0c.2-5.1-.9-10.2-3-14.8c-1.7-3.4-5-5.1-10-5.1c-8.8 0-13.2 5.2-13.2 15.7c0 5.3 1.1 9.4 3.2 12.6c3.1 3.5 7 6.2 11.4 7.8l11.1 4.9c11.5 5.3 19.7 11.7 24.8 19.4c5.1 7.7 7.6 18 7.6 31c0 15.5-4 27.4-12.3 35.7c-8.2 8.3-19.5 12.5-34.1 12.5s-25.6-4.2-33.4-12.7zm-101 0c-7.7-8.5-11.7-20.7-12-36.6l31.3 0c.2 14.1 5.1 21.1 14.8 21.1c4.9 0 8.4-1.6 10.4-4.7c2-3.1 3-8 3-14.8c0-5.4-1.3-9.9-3.9-13.4c-3.5-4.2-8.1-7.5-13.2-9.5L250.2 368c-10.3-4.9-17.8-10.8-22.5-17.6c-4.5-6.8-6.7-16.3-6.7-28.4c0-13.6 4-24.6 11.8-33.1c8.1-8.5 19.1-12.7 33.2-12.7c13.6 0 24.1 4.2 31.4 12.5c7.6 8.4 11.5 20.3 11.9 35.9l-30.1 0c.2-5.1-.9-10.2-3-14.8c-1.7-3.4-5-5.1-10-5.1c-8.8 0-13.2 5.2-13.2 15.7c0 5.3 1.1 9.4 3.2 12.6c3.1 3.5 7 6.2 11.4 7.8l11.1 4.9c11.5 5.3 19.7 11.7 24.8 19.4c5.1 7.7 7.6 18 7.6 31c0 15.5-4.1 27.4-12.3 35.7s-19.5 12.5-34.1 12.5s-25.6-4.2-33.4-12.7zm-105.6 1.1c-8.4-7.7-12.5-19.2-12.5-34.5l0-75.4c0-15.2 4.4-26.7 13.2-34.6c8.9-7.8 20.7-11.8 35.2-11.8c14.1 0 25.2 4 33.4 12c8.3 8 12.5 20 12.5 35.9l0 6-33.1 0 0-5.8c0-6.1-1.3-10.7-4-13.6c-1.1-1.5-2.6-2.7-4.3-3.5s-3.5-1.2-5.4-1.1c-5.4 0-9.2 1.8-11.4 5.6c-2.3 5.2-3.3 10.8-3 16.4l0 65.5c0 13.7 4.8 20.6 14.4 20.8c4.5 0 7.9-1.6 10.2-4.8c2.5-4.1 3.7-8.8 3.5-13.6l0-4.9 33.1 0 0 5.1c0 10.6-2.1 19.5-6.2 26.6c-4 6.9-9.9 12.5-17.1 16c-7.7 3.7-16.1 5.5-24.6 5.3c-14.2 0-25.5-3.9-33.8-11.6z"/></svg>
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='bg-yellow-500 rounded-md w-32 h-32 md:ml-0 ml-6 flex-col-2'>
              <svg className='bg-yellow-500 rounded-md w-32 h-28 pt-8' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM180.9 444.9c-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6c13.8 0 22.6-5.4 22.6-26.5V237.7h42.1V381.4c0 43.6-25.6 63.5-62.9 63.5zm85.8-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6c17.4 0 28.6-8.7 28.6-20.8c0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5c0-31.6 24.1-55.6 61.6-55.6c26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18c-12.3 0-20.1 7.8-20.1 18c0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2c0 37.8-29.8 58.6-69.7 58.6c-39.1 0-64.4-18.6-76.7-43z"/></svg>
            </div>
            <div className='bg-blue-400 rounded-md w-32 h-32'>
              <svg className='bg-blue-400 rounded-md w-32 h-28 pt-8' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div id='contact' data-aos="zoom-out-up" className='md:w-[80%] w-[90%] md:h-76 bg-black mt-32 flex gap-6 rounded-md md:ml-32 ml-4 md:flex-row flex-col'>
        <div>
          <h3 className='font-bold md:text-5xl text-3xl md:pl-24 pl-8 text-white md:pt-44 pt-12'>Let's Connect and Collaborate</h3>
        </div>
        <div className='md:mt-12 mt-4 md:pl-0 pl-6'>
          <input className='bg-black border-2 border-gray-800 rounded-md md:w-96 w-60 text-white h-10 pl-2' required type="text" placeholder='Name' /> <br />
          <input className='bg-black border-2 border-gray-800 rounded-md md:w-96 w-60 text-white h-10 pl-2 mt-4' required type="email" placeholder='Email' /> <br />
          <input className='bg-black border-2 border-gray-800 rounded-md md:w-96 w-60 text-white h-10 pl-2 mt-4' required type="Subject" placeholder='Subject' /> <br />
          <textarea className='bg-black border-2 border-gray-800 rounded-md md:w-96 w-60 text-white h-32 mt-4 pl-2 pt-2' required name="" placeholder="Write your message"></textarea>
          <button className='bg-white text-black hover:bg-gray-800 text-2xl hover:text-white h-12 pt-1 md:w-96 w-60 rounded-md md:mt-6 mt-4 md:mb-4 mb-4' type='submit'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default App
