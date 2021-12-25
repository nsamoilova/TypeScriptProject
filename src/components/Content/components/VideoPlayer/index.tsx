import React, {useEffect, useRef, useState} from 'react';
import Videos from 'videos/mov_bbb.mp4';
import Button from 'components/Form/Button';
import Input from 'components/Form/Input'

const VideoPlayer = () =>{
    const video = useRef<HTMLVideoElement>();

    const [isPlay, isSetPlay] = useState(false);
    const [value, setValue] = useState<number>()

 

 useEffect(() => {
     
//        if(isPlay){
//       video.current.play()
//   }else {
//       video.current.pause()
//   }

isPlay ? video.current.play() : video.current.pause()
 },[isPlay])


const onClickPlay = () =>{
    isSetPlay(!isPlay)
}

    // const onClickPlay = () => {
    //   video.current.play().pause()
    // }

    // const onClickPause = () => {
    //     video.current.pause()
    //   }

    const onClickVideo = () => {
        isSetPlay(true)
    }

  const onChangeVolume = (value: string ) => {
         video.current.volume = +value
         setValue(+value)
     
  }

    return(
        <div>
     <video ref={video} onClick={onClickVideo}>
         <source src={Videos} type="video/mp4"></source>
     </video>
     <br/> 
     <Input onChange = {onChangeVolume} type='number' step='0.1'/>
     <Button onClick={onClickPlay}> {isPlay ? 'Pause' : 'Play'} </Button> 
        </div>
     
    )
    
}

export default VideoPlayer;