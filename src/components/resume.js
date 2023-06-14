import React from 'react'

const Resume = ({fname,lname,contactno,email,linkedin,github,wex,wed}) => {

    console.log(wex);
  return (
    <div className='container'>
            
            <div className='row'>

                        <div className='col-md-4'>
                            <h1>{fname.current.value} <span> {lname.current.value}</span></h1>
                            <p>{email.current.value}</p>
                            <p>{contactno.current.value}</p>

                            <p>
                                <a href='#1'>
                                    {github.current.value}
                                </a>
                            </p>

                            <p>
                                <a href='#1'>
                                    {linkedin.current.value}
                                </a>
                            </p>

                            <h3>Skills</h3>
                            <p>

                            </p>


                        </div>
                        <div className='col-md-8'>

                            <div className='card mt-4'>

                                <div className='card-header background'>
                                    <h3>Work Experience</h3>
                                </div>
                            </div>

                            
                            {wex.map(item=>(
                                
                                <div className='card-body'>
                                    
                                    {item['id'].length>0 && 

                                    <ul>
                                    
                                        <li>{ item['id']}</li>
                                    </ul>  
                                    }
                                    
                                </div>
                            ))}
                                
                            

                            <div className='card mt-4'>

                                <div className='card-header background'>
                                    <h3>Education</h3>
                                </div>
                            </div>

                            {wed.map(item=>(
                                <div className='card-body'>
                                {item['id'].length>0 && 
                                            <ul>
                                        <li>{item['id']}</li>
                                        
                                    </ul> }
                                    
                                </div>
                                ))}
                                

                          

                            <div className='card mt-4'>

                                <div className='card-header background'>
                                    <h3>Projects</h3>
                                </div>
                            </div>

                            <div className='card-body'>
                                <p></p>
                            </div>

                            <div className='container mt-3 text-center'></div>

                        </div>


            </div>
            

        </div>
  )
}

export default Resume;