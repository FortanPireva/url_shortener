import React from 'react'

function Navbar() : JSX.Element {
  return (
    <div className='nav'>
        <ul>
            <li>Logo</li>
            <li>Contact</li>
            <li>Pricing</li>
            <li>Github</li>
        </ul>
        {/* the login/signup button */}
        <ul>
            <button>Login</button>
            <button>Register</button>
        </ul>
    </div>
  )
}

export default Navbar