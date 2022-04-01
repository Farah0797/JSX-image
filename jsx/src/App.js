
import './App.css';
import React from 'react';
import './style.css';
import Image from "./image/pic2.jpg";


function App() {
  return (
    
<div className="App">
      <header className="App-header">
      <div style={{boder:'solid 1px black', maxWidth:'100vw'}}/>

 <h1 className='title red'>Your Name Here</h1>
 
<br />



   <img src={Image} style={{width:'400px',height:'400px'}} />

<br />


   <img src={"/pic.jpg"} alt="image" style={{width:'400px',height:'400px'}}/>

<br />

<video width={320} height={240} controls>

 <source src={"myVideo.mp4"} type={"video/mp4"} />

</video>
</header>
    </div>
  );
}

export default App;
