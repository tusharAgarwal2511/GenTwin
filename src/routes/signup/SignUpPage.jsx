import React from 'react'
import { SignUp } from '@clerk/clerk-react'
import './signUpPage.css'

export const SignUpPage = () => {
  return (
    <div className='signup'>
      <SignUp path='/sign-up' signInUrl='sign-in'/>
    </div>
  )
}
