/* Yashim codes for chat app..
import React from "react";
import socketIOClient from "socket.io-client";
import "./App.css";

const socket = socketIOClient("http://192.168.100.188:5000");

function App() {
  const [message, setMessage] = React.useState("");
  const [message_list, setMessageList] = React.useState([]);
  const handleSend = () => {
    socket.emit("chat", {
      username: "Johny Sins",
      message,
    });
  };

  React.useEffect(() => {
    socket.on("chat", function (data) {
      setMessageList((current) => [...current, data]);
    });
  }, []);

  return (
    <div>
      <h1>Chat</h1>
      <div className="">
        {message_list.map((msg, index) => {
          return (
            <p>
              {msg.username} : {msg.message}
            </p>
          );
        })}
      </div>

      <div className="">
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={handleSend}>Chat</button>
      </div>
    </div>
  );
}

export default App;
*/

/* sample of chat app with working functionalityu in console
  function webSocket() {
    socket.emit("chat", {
      username: "Bro",
      message: "yes daddy!",
    });
    socket.on("chat", function (data) {
      console.log("username:", data.username, "message:", data.message);
    });
  }

  webSocket();
  return (
    <>
      <div className="box1">ChatBox</div>
      <div className="box2">username</div>
    </>
  );
}
*/

//Sui Sin sample of codes for chat app
import "./App.css";
import React from "react";
import socketIOClient from "socket.io-client";

const socket = socketIOClient("http://192.168.100.188:5000");

function App() {
  const [message, setMessage] = React.useState("");
  const [history, setHistory] = React.useState([]);

  function handleSendMessage() {
    document.getElementById("input_message").value = "";
    socket.emit("chat", {
      username: "Sui Sin",
      message: message,
    });
  }

  React.useEffect(() => {
    socket.on("chat", function (data) {
      setHistory((current) => [...current, data]);
    });
  }, []);

  return (
    <>
      <div class="chat_title">
        <span>Chat</span>
      </div>
      <div class="chat_area">
        {history.map((msg, index) => {
          return (
            <p class="messages" key={index}>
              {msg.username} : {msg.message}
            </p>
          );
        })}
      </div>

      <div class="chat_items">
        <span class="items">Message:</span>
        <input
          id="input_message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></input>
        <button class="button" onClick={handleSendMessage}>
          send
        </button>
      </div>
    </>
  );
}

export default App;
