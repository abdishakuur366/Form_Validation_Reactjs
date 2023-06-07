import React, { useState } from 'react';
import './Form.css';
import { Router, BrowserRouter, Route, Link } from 'react-router-dom';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [imageInput, setImageInput] = useState('');
  const [error, setError] = useState('');
  const [formDataList, setFormDataList] = useState([]);

  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };

  const handleNameChange = (event) => {
    const value = event.target.value;
    if (!/^[a-zA-Z ]*$/.test(value)) {
      setError('Enter Text Only.');
    } else {
      setName(value);
      setError('');
    }
  };

  const handleAgeChange = (event) => {
    // let num=[0,1,2,3,4,5,6,7,8,9]
    {
      setAge(event.target.value);
    
    }
    
  };

  // const handleAgeChange = (event) => {
  //   const value = Number(event.target.value);
  //   if ((value) || value > 18) {
  //     setError('Age should be a number greater than or equal to 18.');
  //   } else {
  //     setAge(value);
  //     setError('');
  //   }
  // };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage(file);
      setImagePreview(reader.result);
      setError('');
    };

    reader.onerror = () => {
      setError('Error uploading image');
    };
    setImageInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!name || !age || !email || !image) {
      setError('Please fill in all fields and upload an image.');
      
      return;
    }

    const formData = {
      name,
      age,
      email,
      image: imagePreview
    };

    setFormDataList([...formDataList, formData]);

    // Clear form data for next user registration
    setName('');
    setAge('');
    setEmail('');
    setImage(null);
    setImagePreview('');
    setImageInput('');
    setError('');
  };

  function clear(){
    setName('');
    setAge('');
    setEmail('');
    setImage(null);
    setImagePreview('');
    setImageInput('');
    setError('');
  }

  return (
    <div className='wrapper' style={{
      width:'50%',
      height:'fit',
      marginLeft:'400px',
      backgroundColor:'#E6EE9C',
      boxShadow:'0px 0px 5px 0px red',
      borderRadius:'40px',
      padding:'5px'

      
      }}>
        {/* <nav>
          <a href="/"></a>
        </nav> */}

      
      <form onSubmit={handleSubmit} style={{
        backgroundColor:'whiteSmoke',
        padding:'10px',
        borderRadius:'40px',
        boxShadow:'0px 0px 5px 0px',
        width:'96%',
        height:'350px'

    
    }}>
        <label
        style={{
            fontSize:'30px',
            fontWeight:'bold',
            marginRight:'10px',
            
        }}
        >
          Name:
          <input 
          style={{
            marginLeft:'22px',
            marginRight:'18px',
            marginTop:'10px',
            color: '#8707ff',
            border: '2px solid #8707ff',
            borderradius: '10px',
            padding: '10px 25px',
            background: 'transparent',
            maxwidth: '190px'
         }}
          type="text" value={name} onChange={handleNameChange} placeholder='Enter Your Name' />
        </label>
        <br />
        <label
        style={{
            fontSize:'30px',
            fontWeight:'bold',
            marginRight:'10px'
        }}
        >
          Age:
          <input
          style={{
            marginLeft:'33px',
            marginTop:'16px',
            color: '#8707ff',
            border: '2px solid #8707ff',
            borderradius: '10px',
            padding: '10px 25px',
            background: 'transparent',
            maxwidth: '190px'
         }}
          type='tel' value={age} onChange={handleAgeChange} placeholder='Enter your Age'/>
        </label>
        <br />
        <label
        style={{
            
            fontSize:'30px',
            fontWeight:'bold',
            marginRight:'10px'
        }}
        >
          Email:  
          <input 
          style={{
            marginLeft:'16px',
            marginRight:'5px',
            marginTop:'20px',
            color: '#8707ff',
            border: '2px solid #8707ff',
            borderradius: '10px',
            padding: '10px 25px',
            background: 'transparent',
            maxwidth: '190px',
            
         }}
          type='email' value={email} onChange={handleEmailChange} placeholder='Enter Your Address' />
        </label>
        <br />
        <label
        style={{
            
            fontSize:'30px',
            fontWeight:'bold',
            marginRight:'70px',
            marginTop:'60px'
        }}
        >
          Upload Image:
          <input 
          style={{
            width: '200px',
            margin: '0 auto',
            marginLeft:'70px',
            padding: '10px',
            color:'white',
            fontWeight:'bold',
            border:'1px dashed white',
            backgroundColor:'blue',
            borderRadius:'30px'
            
          }}
           type="file" onChange={handleImageChange} value={imageInput} />
        </label>
        <br />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <br />
        <button 
        type="submit">Register</button>
        <button onClick={()=>setFormDataList('')}>Clear</button>
      </form>

      {/* <h2 className='r'>Registered Users:</h2> */}
      <hr />
      {formDataList.length > 0 ? (
        <ul  style={{listStyleType:'none',        
        }}>
          {formDataList.map((formData, index) => (
            <li  key={index}  style={{
          
              border:'1px solid red',
              backgroundColor:'transparent',
              padding:'2px',
              borderRadius:'10px',
              boxShadow:'0px 0px 5px 0px',
              
            }}>
              <img
              src={formData.image} alt={formData.name} style={{width: "100px", height: "100px", borderRadius:'50%', border:'2px dashed red' }} />
              <hr /><h5>Name: {formData.name}</h5>
              <h5>Age:{formData.age}</h5>
              <h5>Email: {formData.email}</h5>
            </li>
          ))}
          
        </ul>
      ) : (
        <p className='no'>No users registered yet.</p>
      )}
    </div>
  );
}

export default Form;