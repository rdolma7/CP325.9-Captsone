import { useEffect, useState } from "react";
import useSound from "use-sound";
import myBackgroundMusic from "../mp3/jazz.mp3";
const BackgroundMusicPlayer = ({ volume }) => {
  const [selected, setSelected] = useState(false);

  const [play, { sound }] = useSound(myBackgroundMusic, {
    loop: true,
    volume: Number(volume),
    soundEnabled: selected,
  });
  useEffect(() => {
    if (selected) {
      play();
    }
  }, [selected, play]);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.stop();
      }
    };
  }, [sound]);

  return (
    <>
      {!selected && (
        <button onClick={() => setSelected(true)}>Play Background Music</button>
      )}
    </>
  );
};
export default BackgroundMusicPlayer;
