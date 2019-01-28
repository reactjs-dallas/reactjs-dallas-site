//Individual Event contained within our Events page

import React from 'react';


//Exports out our individual event
export default function Event(props)
{

    //Allows us to use html description from meetup API (parses after second </p>)
    function createDescriptionMarkup()
    {
        //prime our </p> search
        const secondParagraphEnd = props.eventDescription.indexOf("</p>", props.eventDescription.indexOf("</p>") + 1);
        const description = props.eventDescription.substring(0, secondParagraphEnd+4);

        //Use parsed description string (description will be blank if we aren't able to chop it correctly)
        return {__html: description};
    }

    //This function takes the date from meetup's api and converts it to a date that we can stringify
    function createDateString()
    {
        //console.log('creating date');
        //replace - with /
        let date = props.eventDate.replace(/-/g, `/`);
        console.log(date);
        const isoDate = new Date(date);
        return isoDate.toDateString();
    }

    //Each event element has a <hr> element at the end of it. 
    //This was a simple way to separate events without interrupting anyone's styling for now.
    return (
        <div>
            <h3>{createDateString()}</h3>
            <h4>{props.eventName}</h4>
            <div dangerouslySetInnerHTML={createDescriptionMarkup()}></div>
            <p style={{ marginTop: 12 }}>
              <a href={props.eventLink} target="_blank">Meetup link</a>
            </p>
            <hr></hr>
        </div>
    );
}

Event.defaultProps = {
    eventName: 'Default Name',
    eventDate: '2019-02-12',
    eventDescription: "<p>Default Description</p><p>Times</p>",
    eventLink: "https://www.meetup.com/ReactJSDallas/events/pbbdwnyzdbqb/"
};