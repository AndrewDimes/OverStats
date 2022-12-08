import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function PopupMessage(){
    return (

        <Popup
        open="show"
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Overwatch 2 is here!</div>
            <div className="content">
              {' '}
              As of October 3rd, 2022, statistics on OverStats have stopped updating due to changes made by Blizzard as 
              part of the Overwatch 2 launch. Until our current API provider begins sharing data again or we are able to find
               a new one we will not be able to display game data.
               We want to support Overwatch 2, but can only do so once data is made available
               by Blizzard. Thank you for your support over the years. 
               It’s been our pleasure to be part of the wonderful Overwatch community, 
               and we look forward to supporting Overwatch 2 ASAP.
              <br />
            </div>
          </div>
        )}
      </Popup>

    )
    
}
