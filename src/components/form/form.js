import React, { useRef, useState } from 'react';
import { Fragment } from 'react';
import './form.css';
import Resume from '../resume';

const Form = () => {

    
    const [countwex,setcountwex]=useState(0);
    const [counted,setcounted]=useState(0);
    let[elist,setelist]=useState([{id:""}]);
    let[welist,setwelist]=useState([{id:""}]);

    const[btnsubmit,setbtnsubmit]=useState(false);

    const fname=useRef('');
    const lname=useRef('');
    const email=useRef('');
    const contactno=useRef('');
    const linkedin=useRef('');
    const github=useRef('');
    const wed=useRef('');
    const wex=useRef('');

    const [search,setsearch]=useState('');
    const [skillList,setskillList]=useState([]);

    const addelist=()=>{
        setcounted(counted+1);
        setelist([...elist,{
            id:wed.current.value
        }
        ]);
        console.log("wedd")
        console.log(wed.current.value);
        
        
    }
    console.log('elist');
    console.log(elist);

    // workexperience
    const addwelist=()=>{
        setcountwex(countwex+1);
        setwelist([...welist,{
            id:wex.current.value
        }]);
        console.log("wexx")
        console.log(wex.current.value);
        
        
    }
    console.log('welist');
    console.log(welist);

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



    const onsubmit=(e)=>{
        e.preventDefault();
        setbtnsubmit(true);

    }
   


    
  return (
    <>
        {!btnsubmit && <div className='container'>

                <h2 className='text-center'>Personal Information</h2>
                <div className='row'>
                    <div className='col-md-6 form-group'>

                        
                            <div className='form-group mt-2'>

                                <label>First name</label>

                                <input ref={fname} className='form-control' type='text' placeholder='Enter your first name'></input>
                            </div>

                            <div className='form-group mt-2'>
                            <label>Last name</label>
                            <input ref={lname}  className='form-control' type='text' placeholder='Enter your last name'></input>
                            </div>

                            <div className='form-group mt-2'>
                            <label>Email addresses</label>

                            <input ref={email}  className='form-control' type='email' placeholder='Enter your email addresses'></input>
                            </div>

                            <div className='form-group mt-2'>

                            <label className='control-label'>Contact No.</label>

                            <input ref={contactno} className='form-control' type='number' placeholder='Enter your Contact number'></input>
                            </div>

                            <div className='form-group mt-2'>
                            <label>Social Links</label>
                            <input ref={linkedin}  className='form-control' type='text' placeholder='Enter your Linkedin Url'></input>
                            </div>
                            
                            <div className='form-group mt-2'>
                            <label>Enter your Github Url</label>
                            <input ref={github} className='form-control' type='text' placeholder='Enter your Github Url'></input>
                            </div>







                    </div>
                    <div className='col-md-6'>
                            <label>Work Experience</label>
                            {welist.map(item=>(
                                <div className='form-group mt-2 wex' id={item} >
                                
                                    <textarea ref={wex} className='form-control' placeholder='Enter your work Experience' rows={4}></textarea>
                            
                                </div>
                            ))}
                            <div className='container text-center mt-2'>
                                    <button className='btn btn-primary btn-sm' onClick={addwelist}>add</button>
                                </div>
                            

                            <div className='form-group mt-2'>
                                <label>Projects</label>
                                <textarea className='form-control' placeholder='Enter the projects you have built' rows={4}></textarea>
                            </div>

                            {/* New input field */}
                            <label>Education</label>
                            { elist.map(item=>(
                                <div className='form-group mt-2 wed' id={item} >
                                    
                                    <textarea className='form-control' rows={3} ref={wed} id={item}></textarea>
                                    
                                </div>))
                                
                            }
                            <div className='container text-center mt-2'>
                                <button className='btn btn-primary btn-sm' onClick={addelist}>add</button>
                            </div>
                            

                            <label>Skills</label>
                            <input value={search} className='form-control' type='text' placeholder='Enter your skills' id='search' 
                            onChange={(e)=>searchStates(e)
                            } ></input>
                            <div  value={skillList} className='skill-list'></div>
                        



                    </div>
                </div>
                <button className='btn alert alert-primary' type='submit' onClick={onsubmit}>submit</button>

            </div> }
        
                
                {btnsubmit && <Resume fname={fname} lname={lname} contactno={contactno} email={email}
                 github={github} linkedin={linkedin}  wed={elist} wex={welist} />  }   

                {btnsubmit&& <button className='btn alert alert-primary' onClick={()=>setbtnsubmit(false)} >back</button>}

    </>
  )
}

export default Form;