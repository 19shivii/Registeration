import React, { useState } from 'react';
import './Register.css'
function Register() {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [admissionNo, setAdmissionNo] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const[resume,setResume]= useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nYear: ${year}\nDomain: ${option1}\nAdmission No: ${admissionNo}\nPhone: ${phone}\nEmail: ${email}\nResume:${file}`);
    // add code to submit form data to backend here
  }

  return (
    <div className="join">
    <div className="left-j">
        <div className="content">
        <span>Our dedicated team is here to assist you every step of the way.</span>
        </div>


     </div>
     <div className="right-j">
    <form onSubmit={handleSubmit}>
    <h2>Register</h2>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)}  required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" value={email} id="email" name="email" required />
          
          <label htmlFor="year">Year:</label>
          <select id="year" value={year} name="year" type="checkbox" checked={option1} onChange={(event) => setOption1(event.target.checked)} required>
            <option value="">-- Select Year --</option>
            <option value="first">First Year</option>
            <option value="second">Second Year</option>
          </select>
          
          <label htmlFor="options">Domain:</label>
          <select id="options" name="options" value={option1}  type="checkbox" checked={option1} onChange={(event) => setOption1(event.target.checked)} required>
            <option value="">-- Select Option --</option>
            <option value="option1">Technical</option>
            <option value="option2">Editorial</option>
            <option value="option2">Creative</option>
            <option value="option2">Management</option>
          </select>
          
          <label htmlFor="admissionNo">Admission No:</label>
          <input type="text" id="admissionNo" name="admissionNo"  value={admissionNo} onChange={(event) => setAdmissionNo(event.target.value)} required />
          
          <label htmlFor="phoneNo">Phone No:</label>
          <input type="text" id="phoneNo" name="phoneNo" value={phone} onChange={(event) => setPhone(event.target.value)} required />

         <label for="myfile">Resume:</label>
  <input type="file" id="myfile" name="myfile" value={file} onChange={(event) => setResume(event.target.value)} required   multiple><br><br>
          
          <button type="submit">Register</button>
        </form>
    </div>
    </div>
  );
}

export default Register;
