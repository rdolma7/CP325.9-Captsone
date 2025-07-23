import { useEffect, useState } from "react";
import useSound from "use-sound";
import myBackgroundMusic from "../mp3/jazz.mp3";
const BackgroundMusicPlayer = ({ volume }) => {
  volume = Number(volume);

  const [play, { sound }] = useSound(myBackgroundMusic, {
    loop: true,
    volume: Number(volume),
  });
  useEffect(() => {
    play();
    return () => {
      stop();
    };
  }, [play]);

  useEffect(() => {
    if (sound) {
      sound.volume(Number(volume));
    }
  }, [sound, volume]);

  return <></>;
};
export default BackgroundMusicPlayer;
