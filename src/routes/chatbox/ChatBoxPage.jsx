import React, { useEffect, useRef } from "react";
import "./ChatBoxPage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const ChatBoxPage = () => {
    
    return (
        <div className="chatpage">
            <div className="wrapper">
                <div className="chat">
                    <div className="message">Test Message from ai</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message ">Test Message from ai</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message">Test Message from ai</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message ">Test Message from ai</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message">Test Message from ai</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message ">Test Message from ai</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message">Test Message from ai</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message ">Test Message from ai</div>
                    <div className="message user">Test Message from user</div>
                </div>
            </div>
            <NewPrompt/>
        </div>
    );
};

export default ChatBoxPage;
