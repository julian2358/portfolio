import React from 'react';
import './projects.css';
import Footer from './footer';
import { Card, Icon, Image } from 'semantic-ui-react'

const extra = (
    <a>
      <Icon name='user' />
      16 Friends
    </a>
)
export default class Projects extends React.Component{
    render(){
        return(
            <div className='body-container'>
              <nav> 
                    <ul id='navlist'>
                        <a href='/'><li>Home</li></a>
                       <a href='/Projects'> <li>Projects</li></a>
                       <a href='/Contact'> <li>Contact</li></a>
                    </ul>
                </nav>   

                <div className='card-flex'>
                <Card>
    <Image src='/merge.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Merge Sort Visualizer</Card.Header>
      <Card.Meta>
        <span className='date'>React, CSS, Javascript</span>
      </Card.Meta>
      <Card.Description>
        Merge Sort Visualizer is built on the Merge Sort algorithm. Giving you access to not only sort any combination of array but also visualize the Merge Sort algorithm in action using animations and a UI for our array.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
     <div class='button-box'>
         <button className='btn-text'>Site</button>
         <button className='btn-texting'>Repo</button>
     </div>
    </Card.Content>
  </Card>

  {/*  */}

  <Card>
    <Image src='gateway.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Gateway Project: California</Card.Header>
      <Card.Meta>
        <span className='date'>HTML, CSS</span>
      </Card.Meta>
      <Card.Description>
        Into project for the Road to Hire Academy. Utiziling HTML and CSS after a month of working with the languages.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <div class='button-box'>
         <button className='btn-text'>Site</button>
         <button className='btn-texting'>Repo</button>
     </div>
    </Card.Content>
  </Card>

{/*  */}

<Card>
    <Image src='/speech.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Guessing Game</Card.Header>
      <Card.Meta>
        <span className='date'>HTML,CSS,Javascript</span>
      </Card.Meta>
      <Card.Description>
        Guessing game utiziling Javascripts built in speech recognition API. The App uses your voice to record your inputs.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <div class='button-box'>
         <button className='btn-text'>Site</button>
         <button className='btn-texting'>Repo</button>
     </div>
    </Card.Content>
  </Card>
{/*  */}

<Card>
    <Image src='/discord.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Discord Bot</Card.Header>
      <Card.Meta>
        <span className='date'>Node JS, discord.js</span>
      </Card.Meta>
      <Card.Description>
       Custom Discord Bot built in discord.js connects to a real discord server and serves users an output given a valid command. The bot utilizies two API's and is capable of sending a random cat image or the urban dictionary defintion of any given query.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <div class='button-box'>
         <button className='btn-text'>Site</button>
         <button className='btn-texting'>Repo</button>
     </div>
    </Card.Content>
  </Card>
{/*  */}

<Card>
    <Image src='/break.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Breaking Bad Cast</Card.Header>
      <Card.Meta>
        <span className='date'>React, Axios</span>
      </Card.Meta>
      <Card.Description>
        Search the breaking bad cast by name or scroll through our catalog by card. Utilizing Breaking Bad's Character API we have access to the actors and some basic information and current status's about them. 
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <div class='button-box'>
         <button className='btn-text'>Site</button>
         <button className='btn-texting'>Repo</button>
     </div>
    </Card.Content>
  </Card>
{/*  */}

<Card>
    <Image src='/civics.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Local Representative Lookup</Card.Header>
      <Card.Meta>
        <span className='date'>React, Axios</span>
      </Card.Meta>
      <Card.Description>
        With the help of Google's Civic Economics API. We parse the data of state and federal politicians and leaders and provide it in a neat manner tailored to a users location.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <div class='button-box'>
         <button className='btn-text'>Site</button>
         <button className='btn-texting'>Repo</button>
     </div>
    </Card.Content>
  </Card>
{/*  */}
<Card>
    <Image src='/car.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Luminosity</Card.Header>
      <Card.Meta>
        <span className='date'>React</span>
      </Card.Meta>
      <Card.Description>
          Tasked with designing an Ecommerce Store in react. I created an App modeling a Electric Car manufactuarer. The app utilized Javascript Validation.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <div class='button-box'>
         <button className='btn-text'>Site</button>
         <button className='btn-texting'>Repo</button>
     </div>
    </Card.Content>
  </Card>
{/*  */}
<Card>
    <Image src='/chat.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Mongo Chat</Card.Header>
      <Card.Meta>
        <span className='date'>Node js, Socket io, MongoDB</span>
      </Card.Meta>
      <Card.Description>
        Chat App designed using Mongo db as a database to store messages and socket io for real-time bidirectional event-based communication. Communication with MongoDB is instant and transfers from user to user in realtime.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <div class='button-box'>
         <button className='btn-text'>Site</button>
         <button className='btn-texting'>Repo</button>
     </div>
    </Card.Content>
  </Card>
{/*  */}
<Card>
    <Image src='/tictactoe.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Tic Tac Toe</Card.Header>
      <Card.Meta>
        <span className='date'>React</span>
      </Card.Meta>
      <Card.Description>
        Tic Tac Toe created in react. Uses Javascript logic to create the functionality of a tic toe game on the UI board.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <div class='button-box'>
         <button className='btn-text'>Site</button>
         <button className='btn-texting'>Repo</button>
     </div>
    </Card.Content>
  </Card>
{/*  */}
<Card>
    <Image src='/god.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Github Cards</Card.Header>
      <Card.Meta>
        <span className='date'>React, Axios</span>
      </Card.Meta>
      <Card.Description>
        Display the cards of any github user. Just search and add them to the grid. Fetches from Github Api to grab users cards.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <div class='button-box'>
         <button className='btn-text'>Site</button>
         <button className='btn-texting'>Repo</button>
     </div>
    </Card.Content>
  </Card>
{/*  */}
{/*  */}


                </div>

                <Footer />
            </div>
            
        )
    }
}