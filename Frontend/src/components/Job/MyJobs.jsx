import React,{ useContext, useEffect, useState } from 'react'
import { Context } from '../../main';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import {FaCheck} from 'react-icons/fa6'
import { RxCross2} from 'react-icons/rx'



const MyJobs = () => {
  const [myJobs,setMyjobs] = useState([]);
  const[editingMode , setEditingMode] = useState(null);
  const { isAuthorized , user} = useContext(Context)

  const navigateTo = useNavigate();

  // fetching All jobs of An employers

  useEffect(()=>{
    const fetchMyJobs = async ()=>{
      try{
        const {data} = await axios.get("https://job-portal-mern-project.onrender.com/api/v1/job/getmyjob",
          {withCredentials:true});
        setMyjobs(data.myJobs)
      }catch(error){
        toast.error(error.response.data.message);
        set
        
      }
    }
    fetchMyJobs()
  },[])

  if(!isAuthorized || (user && user.role !== 'employee')){
    navigateTo('/')
    
  }

  //function for enabling editing mode
  const enableEditing = (jobId) => {
 //Here We Are Giving Id in setEditingMode because We want to enable only that job whose ID has been send.
    setEditingMode(jobId)
  }
   //function for disabling editing mode
   const disableEditing = (jobId) => {
    setEditingMode(jobId)
  }
   //function for  updatating data
   const updateJob = async(jobId) => {
    const updatedJob = myJobs.find(job=>job._id === jobId)
    await axios.put(`https://job-portal-mern-project.onrender.com/api/v1/job/update/${jobId}`,updatedJob,{
      withCredentials:true,
    }).then((res)=>{
      toast.success(res.data.message)
      setEditingMode(null)

    }).catch(err => {
      toast.error(err.response.data.message)
    })
  }
  // function for deleting
  const deleteJob = async (jobId) => {
  try {
    const res = await axios.delete(
      `https://job-portal-mern-project.onrender.com/api/v1/job/delete/${jobId}`,
      { withCredentials: true }
    );
    toast.success(res.data.message);
    setMyjobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
  } catch (err) {
    const message = err?.response?.data?.message || "Failed to delete job";
    toast.error(message);
  }
};

  //update the job object in the jobs state with the new value
  const InputChange =(jobId , field , value)=>{
    setMyjobs((prevJobs)=>
      prevJobs.map((Element)=>
        Element._id === jobId ? {...Element ,[field]:value} : Element
      )
    );
  };
  
  return (
    <div className="myJobs page">
      <div className="container">
        <h3>Your Posted Jobs</h3>
        {
          myJobs && myJobs.length >0 ? 
         ( <>
          <div className="banner">
            {
              myJobs.map(Element=>{
                return(
                  <div className="card"  key={Element._id}>
                    <div className="content">
                      <div className="short_fields">
                        <div>
                          <span>Title:</span>
                          <input type="text"
                           disabled={editingMode !== Element._id ? true : false}
                          value={Element.title} 
                          onChange={(e)=> 
                          InputChange(Element._id,
                          "title",
                          e.target.value)} />
                        </div>
                        <div>
                          {""}
                          <span>Country:</span>
                          <input type="text" 
                          disabled={editingMode !== Element._id ? true : false}
                          value={Element.country} 
                          onChange={(e)=> 
                          InputChange(Element._id,
                          "country",
                          e.target.value)} />
                        </div>
                        <div>
                          <span>City:</span>
                          <input type="text" 
                          disabled={editingMode !== Element._id ? true : false}
                          value={Element.city} 
                          onChange={(e)=> 
                          InputChange(Element._id,
                          "city",
                          e.target.value)} />
                        </div>
                        <div>
                          <span>Category:</span>
                          <select value={Element.category}
                          onChange={(e)=>
                            InputChange(
                              Element._id,
                              "category",
                              e.target.value
                            )
                          }
                          disabled={editingMode!== Element._id? true : false}
                          >
                            <option value="">Select Category</option>
                <option value="Graphics & Design">Graphics & Design</option>
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
                <option value="Frontend Web Development">
                  Frontend Web Development
                </option>
                <option value="MERN Stack Development">
                  MERN STACK Development
                </option>
                <option value="Account & Finance">Account & Finance</option>
                <option value="Artificial Intelligence">
                  Artificial Intelligence
                </option>
                <option value="Video Animation">Video Animation</option>
                <option value="MEAN Stack Development">
                  MEAN STACK Development
                </option>
                <option value="MEVN Stack Development">
                  MEVN STACK Development
                </option>
                <option value="Data Entry Operator">Data Entry Operator</option>
                   </select>       
                        </div>
                        <div>
                          <span>Salary:{""}{
                            Element.fixedSalary  ?
                            (<input type='number'
                               value={Element.fixedSalary}
                               onChange={(e)=>
                                 InputChange(
                                   Element._id,
                                   "fixedSalary",
                                   e.target.value
                                 )                     
                              }
                              disabled={
                                editingMode!== Element._id? true : false
                              }
                              />
                            ) :(<div>
                              <input type='number'
                               value={Element.salaryFrom}
                               onChange={(e)=>
                                 InputChange(
                                   Element._id,
                                   "salaryFrom",
                                   e.target.value
                                 )                     
                              }
                              disabled={
                                editingMode!== Element._id? true : false
                              }
                              />
                              <input type='number'
                               value={Element.salaryTo}
                               onChange={(e)=>
                                 InputChange(
                                   Element._id,
                                   "salaryTo",
                                   e.target.value
                                 )                     
                              }
                              disabled={
                                editingMode!== Element._id? true : false
                              }
                              />
                            </div>)}
                             </span> 
                        </div>
                        <div>
                          <span> Expired:</span>
                          <select value={Element.expired}
                          onChange={(e)=>
                            InputChange(
                              Element._id,
                              "expired",
                              e.target.value
                            )
                          }
                          disabled={editingMode!== Element._id? true : false}
                          > 
                            <option value={true}>TURE</option>
                            <option value={false}>FALSE</option>
                          </select>
                        </div>
                      </div>
                      <div className="long_field">
                        <div>
                          <span>description :</span>
                          <textarea rows="5"
                          value={Element.description}
                          onChange={(e)=>
                            InputChange(
                              Element._id,
                              "description",
                              e.target.value                           
                             )} 
                             disabled={
                               editingMode!== Element._id? true : false
                             }
                             />
                        </div>
                        <div>
                          <span>Location :</span>
                          <textarea rows="5"
                          value={Element.location}
                          onChange={(e)=>
                            InputChange(
                              Element._id,
                              "location",
                              e.target.value                           
                             )} 
                             disabled={
                               editingMode!== Element._id? true : false
                             }
                             />
                        </div>
                      </div>
                    </div>
                      <div className="button_wrapper">
                       <div className="edit_btn_wrapper">
                        {
                          editingMode === Element._id ?(
                           <> <button onClick={(e)=> updateJob(Element._id)}
                              className='check_btn'><FaCheck/> </button>
                              <button onClick={(e)=> disableEditing(Element._id)}
                              className='cross_btn'><RxCross2/> </button>
                              </> 
                          ):(
                            <button onClick={(e)=> enableEditing(Element._id)}
                            className='edit_btn'>Edit </button>
                          )
                        }
                       </div>
                       <button onClick={()=>deleteJob(Element._id)}
                        className='delete_btn'>Delete</button>
                      </div>
                  </div>
                )
              })
            }
          </div>
          </> ): (
            <p>
              You've not posted any job or may be you deleted all of your jobs!
            </p>
          )
        }
      </div>

    </div>
  )
}

export default MyJobs