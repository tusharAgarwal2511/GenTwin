import React from 'react'
import {Link} from 'react-router-dom'
import './chatList.css'

const ChatList = () => {
  return (
      <div className="chatlist">
          <span className="title">DASHBOARD</span>
          <Link to="/dashboard">Create a new Chat</Link>
          <Link to="/dashboard">Explore GenTwin</Link>
          <Link to="/dashboard">Contact</Link>
          <hr />
          <span className="title">RECENT CHATS</span>
          <div className="list">
              <Link to="/">My chat title</Link>
              <Link to="/">My chat title</Link>
              <Link to="/">My chat title</Link>
              <Link to="/">My chat title</Link>
              <Link to="/">My chat title</Link>
              <Link to="/">My chat title</Link>
              <Link to="/">My chat title</Link>
              <Link to="/">My chat title</Link>
              <Link to="/">My chat title</Link>
              <Link to="/">My chat title</Link>
              <Link to="/">My chat title</Link>
          </div>
          <hr />
          <div className="upgrade">
              <img src="/logo.png" alt="" />
              <div className="text">
                  <span>Upgrade to pro</span>
                  <span>Get unlimited access to all features</span>
              </div>
          </div>
      </div>
  );
}

export default ChatList