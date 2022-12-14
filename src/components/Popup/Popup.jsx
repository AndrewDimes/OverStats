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
            <div className="header">
              {' '}
              As of October 3rd, 2022, statistics on OverStats have stopped updating due to changes made by Blizzard as 
              part of the Overwatch 2 launch. Until our current Blizzard begins sharing data again we will not be able to display game data.
               We want to support Overwatch 2, but can only do so once data is made available
               by Blizzard. Thank you for understanding. We look forward to supporting Overwatch 2 as soon as possible.
              <br />
            </div>
          </div>
        )}
      </Popup>

    )
    
}
