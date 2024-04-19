import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function Login() {
  const [rememberLogin, setRememberLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {  logIn } = UserAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      await logIn(email, password)
      navigate("/")

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className='w-full h-screen'>
      <img className='hidden absolute sm:block w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
      <div className='bg-black/70 fixed top-0 left-0 w-full h-screen'></div>

      <div className='w-full fixed px-4 py-24 z-20'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='font-nsans-medium text-3xl'>Login</h1>
            <form onSubmit={(e) => handleSubmit(e)} className='w-full flex-col py-4'>
              <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" className='w-full p-3 my-2 bg-gray-700 rounded' placeholder='email' autoComplete='email' />
              <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-full p-3 my-2 bg-gray-700 rounded' placeholder='password' autoComplete='current-password' />
              <button className='bg-red-600 w-full my-4 p-2 rounded-sm font-nsans-light'>Sign In</button>
              <div className='flex justify-between   items-center text-gray-600 '>
                <p>
                  <input type="checkbox" onClick={() => setRememberLogin(!rememberLogin)} className='mr-1' /> Remember Me
                </p>
                <p>
                  Need help?
                </p>
              </div>
              <p className='my-4'>
                <span className='text-gray-600 mr-2'>dont have a Netflix account ?</span>
                <Link to={'/signup'}>Sign Up </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
