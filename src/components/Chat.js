import { Card, CardActions, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./chat.css";

const Chat = () => {
  const url = "http://localhost:5001";

  //initializing socket
  const [socket, setSocket] = useState(io(url, { autoConnect: false }));
  const [text, setText] = useState("");

  const [messageArray, setMessageArray] = useState([
    // { text: "aaj kon sa exam hai?", sent: false },
    // { text: "rehne do,kya karoge padh ke!!", sent: true },
    // { text: "akele akele top mar lo bhai", sent: false },
  ]);

  useEffect(() => {
    socket.connect();
  }, []);

  const displayMessage = () => {
    return messageArray.map((message) => (
      <div className={message.sent ? "msg-sent message" : "msg-rec message"}>
        <p className="msg-text">{message.text}</p>
      </div>
    ));
  };

  const sendMessage = (e) => {
    e.preventDefault();
    const obj = { text: text, sent: true };
    socket.emit("sendmsg", obj);
    setMessageArray([...messageArray, obj]);
    setText("");
  };

  //  for recieveing message from server
  socket.on("recmsg", (data) => {
    console.log(data);
    setMessageArray([...messageArray, data]);
  });

  return (
    <div>
      <h1>
        <Card>
          <CardContent className="chat-area">{displayMessage()}</CardContent>
          <CardActions>
            <form onSubmit={sendMessage}>

            <div className="input-group w-100">
              <input
                className="form-control"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <button
                className="btn btn-success"
              >
                Send Message
              </button>
            </div>
            </form>
          </CardActions>
        </Card>
      </h1>
    </div>
  );
};

export default Chat;

//effect hook is used for automatically data fetching
//for eg whenever we open the amazon website the data automaticaly loads
