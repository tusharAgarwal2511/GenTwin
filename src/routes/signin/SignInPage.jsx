import React from 'react'
import {SignIn} from '@clerk/clerk-react'
import './signInPage.css'

const SignInPage = () => {
  return (
    <div className='signin'>
      <SignIn path='/sign-in'/>
    </div>
  )
}

export default SignInPage