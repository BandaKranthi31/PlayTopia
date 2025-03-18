import React from 'react'
import logo from '../assets/logo.png'
import '../Styles/style.css'

const Home = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center">
    <img className='w-1/2 max-w-[500px] h-auto rounded-full'
     src= {logo} alt="Playtopia" />
      <h2 className="pt-8 text-center text-3xl">
          The Gaming Experience Made with <span> <br /></span> React + Tailwind
     </h2>
    </div>
    </>
  )
}

export default Home