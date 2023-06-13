import React from 'react';
import './form.css';

const Form = () => {
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

                
                    <div className='form-group mt-2'>
                    <label>Work Experience</label>
                    <textarea className='form-control' placeholder='Enter your work Experience' rows={5}></textarea>
                    </div>

                    <div className='form-group mt-2'>
                    <label>Projects</label>
                    <textarea className='form-control' placeholder='Enter the projects you have built'></textarea>
                    </div>

                    <div className='form-group mt-2'>
                    <label>Education</label>
                    <textarea className='form-control'></textarea>
                    </div>

                    <label>Skills</label>
                    <input type='text' placeholder='Enter your skills'></input>
                



            </div>
        </div>

    </div>

    
  )
}

export default Form;