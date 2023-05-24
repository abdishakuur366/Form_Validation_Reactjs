import React, { useState } from 'react';
import './Form.css'

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [imageInput, setImageInput] = useState('');
  const [error, setError] = useState('');
  const [formDataList, setFormDataList] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
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
    if (!name || !age || !address || !image) {
      setError('Please fill in all fields and upload an image.');
      return;
    }

    const formData = {
      name,
      age,
      address,
      image: imagePreview
    };

    setFormDataList([...formDataList, formData]);

    // Clear form data for next user registration
    setName('');
    setAge('');
    setAddress('');
    setImage(null);
    setImagePreview('');
    setImageInput('');
    setError('');
  };

  return (
    <div className='wrapper'>
      
      <form onSubmit={handleSubmit}>
        <label
        style={{
            fontSize:'30px',
            fontWeight:'bold',
            marginRight:'10px'
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
          type="number" value={age} onChange={handleAgeChange} placeholder='Enter your Age'/>
        </label>
        <br />
        <label
        style={{
            
            fontSize:'30px',
            fontWeight:'bold',
            marginRight:'10px'
        }}
        >
          Address:
          <input 
          style={{
            marginLeft:'16px',
            marginRight:'37px',
            marginTop:'20px',
            color: '#8707ff',
            border: '2px solid #8707ff',
            borderradius: '10px',
            padding: '10px 25px',
            background: 'transparent',
            maxwidth: '190px'
         }}
          type="text" value={address} onChange={handleAddressChange} placeholder='Enter Your Address' />
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
            maxwidth: '300px',
            margin: '0 auto',
            padding: '20px',
            backgroundcolor:'#13121269',
            borderradius: '5px'
          }}
           type="file" onChange={handleImageChange} value={imageInput} />
        </label>
        <br />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <br />
        <button 
        type="submit">Register</button>
      </form>

      <h2 className='r'>Registered Users:</h2>
      {formDataList.length > 0 ? (
        <ul style={{listStyleType:'none',        
        }}>
          {formDataList.map((formData, index) => (
            <li  key={index}>
              <img
              src={formData.image} alt={formData.name} style={{width: "100px", height: "100px", borderRadius:'50%', border:'5px solid skyblue' }} />
              <p>Name: {formData.name}</p>
              <p>Age:{formData.age}</p>
              <p>Address: {formData.address}</p>
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