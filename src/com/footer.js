import React from 'react';
import './footer.css'

export default class Footer extends React.Component{
    render(){
        return(
            <div className='footers'>

                <div className='footer'>
                    <div classname='footerIcons'>
                        <img width='100' src='/linked.png' />
                        <img width='100' src='/github_.png' />
                        <img width='100' src='/tweet.png' />
                        
                    </div>
                </div>

            </div>
        )
    }
}