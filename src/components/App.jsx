import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");
  //const [isClicked, setIsClicked] = useState(false);

  function handleChange() {
    setName(event.target.value);
  }

  function handleClick() {
    setHeadingText(name);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;

//alternative approach that I orginally went for too

/*function App() {
 
  const [name, setName] = useState("");
  const [isClicked, setClicked] = useState(false);
 
  function handleChange(event) {
    setName(event.target.value);
  }
 
  function handleClick(){
    setClicked(true);
  }
 
  return (
    <div className="container">
      <h1>Hello {isClicked ?  name : ""}</h1>
      <input 
        onChange={handleChange} 
        type="text" 
        placeholder="What's your name?"
        value={name} 
      />
      <button
        onClick={handleClick}
      >Submit</button>
    </div>
  );
}
 
export default App;
*/
