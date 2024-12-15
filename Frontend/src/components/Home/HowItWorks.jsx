import React from 'react'
import { FaUserPlus } from 'react-icons/fa'
import { MdFindInPage } from 'react-icons/md'
import {IoMdSend} from 'react-icons/io'

const HowltWorks = () => {
  return (
    <div className='howitworks'>
      <div className="container">
        <h3>How jobs Works</h3>
        <div className="banner">
          <div className="card">
          <FaUserPlus /> 
          <p>Create Account</p> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque vero laboriosam dolores possimus sint, minima incidunt veritatis dicta ipsam, fugit cumque quos est nemo officia sapiente eius quod dolorem!</p>
          </div>
          <div className="card">
          <MdFindInPage /> 
          <p>Find a job/post A job</p> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque vero laboriosam dolores possimus sint, minima incidunt veritatis dicta ipsam, fugit cumque quos est nemo officia sapiente eius quod dolorem!</p>
          </div>
          <div className="card">
          <IoMdSend /> 
          <p>Create Account</p> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque vero laboriosam dolores possimus sint, minima incidunt veritatis dicta ipsam, fugit cumque quos est nemo officia sapiente eius quod dolorem!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowltWorks