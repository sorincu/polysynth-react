import React from "react";
import * as Tone from "tone";

window.addEventListener("keydown", checkKeyPressed, false);
let octave;
let duration;
let volume;

const Note = (props) => {
  octave = props.note.slice(-1);
  duration = props.duration;
  volume = props.volume;

  return (
    <div className={props.color} onClick={() => triggerNote(props.note, props.duration, props.volume)}>
      {props.note.slice(0, -1)}
    </div>
  );
};

function checkKeyPressed(evt) {
  switch (evt.code) {
    case "KeyA":
      triggerNote(`C${octave}`, duration, volume);
      break;
    case "KeyW":
      triggerNote(`C#${octave}`, duration, volume);
      break;
    case "KeyS":
      triggerNote(`D${octave}`, duration, volume);
      break;
    case "KeyE":
      triggerNote(`D#${octave}`, duration, volume);
      break;
    case "KeyD":
      triggerNote(`E${octave}`, duration, volume);
      break;
    case "KeyF":
      triggerNote(`F${octave}`, duration, volume);
      break;
    case "KeyT":
      triggerNote(`F#${octave}`, duration, volume);
      break;
    case "KeyG":
      triggerNote(`G${octave}`, duration, volume);
      break;
    case "KeyY":
      triggerNote(`G#${octave}`, duration, volume);
      break;
    case "KeyH":
      triggerNote(`A${octave}`, duration, volume);
      break;
    case "KeyU":
      triggerNote(`A#${octave}`, duration, volume);
      break;
    case "KeyJ":
      triggerNote(`B${octave}`, duration, volume);
      break;

    default:
      break;
  }
}

const triggerNote = (note, duration, volume) => {
  const synth = new Tone.Synth();
  synth.toDestination();
  synth.volume.value = 5 * (volume - 10);
  synth.partials = 2;

  synth.triggerAttackRelease(note, `${duration}n`);
};

export default Note;
