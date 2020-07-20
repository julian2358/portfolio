import React from 'react';
import './about.css';
import Footer from '../com/footer'
export default class Main extends React.Component {
    render(){
        return(
            <div className='about-container'>
                <div className='seperator'>
                <nav> 
                    <ul id='navlist'>
                        <a href='/'><li>Home</li></a>
                       <a href='/Projects'> <li>Projects</li></a>
                       <a href='/Contact'> <li>Contact</li></a>
                    </ul>
                </nav>
                </div>
           
                <div className='outside-container'>
                  
                    <div className='text-container'>
                    <h1 id='intro'>Hey, I'm Julian.</h1>

                    <h2 id='beneath'>
                        Web designer and developer from Charlotte, NC. I create custom websites to help buisnesses succeeed online. I've been passionate about tech since I can remeber and am a recent graduate of the Road to Hire Academy.
                    </h2>
                    
                    </div>
                    <div className='img-container'>
                        <img id='profile' src='/0.jpeg'></img><br></br>
                        
                    </div>
                </div>

                <section id='certi' className='certskills'>
                    <div className='cert-container'>
                        <ul id='front-end'>
                        <li className='header'> Front End </li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>React</li>
                        <li>Javascript</li>
                        </ul>

                        <ul id='back-end'>
                        <li className='header'> Back End</li>
                        <li>Node JS</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>Java</li>
                        </ul>

                        <ul id='otherskills'>
                        <li className='header'> Personal </li>
                        <li>Customer Service</li>
                        <li>Problem Solving</li>
                        <li>Teamwork</li>
                        <li>Communication</li>
                        </ul>
                    </div>

                    <h1 id='certs-header'>  Certifications </h1>
                    <div className='cert-container'>
                        <div className='cert-card'>
                        
                            <img id='hell' src='/hell.png' /> 
                            <div className='certtext'>
                                <h1><strong>Object-Orientated Programming with Java</strong></h1>
                                <h2>University of Helsinki</h2>
                                <h2>Issued Sep 2019</h2>
                            </div>
                        </div>
                    </div>
                </section>
                
                <Footer />
                
            </div>
        )
    }
};