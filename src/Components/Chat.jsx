import React from 'react';
import '../Assects/Css/Chat.css';
import user1 from '../Assects/Images/userpic4.png';
import right_img from '../Assects/Images/Creation/i10.jpg';

function Chat() {
  return (
    <>
      <div className='chat'>
        <div className='chat-box'>
          <div className='chat-box-row'>
            <div className='chat-main'>
              <h3 className='chat-main-title'>The only logo maker with free customization</h3>
              <p className='chat-main-note'>We’ll personally help you customize your logo with the purchase of any package.</p>
            </div>
            <div className='chat-phone'>
              <div className='phone-first-box'>
                <img className='phone-first-box-img' src={user1} alt="user-image" />
                <p className='phone-first-box-note'>Can you put the icon on a hexagonal container, change the text to green, and also remove the tagline</p>
              </div>
              <div className='phone-second-box'>
                <div className='phone-second-box-left'>
                  <img src={right_img} alt="" width='100px' height='100%'/>
                  <span>Sure thing, how does this look?</span>
                </div>
                <img className='phone-first-box-img ms-3' src={user1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Chat;