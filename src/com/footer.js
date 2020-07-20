import React from 'react';
import './footer.css'

export default class Footer extends React.Component{
    render(){
        return(
            <div className='footers'>

                <div className='footer'>
                    <div classname='footerIcons'>
                       <a href='https://www.linkedin.com/in/julian-reeves-956415152/'> <img width='100' src='/linked.png' /> </a>
                       <a href='https://github.com/julian2358'> <img width='100' src='/github_.png' /> </a>
                        <img width='100' src='/tweet.png' />
                        
                    </div>
                    <h2>Last Updated: 07/17/2020
                </h2>
                </div>

            </div>
        )
    }
}