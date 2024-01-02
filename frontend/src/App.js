import logo from "./assets/logo.jpg";
import "./App.css";
import React, { useState } from "react";
import chef from "./assets/2.jpg";
import chef2 from "./assets/5.jpg";
import chef3 from "./assets/4.jpg";
import robot from "./assets/robot.jpg";
function RestaurantPresentation() {
  // Restaurant presentation code here...

  return (
    <div className="App-background">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Welcome to our Restaurant! </h1>
      <div>
        <img src={chef} className="imge" alt="logo" />
        <img src={chef2} className="imge" alt="logo" />
        <img src={chef3} className="imge" alt="logo" />
        <BlogPost image={robot} description="Our robot waiter are going to bring the food to you" />
        <h4>Our chef is ready to take your order</h4>
      </div>
      <h2>What would you like to order?</h2>

      <ChatBox />
      <div className="carousel">{/* Carousel code here */}</div>
    </div>
  );
}

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [currentPrompt, setCurrentPrompt] = useState("");

  const handleSendMessage = () => {
    const response = "This is a response from the AI.";
    setMessages((prevMessages) => [...prevMessages, { text: currentPrompt, sender: "user" }, { text: response, sender: "ai" }]);
  };

  console.log(messages);

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === "user" ? "user" : "ai"}`}>
            {String(message.text)}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input onChange={(e) => setCurrentPrompt(e.target.value)} type="text" placeholder="Type your message..." />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}
function BlogPost({ image, description }) {
  return (
    <div className="blog-post">
      <img src={image} alt="Blog Post" className="blog-post-image" />
      <p className="blog-post-description">{description}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <RestaurantPresentation />
    </div>
  );
}

// function App() {
//   const [messages, setMessages] = useState([]);
//   const [currentPrompt, setCurrentPrompt] = useState("");

//   const handleSendMessage = () => {
//     const response = "This is a response from the AI.";
//     setMessages((prevMessages) => [...prevMessages, { text: currentPrompt, sender: "user" }, { text: response, sender: "ai" }]);
//   };

//   console.log(messages);

//   return (
//     <div className="chat-container">
//       <div className="chat-messages">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.sender === "user" ? "user" : "ai"}`}>
//             {String(message.text)}
//           </div>
//         ))}
//       </div>
//       <div className="chat-input">
//         <input onChange={setCurrentPrompt} type="text" placeholder="Type your message..." />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }
