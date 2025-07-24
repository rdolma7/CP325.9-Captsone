import { useEffect, useState } from "react";
import useSound from "use-sound";
import myBackgroundMusic from "../mp3/jazz.mp3";

const BackgroundMusicPlayer = ({ volume }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [play, { sound }] = useSound(myBackgroundMusic, {
    loop: true,
    volume: Number(volume),
    soundEnabled: true,
  });

  const handlePlay = () => {
    play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    if (sound) {
      sound.stop();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.stop();
      }
    };
  }, [sound]);

  return (
    <>
      {!isPlaying ? (
        <button onClick={handlePlay}>Play Background Music</button>
      ) : (
        <button onClick={handlePause}>Pause Background Music</button>
      )}
    </>
  );
};
export default BackgroundMusicPlayer;
