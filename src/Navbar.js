import React from 'react';
import './App.css';

const Navbar =({handleSubmit, value, onChange})=>{
    return (
    <div className='row'>
     <div className='col-md-6'>
          <h1 className='title'>Get weather app</h1>
     </div>

        <div className='col-md-6'>
           <form className='region' onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter a place...'
            value={value} onChange={onChange} className='regioninput'/>
            <button>Get weather</button>
           </form>
       </div>
    </div>
 )       
          
}
export default Navbar;