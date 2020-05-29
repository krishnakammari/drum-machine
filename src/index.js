import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const sounds=[
  {
    key:'Q',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'

  },
  {
    key:'W',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    
  },
  {
    key:'E',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    
  },
  {
    key:'A',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    
  },
  {
    key:'S',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    
  },
  {
    key:'D',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    
  },
  {
    key:'Z',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    
  },
  {
    key:'X',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    
  },
  {
    key:'C',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    
  }
];

const App=()=>(

    <div id="display" className="display">
          {sounds.map((sound,idx)=>(
          <Box text={sound.key} keys={idx} audio={sound.mp3} />
          ))}
        </div>
);
  
class Box extends React.Component{

  constructor(props){
    super(props);
   this.audio=React.createRef();
  }
  playSound=()=>{
    this.audio.current.play();

  }
  render(){

    const {text,audio}=this.props;

    return(
      <div className="box" onClick={this.playSound}>
    {text}
    <audio ref={this.audio} src={audio} className="clip" id={text} />
      </div>
    );
  }
}
  


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('drum_machine')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//6-9-68