import React from 'react';
import './contact.css';
import './footer.css'
import Footer from './footer';

 export default class Contact extends React.Component {
    render(){
        return(
        <div className='contact-container'>

            <div>
                   <nav> 
                    <ul id='navlist'>
                    <a href='/'><li>Home</li></a>
                        <a href='/Projects'><li>Projects</li></a>
                       <a href='/Contact'> <li>Contact</li></a>
                    </ul>
                </nav>

                <div className='contact-container'>
                <div className='info-background'>
                    <div id='cont'>
                        <h1>Julianreeves2355@gmail.com</h1>
                        <h1>980-475-7907</h1>
                        
                        <div className='icon-flex'>
                          <a href='https://github.com/julian2358'>  <img width='200' height='200'    src='/github_.png' /> </a>
                        <a href='https://www.linkedin.com/in/julian-reeves-956415152/'>  <img width='200'   height='200'   src='/linked.png' /> </a>
                        
                          <a href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=julianreeves2355@gmail.com&su=SUBJECT&body=BODY&tf=1'>  <img width='200'   height='200'   src='/gmail.png' /> </a>
                            </div>
                             </div>
                </div>
                <div className='side-text'>
                <h1 id='big-side-text'>Shoot Me A Message !</h1>
                </div>
                
                </div>
                

                <Footer />
            </div>
            

        </div>
        )
    }
}