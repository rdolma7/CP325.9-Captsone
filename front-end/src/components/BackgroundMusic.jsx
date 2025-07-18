 import { useEffect } from 'react';
 import useSound from 'use-sound'
 import myBackgroundMusic from '../mp3/peaceful.mp3'
 const BackgroundMusicPlayer =()=>{
    const [play] = useSound(myBackgroundMusic, {loop: true, volume: 1});
    useEffect(()=>{
      play()
      }, [play]);
  }
  export default BackgroundMusicPlayer;