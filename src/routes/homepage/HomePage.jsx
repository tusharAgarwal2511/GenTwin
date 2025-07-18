import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='homapage'>
      <Link to = '/dashboard'>Dashboard</Link>
    </div>
  )
}

export default Homepage