import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { IoIosSend, TiMicrophone } from 'react-icons/all';

function ButtonMicrophoneSend({ message, sentMessage }) {
  return (
    <button className="send click">
      <SwitchTransition>
        <CSSTransition key={message} timeout={100} classNames="sendIcon">
          <div onClick={sentMessage}>
            {message ? <IoIosSend /> : <TiMicrophone />}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </button>
  );
}

export default ButtonMicrophoneSend;