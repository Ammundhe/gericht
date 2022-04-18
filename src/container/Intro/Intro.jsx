import {useRef, useState} from 'react';
import {BsFillPlayFill, BsPauseFill} from "react-icons/bs";
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [videos, setVideos]= useState(false)
  const videoRef=useRef()
  return(
    <div className='app__videos'>
      <video ref={videoRef} src={meal} loop typeof='video/mp4' controls={false} muted/>
      <div className='app__videos-overlay flex__center'>
        <div className='app__videos-overlay_circle flex__center'
        onClick={()=>{
          setVideos(!videos);
          if (videos){
            videoRef.current.pause();
          }else{
            videoRef.current.play()
          }
        }}
        >
          {videos ? (
            <BsPauseFill color="#fff" fontSize={30}/>
          ):(
            <BsFillPlayFill color='#fff' fontSize={30}/>
          )
        }

        </div>
      </div>
    </div>
  )
};

export default Intro;
