// External Dependencies
import React from 'react';

// Internal Dependencies
import Layout from '../components/layout';
import DallasLogoSvg from '../images/reactjs-dallas-icon.svg';

// Event Component
import Event from '../components/event';

// Local Variables
const rootStyles = {
  textAlign: 'center'
};

const heroContainerStyles = {
  background: '#282C34',
  padding: '2rem',
};

const heroTitleStyles = {
  color: '#61dafb',
};

const heroTextStyles = {
  color: 'white',
  fontWeight: 100,
};

const contentStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '3.5rem 0',
  paddingBottom: '1.2rem'
}

const dallasLogoContainerStyles = {
  background: '#B9B9B9',
  display: 'flex',
  justifyContent: 'center',
  padding: 64,
}

const dallasLogoStyles = {
  width: 128,
  height: 128,
};

// Component Definition
export default class IndexPage extends React.Component {
  
  //Setup default state for our index page
  constructor(props)
  {
    super(props);
    this.state = {
      events: [] //we will fill this after fetch
    };


  }

  //Fetches from meetup API and stores our events
  componentDidMount ()
  {
    //console.log('mounted');

    //Fetch all events from our React JS meetup group!
    fetch("https://api.meetup.com/reactjsdallas/events?key=1570558171e5f7833a5f7b1d682813", {
      "credentials":"include",
      "headers":{
        "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "accept-language":"en-US,en;q=0.9",
        "cache-control":"max-age=0",
        "if-none-match":"\"a668e670716ce826669d946fc0f0c947-gzip\"",
        "upgrade-insecure-requests":"1"
      },
      "referrerPolicy":"no-referrer-when-downgrade",
      "body":null,
      "method":"GET",
    })
    .then(res => res.json())
    .then(events => {
      //Log our response
      //console.log(events);

      const choppedEvents = events.slice(0,3);

      //Set our events to the state (forces page refresh)
      this.setState({
        events: choppedEvents
      });

    })
    .catch(err=>console.log(err));
  } 


  //Rendering of events page
  render () {
    //console.log('rendering');

    //Create our Event elements from the first 3 events
    const eventElements = this.state.events.map((event, index) =>{
      return <Event 
      eventName={event.name}
      eventDate={event.local_date}
      eventDescription={event.description}
      eventLink={event.link}
      />
    });

    return (
      <Layout>
        <div css={rootStyles}>
          <section css={heroContainerStyles}>
            <header>
              <h1 css={heroTitleStyles}>Events</h1>
              <div css={heroTextStyles}>Where DFW meets</div>
            </header>
          </section>

          <section css={contentStyles}>
              {eventElements}
          </section>

          <div css={dallasLogoContainerStyles}>
            <DallasLogoSvg style={dallasLogoStyles} />
          </div>
        </div>
      </Layout>
    );
  }
}