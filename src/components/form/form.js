import React from 'react';
import './form.css';

const Form = () => {
  return (
    <div className='form'>

        

            <div className='left_container'>

                <div className='container'>
                    

                    <label>First name</label>

                    <input type='text' placeholder='Enter your first name'></input>
                    <label>Last name</label>
                    <input type='text' placeholder='Enter your last name'></input>

                    <label>Email addresses</label>

                    <input type='email' placeholder='Enter your email addresses'></input>

                    <label>Contact No.</label>

                    <input type='number' placeholder='Enter your Contact number'></input>

                    <label>Social Links</label>
                    <input type='text' placeholder='Enter your Linkedin Url'></input>
                    <label>Enter your Github Url</label>
                    <input type='text' placeholder='Enter your Linkedin Url'></input>





                </div>



            </div>
            <div className='right_container'>

                <div className='container'>

                    <label>Work Experience</label>
                    <textarea placeholder='Enter your work Experience'></textarea>

                    <label>Projects</label>
                    <textarea placeholder='Enter the projects you have built'></textarea>

                    <label>Education</label>
                    <textarea></textarea>

                    <label>Skills</label>
                    <input type='text' placeholder='Enter your skills'></input>
                </div>



            </div>
        </div>

    
  )
}

export default Form;