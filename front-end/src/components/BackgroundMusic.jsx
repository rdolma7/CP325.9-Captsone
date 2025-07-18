 import { useEffect, useState } from 'react';
 import useSound from 'use-sound'
 import myBackgroundMusic from '../mp3/peaceful.mp3'
 const BackgroundMusicPlayer =({ volume })=>{

    volume = Number(volume) / 100

    const [play] = useSound(myBackgroundMusic, {loop: true, volume: volume});
    useEffect(()=>{
      play()
      }, [play]);

     return (
        <div></div>
     )
    
  }
  export default BackgroundMusicPlayer;