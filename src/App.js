import React, { useEffect, useState } from "react";
import firebase from "./firebase/firebase";
// import firebaseDatabase from "./firebaseDatabase";
// firebase storage: upload img -> get url store in payload

function App() {
  const database = firebase.database();
  const chatRef = database.ref("chat");
  const [messageList, setMessageList] = useState(null);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    chatRef.on("value", (snapshot) => {
      setMessageList(snapshot.val());
      console.log(snapshot.val());
    });
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log("hi");
    // push payload
    const payload = {
      username: name,
      message: message,
    };
    // chatRef.push(payload);

    chatRef.push(payload, (error) => {
      if (error) {
        console.log("An error has occured");
      } else {
        setName("");
        setMessage("");
      }
    });
  };

  let isDisable = message === "" || name === "";

  return (
    <div className="App">
      <h1>Firebase Chatroom</h1>
      <form onSubmit={handleSendMessage}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
        <button disabled={isDisable} type="submit">
          Send Message
        </button>
      </form>
      {messageList &&
        Object.entries(messageList)
          .reverse()
          .map(([key, messageData]) => {
            return (
              <p key={key}>
                {messageData.username} says: "{messageData.message}"
              </p>
            );
          })}
    </div>
  );
}

export default App;
//
