import React from 'react'
import './write.css'

export default function Write() {
  return (
    <div className='write'>

      <img 
        src='https://images.unsplash.com/photo-1465778832502-ccafa34f4645?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='img'
        className='writeImg'
      />
      
      <form className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fas fa-plus'></i>
          </label>
          <input type='file' id='fileInput' style={{display: 'none'}}/>
          <input type='text' placeholder='Title' className='writeInput' autoFocus={true}/>
        </div>
        <div className='writeFormGroup'>
          <textarea 
            placeholder='Tell your Story...'
            type="text"
            className='writeInput writeText'
          />
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}
