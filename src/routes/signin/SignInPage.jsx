import React from 'react'
import {SignIn} from '@clerk/clerk-react'
import './signInPage.css'

const SignInPage = () => {
  return (
      <div className="signin">
          <SignIn
              appearance={{ baseTheme: "light" }}
              path="/sign-in"
              signInUrl="/sign-up"
          />
      </div>
  );
}

export default SignInPage