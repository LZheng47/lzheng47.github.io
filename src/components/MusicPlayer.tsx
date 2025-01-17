import { useState } from "react";
import "../styles/components/music-player.scss";

interface Props {
  start_time?: string;
  end_time?: string;
  live_demo_link?: string;
}

function MusicPlayer({ start_time, end_time, live_demo_link }: Props) {
  const [isPlay, setPlay] = useState(false);
  const [isShuffle, setShuffle] = useState(false);
  const [isLoop, setLoop] = useState(false);

  const music_controls = {
    shuffle: [() => setShuffle(!isShuffle), isShuffle],
    previous: [() => console.log("previous")],
    play: [() => setPlay(!isPlay), isPlay],
    next: [() => console.log("next")],
    loop: [() => setLoop(!isLoop), isLoop],
  };

  function MusicPlayerControl(e, control) {
    function changeControlActive(control: string, isActive: boolean): string {
      if (isActive) {
        return control + " music-ui-active";
      }
      return control + " music-ui-inactive";
    }

    console.log(e);
    music_controls[control][0]();

    if (control === "shuffle" || control === "loop" || control === "play") {
      e.target.className = changeControlActive(
        control,
        music_controls[control][1]
      );
      if (control === "play") {
        if (isPlay) {
          e.target.src = "./images/music/pause.png";
          if(live_demo_link != undefined){
            window.open(live_demo_link, "_blank")?.focus();
          }
        } else {
          e.target.src = "./images/music/play.png";
        }
      }
    }
  }

  return (
    <>
      <div className="music-ui">
        <div className="music-bar-container">
          <div className="music-bar"></div>
          <div className="music-circle"></div>
        </div>
        <div className="music-time-container">
          {start_time && <span>{start_time}</span>}
          {end_time && <span>{end_time}</span>}
        </div>
        <div className="music-controls-container">
          {Object.keys(music_controls).map((control, index) => (
            <img
              className={control}
              key={index}
              onClick={(e) => MusicPlayerControl(e, control)}
              src={"./images/music/" + control + ".png"}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MusicPlayer;
