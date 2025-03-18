import React from 'react'
import { Link } from 'react-router-dom'

const Erorr = () => {
  return (
    <>
    <h1 className='text-center'>
        ERROR 404
    </h1>
    <Link to ={"/"}>
    <button> click here</button>
    </Link>
    </>
  )
}

export default Erorr