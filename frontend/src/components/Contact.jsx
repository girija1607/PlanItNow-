import React from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

const Contact = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [subject,setSubject] = useState('');
  const [message,setMessage] = useState('');
  const handleSendMessage = async(e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/api/v1/message/send',{name,email,subject,message},
      {withCredentials:true,headers:{'Content-Type':'application/json'}}
    )
    .then((res)=>{
      toast.success(res.data.message);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    })
    .catch((err)=>{
      toast.error(err.response.data.message);
    })
  };
  return (
    <>
    <div className="contact container">
      <div className="banner">
        <div className="item">
        <h4>Our Address</h4>
        <p>Mansarowar,Jaipur</p>
        </div>
        
        <div className="item">
        <h4>Call us</h4>
        <p>call us:</p>
        </div>
        
        <div className="item">
          <h4>Mail us</h4>
          <p>girijasinghal1607@gmail.com</p>
        </div>
      </div>
      <div className="banner">
        
        <div className="item">
          <form onSubmit={handleSendMessage}>
            <h2>CONTACT</h2>
            <div>
              <input type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
              <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              
            </div>
            <input type='text' placeholder='Subject' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
            <textarea
            rows ={10} type='text' placeholder='Message' value={message} onChange={(e)=>setMessage(e.target.value)}/>
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
