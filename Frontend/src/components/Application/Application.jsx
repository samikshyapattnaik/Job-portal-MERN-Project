import React, { useContext, useState } from 'react'
import { Context } from '../../main';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';


const Application = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [coverLetter,setcoverLetter] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  const [resume,setResume] = useState(null);

  const {isAuthorized , user} = useContext(Context)

  const navigateTo = useNavigate();

  //function to handel file input changes

  const handelFileChange = (e)=>{
    const resume = e.target.files[0]
    setResume(resume);
  }

  const {id} = useParams();
  const handleApplication = async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("name",name);
    formData.append("email",email);
    formData.append("phone",phone);
    formData.append("address",address);
    formData.append("coverLetter",coverLetter);
    formData.append("resume",resume);
    formData.append("jobId",id);

    try {
      const {data} = await axios.post("https://job-portal-mern-project.onrender.com/api/v1/application/post", formData,{
        withCredentials:true,
        headers:{
          "Content-Type": "multipart/form-data"
        }
      });
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setcoverLetter("");
      setResume("");
      toast.success(data.message)
      navigateTo("/job/getall")
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  if(!isAuthorized || user && user.role === "employee"){
    navigateTo("")
  }

  return (
    <>
     <section className='application'>
      <div className="container">
        <h3>Application From</h3>
        <form onSubmit={handleApplication}>
          <input type="text"
          placeholder='Your Name'
          value={name} 
          onChange={(e)=> setName(e.target.value)}/>
          <input type="text"
          placeholder='Your email address'
          value={email} 
          onChange={(e)=> setEmail(e.target.value)}/>
          <input type="number"
          placeholder='Your Your phone number'
          value={phone} 
          onChange={(e)=> setPhone(e.target.value)}/>
          <input type="text"
          placeholder='Your Address'
          value={address} 
          onChange={(e)=> setAddress(e.target.value)}/>
          <textarea value={coverLetter} 
          onChange={(e)=>setcoverLetter(e.target.value)} 
          placeholder='Cover latter'/>
          <div>
            <label 
            style={{
              textAlign:"start",
              display:'block',
              fontSize:"20px"
             }}>
              Select Resume
             </label>
             <input type="file"
              accept='.jpg , .png ,.webp'
             onChange={handelFileChange}
             style={{width:"100%"}} />
          </div>
          <button type='submit'>Send Application</button>
        </form>
      </div>
     </section>
    </>
  )
}

export default Application