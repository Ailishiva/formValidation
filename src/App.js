import React, { useState } from 'react';
import './App.css';

export default function App(){
  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[confirmPassword, setConfirmPassword] = useState('');
  const[error, setError] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    if(firstName.length === 0 || lastName.length === 0 
      || email.length === 0 ||   password.length === 0 || confirmPassword !== password){
      setError(!error);
    }
  }
  return(
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <h1>Form Validation</h1>
        <div className='container'>
          <input 
          value={firstName}
          type='text'
          placeholder='Enter FirstName'
          onChange={(e) => setFirstName(e.target.value)}
          autoFocus
          />
        </div>
        {(error && firstName.length <= 3) ? <label>FirstName should be morethan  3 characters</label> : ''}
      <div className='conatiner'>
        <input
        value={lastName}
        type='text'
        placeholder='Enter LastName'
        onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      {error && lastName.length <= 3 ? <label>LastName should be morethan  3 characters</label> : ''}
      <div className='container'>
        <input
          value={email}
          type='text'
          placeholder='Enter Email'
          onChange={(e) => setEmail(e.target.value)}    
        />
      </div >
      {(error &&  !email.includes('@')) || (error &&  email.length <= 3) ? 
      <label>Please Enter valid Email and include '@'</label> : ''}
      <div className='container'>
        <input
          value={password}
          type='password'
          placeholder='Enter Password'
          onChange={(e) => setPassword(e.target.value)}    
        />
      </div>
      {(error && password.length <= 0) ||  (error && password.length <= 3) ? 
      <label>Password should be morethan  3 characteristics</label> : ''}
      <div className='container'>
        <input
            value={confirmPassword}
            type='password'
            placeholder='Confirm Password'
            onChange={(e) => setConfirmPassword(e.target.value)}    
          />
      </div>
      {error && confirmPassword !== password ?  
      <label>Please Confirm Password</label> : ''}
      <br/>
      <button type='submit' className='btn' >Submit</button>
    </form>
  </div>
  )
}






