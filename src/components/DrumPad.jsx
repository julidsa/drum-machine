import PropTypes from "prop-types";
import { useRef } from "react";

function DrumPad(props) {
  const isPlaying = false;
  const audioRef = useRef();

  function handlePlay(e) {
    console.log(e.target.key);
    const audio = audioRef.current;

    if (!isPlaying) {
      audio.currentTime = 0;
      audio.play();
    }
  }

  function key() {
    console.log("hi");
  }

  return (
    <>
      <div
        className="drum-pad"
        id={props.name}
        onClick={handlePlay}
        onKeyDown={key}
      >
        {props.id}
        <audio
          className="clip"
          id={props.id}
          ref={audioRef}
          src={`https://s3.amazonaws.com/freecodecamp/drums/${props.audio}.mp3`}
        ></audio>
      </div>
    </>
  );
}

export default DrumPad;

DrumPad.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  audio: PropTypes.string.isRequired,
};
