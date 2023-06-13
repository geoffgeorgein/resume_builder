import React, { useRef, useState } from 'react';
import './form.css';

const Form = () => {

    
    const [countwex,setcountwex]=useState(0);
    const [counted,setcounted]=useState(0);
    let[elist,setelist]=useState([0]);
    let[welist,setwelist]=useState([0]);

    const [search,setsearch]=useState('');
    const [skillList,setskillList]=useState([]);

    const addelist=()=>{
        setcounted(counted+1);
        setelist([...elist,counted]);
        
        
    }

    // workexperience
    const addwelist=()=>{
        setcountwex(countwex+1);
        setwelist([...welist,countwex]);
        
        
    }

    const searchStates=async(e)=>{
        
        setsearch(e.target.value);
        const res=await fetch('../../../public/data/skills.json')
            
        console.log(res);
        const states= await res.json();

        let matches=states.fliter(state=>{
            const regex=new RegExp(`^${search}`,'gi');
            return state.name.match(regex);
        })

        console.log(matches);

    }
   


    
  return (
    <div className='container'>

        
        <div className='row'>
            <div className='col-md-6 form-group'>

                
                    <div className='form-group mt-2'>

                        <label>First name</label>

                        <input className='form-control' type='text' placeholder='Enter your first name'></input>
                    </div>

                    <div className='form-group mt-2'>
                    <label>Last name</label>
                    <input  className='form-control' type='text' placeholder='Enter your last name'></input>
                    </div>

                    <div className='form-group mt-2'>
                    <label>Email addresses</label>

                    <input  className='form-control' type='email' placeholder='Enter your email addresses'></input>
                    </div>

                    <div className='form-group mt-2'>

                    <label className='control-label'>Contact No.</label>

                    <input className='form-control' type='number' placeholder='Enter your Contact number'></input>
                    </div>

                    <div className='form-group mt-2'>
                    <label>Social Links</label>
                    <input  className='form-control' type='text' placeholder='Enter your Linkedin Url'></input>
                    </div>
                    
                    <div className='form-group mt-2'>
                    <label>Enter your Github Url</label>
                    <input className='form-control' type='text' placeholder='Enter your Linkedin Url'></input>
                    </div>







            </div>
            <div className='col-md-6'>
                    <label>Work Experience</label>
                    {elist.map(item=>(
                        <div className='form-group mt-2'>
                        
                        <textarea className='form-control' placeholder='Enter your work Experience' rows={4}></textarea>
                       
                    </div>
                    ))}
                    <div className='container text-center mt-2'>
                            <button className='btn btn-primary btn-sm' onClick={addelist}>add</button>
                        </div>
                    

                    <div className='form-group mt-2'>
                        <label>Projects</label>
                        <textarea className='form-control' placeholder='Enter the projects you have built' rows={3}></textarea>
                    </div>

                    {/* New input field */}
                    <label>Education</label>
                    { welist.map(item=>(
                        <div className='form-group mt-2'>
                            
                            <textarea className='form-control' rows={3}></textarea>
                            
                        </div>))
                        
                    }
                    <div className='container text-center mt-2'>
                        <button className='btn btn-primary btn-sm' onClick={addwelist}>add</button>
                    </div>
                    

                    <label>Skills</label>
                    <input value={search} className='form-control' type='text' placeholder='Enter your skills' id='search' 
                    onChange={(e)=>searchStates(e)
                    } ></input>
                    <div  value={skillList} className='skill-list'></div>
                



            </div>
        </div>

    </div>

    
  )
}

export default Form;