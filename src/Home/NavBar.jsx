import React from 'react'
import '../tailwind.css'
import { IoHomeSharp } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { ImAccessibility } from "react-icons/im";
import { FaDiagramProject } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const NavBar = () => {

  const navBarIcon = ({ icon, link }) => {
    return (
      <Link to={link} className="navIcons" style={{ marginTop: '31px' }}>
        {icon}
      </Link>
    )
  }

  return (
    <div className='shadow-xl fixed left-0 top-0 h-screen w-18 m-0 space-y-5 flex flex-col bg-blue-500 text-green-500 ml-auto mr-auto items-center'>
      {navBarIcon({ icon: <IoHomeSharp size="31" />, link: '/' })}
      {navBarIcon({ icon: <IoGameControllerOutline size={31} />, link: '/game' })}
      {navBarIcon({ icon: <ImAccessibility size={31} />, link: '/about' })}
      {navBarIcon({ icon: <FaDiagramProject size={31} />, link: '/project' })}
      {navBarIcon({ icon: <CgProfile size={31} />, link: '/home' })}
    </div>
  )
}

export default NavBar
